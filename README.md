# Viper Hacker Terminal

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=flat&logo=railway&logoColor=white)


## Live Demo

- **Frontend (GitLab Pages):** [https://viepertech.github.io/viper-hacker-demo](https://viepertech.github.io/viper-hacker-demo/)
- **Backend (Railway API):** [https://viper-hacker-demo-production.up.railway.app/api/command/help](https://viper-hacker-demo-production.up.railway.app/api/command/help)



## What Is This?

A hacker terminal built with:

- Node.js + Express backend (API for commands)
- HTML/CSS/JavaScript frontend (terminal emulator)
- Hosted on Railway (backend) and GitLab Pages (frontend)



## Supported Commands

| Command        | Description                            |
|----------------|----------------------------------------|
| `help`         | List all supported commands            |
| `ping`         | Returns a simulated network ping       |
| `fortune`      | Shows a random hacker-style fortune    |
| `ascii <text>` | Displays ASCII art using figlet        |
| `whoami`       | Returns a fun hacker alias             |
| `clear`        | Clears the terminal output             |



## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js, figlet, CORS
- **Hosting:** Railway (backend), GitLab Pages (frontend)



## Getting Started

1. Clone the repo
2. Run the backend locally:
   
   ```bash
   cd backend
   npm install
   node index.js
   ```
## Gitlab Workflows

- ![Backend Healthcheck](https://github.com/Viepertech/viper-hacker-demo/actions/workflows/backend-healthcheck.yml/badge.svg)
