export function handlePing() {
  return { response: [`pong (${Math.floor(Math.random()*100)} ms)`] };
}
