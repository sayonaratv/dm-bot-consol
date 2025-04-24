# Discord Direct Message Bot

This project is a **Discord bot** designed to send direct messages (DMs) to all members of a selected server. The bot is built using the [Discord.js](https://discord.js.org/) library and provides an easy-to-use console interface for managing servers, selecting recipients, and sending messages.

Originally created by [Unknown](https://github.com/sayonaratv)

## Disclaimer
This program is designed for educational purposes only. When using this script or any similar tools, please adhere to the following guidelines:

- Do not spam: Avoid sending mass direct messages to users without their consent. This can be considered spam and is against Discord's Terms of Service.
- Respect privacy: Do not use the script to gather personal information or harass users.
- Follow Discord's policies: Ensure that your use of the script complies with Discord's [Terms of Service](https://discord.com/terms) and [Community Guidelines](https://discord.com/guidelines).
- Use responsibly: Only use the script in environments where you have explicit permission to do so.

Failure to follow these guidelines could result in your account or bot being restricted or banned by Discord.

## Features

- **Server Selection**: Lists all the servers the bot is a part of, allowing the user to select one.
- **Detailed Server Info**: Displays the server's name, total members, number of bots, number of users (non-bots), and the count of online members before sending messages.
- **Custom Message Input**: Prompts the user for the message to send to all eligible members of the selected server.
- **DM Status Tracking**: Provides a summary of how many messages were successfully sent and how many failed.
- **Token Management**: Allows the user to change the bot token directly within the console.
- **Exit Option**: Cleanly exits the application if desired.

## Prerequisites

Before you can use this bot, ensure you have the following:

1. **Node.js**: Download and install [Node.js](https://nodejs.org/).
2. **Discord Bot Token**: Create a bot on the [Discord Developer Portal](https://discord.com/developers/applications) and get its token.
3. **Required Permissions**: Add the bot to a server with the following permissions:
   - `Read Messages`
   - `Send Messages`
   - `Manage Messages` (optional, if you need advanced management)

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/sayonaratv/discordjs-dmall-consol.git
   cd discordjs-dmall-consol
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the bot:
   ```bash
   node index.js
   ```

2. When prompted, enter your bot token.

3. Select a server from the list displayed in the console.

4. View the server's details (name, total users, bots, and online members).

5. Enter the message you wish to send to all members.

6. The bot will attempt to DM all members (excluding bots) and display a summary of the results.

7. After completing the process:
   - You can select another server.
   - Change the bot token by entering `C`.
   - Exit the application by entering `X`.

## Example Output

```
Available Servers:
1. Server: MyServer, Owner: Owner#1234, Can DM All: yes, Members: 100
2. Server: AnotherServer, Owner: Admin#5678, Can DM All: no, Members: 50
C. Change Token
X. Exit

Enter the number of the server, C to change token, or X to exit: 1

Server Selected: MyServer
- Total Users (non-bots): 80
- Total Bots: 20
- Total Online Members: 50
- Total Members: 100

What is the message to send to all members in MyServer? Hello everyone! This is a test message.

DM sent to User#1234: SUCCESS
DM sent to User#5678: FAILED
...

Summary:
- Total members: 100
- Members who received the message: 78
- Members who didn't receive the message: 2
- Ratio: 78/100 members received the message

Returning to server list...
```

## Known Limitations

- The bot cannot DM members who have disabled DMs from server members.
- Discord imposes rate limits for sending messages. If the bot hits these limits, some messages may fail.

## Contributing

Contributions are welcome! If you'd like to add new features or fix bugs, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
