export async function handleAscii(text) {
  const safe = (text || "hello").toString().slice(0, 64);
  const art = await new Promise((resolve) => {
    self.figlet.text(safe, (err, data) => resolve(err ? "Error generating ASCII" : data));
  });
  return { response: [art] };
}
