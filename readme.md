# Stella

Stella is a friendly Discord AI chatbot powered by Google Gemini. It can chat, answer questions, and assist with coding or server tasks.
Built on Google's Gemini 2.5 Flash Lite model, Stella delivers fast and intelligent responses to enhance your Discord experience.

[![Static Badge](https://img.shields.io/badge/Invite%20Stella-%235865F2?style=for-the-badge&logo=discord&logoColor=white)](https://invite-stella.vercel.app/)

## ✨ Features
- AI-Powered Responses : Generates text and answers questions using Google Gemini 2.5 Flash Lite.

- Code Assistance : Helps with coding, debugging, and explaining programming concepts.

- Conversational AI : Engages in natural, human-like conversations.

- Discord Integration : Seamlessly interacts with users in Discord servers.

- Optimized for Performance : Uses efficient chunking for larger responses and smartly reject absurdly long requests.

- Lightweight & Fast : Built for quick responses with minimal resource usage.

## 📦 Installation
#### Want to run Stella locally ?
Here's what you'll need and how to do it.

- Get a ***Gemini API Key*** : [Click Here](https://ai.google.dev/gemini-api/docs/api-key?authuser=1) to get your own Gemini API Key.

- Create a bot : Login To [Discord Developer Portal](https://discord.com/developers/applications) and create a bot.

- Get your Unique ***Bot Token*** : Go into your *Bot* > *bot* > *reset Token* > Then copy the *Token*.

- Get your ***client ID*** : Go into your *Bot* > *OAuth2* > Under Client Information copy *Client ID*.

**Clone the Repository :**
```bash
git clone https://github.com/NexusWasLost/Stella
```

**Install the dependencies :**
```bash
npm install
```

**Create a ```.env``` file and paste your credentials :**
```bash
BOT_TOKEN = your-bot-Token
CLIENT_ID = your-client-id
GEMINI_API_KEY = your-gemini-api-key
```

**Register the commands :**
```bash
node botCommands.js
```

**Start the Bot :**
```bash
nodemon bot.js
```

## ℹ Additional Information and Credits
- Stella is built using the Discord.js library to handle interactions seamlessly. For registering new commands or troubleshooting, refer to their official documentation.

- You can integrate any other AI service, but setup requirements may vary, and it will be your sole responsibility to configure it correctly.

- By default, Stella uses Google Gemini’s free-tier API, but you are free to upgrade to a higher tier if needed.

- Customization is encouraged! By default Stella *does not retain any context* due to storage limitations and to ensure fast performance. You are free tweak Stella’s behavior, responses, and AI model settings as per your needs.

- Ensure you have the necessary API keys and permissions when making modifications to avoid service disruptions.

- The profile picture used for Stella is sourced from [Pinterest](https://www.pinterest.com/); credits are attributed to the original creator.

- The profile banner used for Stella is made using [Creative](https://auto.creavite.co/).
