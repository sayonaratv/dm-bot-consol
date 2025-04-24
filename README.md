# DMall Bot

Originally created by [Unknown](https://github.com/sayonaratv)

## Description

DMall Bot is a Discord bot designed to send direct messages (DMs) to all members of a selected server. The bot allows you to:
1. Enter the bot token to bring the bot online.
2. Display a list of all servers where the bot is a member, showing details like server name, owner, permission to DM all members, and the number of members.
3. Choose the server you want to send DMs to.
4. Enter the message you want to send to all members.
5. Display a summary of how many members received the message and how many did not.

## Disclaimer
This program is designed for educational purposes only. When using this script or any similar tools, please adhere to the following guidelines:

- Do not spam: Avoid sending mass direct messages to users without their consent. This can be considered spam and is against Discord's Terms of Service.
- Respect privacy: Do not use the script to gather personal information or harass users.
- Follow Discord's policies: Ensure that your use of the script complies with Discord's [Terms of Service](https://discord.com/terms) and [Community Guidelines](https://discord.com/guidelines).
- Use responsibly: Only use the script in environments where you have explicit permission to do so.

Failure to follow these guidelines could result in your account or bot being restricted or banned by Discord.

## Setup and Usage

### Prerequisites

- Node.js installed on your machine.
- A Discord bot token. You can create a bot and get its token from the [Discord Developer Portal](https://discord.com/developers/applications).

### Installation

1. **Clone the repository or download the code.**

```bash
git clone https://github.com/yourusername/dmall-bot.git
cd dmall-bot
```

2. **Initialize a new Node.js project and install the required dependencies.**

```bash
npm init -y
npm install discord.js
```

### Running the Bot

1. **Run the bot using Node.js.**

```bash
node index.js
```

2. **Follow the prompts to:**
   - Enter your bot token.
   - Select the server to send DMs to.
   - Enter the message you want to send.

3. **The bot will display a summary of how many members received the message and how many did not.**

### Notes

- Use this bot responsibly and in accordance with Discord's Terms of Service.
- Ensure your bot has the necessary permissions to send messages to members in the selected server.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/sayonaratv/Discord-Dmall-Consol/blob/main/LICENSE) file for details.
