// service-worker.js
importScripts('https://unpkg.com/figlet/umd/figlet.min.js');
importScripts('./api/command/help.js');
importScripts('./api/command/ping.js');
importScripts('./api/command/ascii.js');
importScripts('./api/command/fortune.js');
importScripts('./api/command/whoami.js');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });

const scopeURL = new URL(self.registration.scope);
const base = scopeURL.pathname.replace(/\/$/, ''); 
const apiPrefix = `${base}/api/command`;

console.log('[SW] scope:', scopeURL.href, 'base:', base, 'apiPrefix:', apiPrefix);

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const route = url.pathname.replace(/\/+$/, '');

  if (!route.startsWith(apiPrefix)) return;

  event.respondWith((async () => {
    try {
      console.log('[SW] intercept:', route);
      if (route === `${apiPrefix}/help`)    return json(self.handleHelp());
      if (route === `${apiPrefix}/ping`)    return json(self.handlePing());
      if (route === `${apiPrefix}/ascii`)   return json(await self.handleAscii(url.searchParams.get('text')));
      if (route === `${apiPrefix}/fortune`) return json(self.handleFortune());
      if (route === `${apiPrefix}/whoami`)  return json(self.handleWhoami());
      return json({ error: 'Not found' }, 404);
    } catch (e) {
      console.error('[SW] handler error:', e);
      return json({ error: 'handler error' }, 500);
    }
  })());
});
