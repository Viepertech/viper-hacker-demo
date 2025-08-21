const aliases = ["ghost1337","neoX","cyber_wraith","zeroDay","byte_ninja"];
export function handleWhoami() {
  return { response: [`You are: ${aliases[Math.floor(Math.random()*aliases.length)]}`] };
}
