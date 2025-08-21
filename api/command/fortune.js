(function () {
  const fortunes = [
    "Today is not the day to run `rm -rf /`—nor is any day.",
    "Pro tip: alias rm='rm -i' until coffee is acquired.",
    "Use `--dry-run` first; future-you will applaud.",
    "`sudo` is not a love language.",
    "Backups: because 'oops' scales horizontally.",
    "The bug will vanish the moment you start screen-sharing.",
    "It’s DNS. If not, it’s permissions."
  ];

  self.handleFortune = function () {
    const pick = fortunes[Math.floor(Math.random() * fortunes.length)];
    return { response: [pick] };
  };
})();
