// Load figlet UMD for ASCII in worker scope
importScripts('https://unpkg.com/figlet/umd/figlet.min.js');

// Import your command handlers
importScripts('../api/command/help.js');
importScripts('../api/command/ping.js');
importScripts('../api/command/ascii.js');
importScripts('../api/command/whoami.js');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (!url.pathname.startsWith('/api/command')) return; // only handle our fake API

  event.respondWith((async () => {
    const path = url.pathname.replace(/\/+$/,''); // trim trailing /
    try {
      if (path === '/api/command/help')        return json(self.handleHelp());
      if (path === '/api/command/ping')        return json(self.handlePing());
      if (path === '/api/command/ascii')       return json(await self.handleAscii(url.searchParams.get('text')));
      if (path === '/api/command/whoami')      return json(self.handleWhoami());
      return json({ error: 'Not found' }, 404);
    } catch (e) {
      return json({ error: 'handler error' }, 500);
    }
  })());
});
