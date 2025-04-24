const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const readline = require("readline");

// Function to create a new readline interface
const createReadlineInterface = () => {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
};

// Function to prompt for input from the console
const promptInput = (rl, query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

let token = "";
let dmMessage = "";
let client = null;

const promptServerAndSendDMs = async () => {
  const rl = createReadlineInterface();
  const guilds = client.guilds.cache;
  let guildList = [];
  let index = 1;

  console.log("\nAvailable Servers:");
  for (const [guildId, guild] of guilds) {
    try {
      const owner = await guild.fetchOwner();
      const members = await guild.members.fetch();
      const canDMAll = guild.members.me.permissions.has("ADMINISTRATOR")
        ? "yes"
        : "no";
      guildList.push({
        index,
        id: guildId,
        name: guild.name,
        owner: owner.user.tag,
        canDMAll,
        memberCount: members.size,
      });
      console.log(
        `${index} | Server: ${guild.name}, Owner: ${owner.user.tag}, Can DM All: ${canDMAll}, Members: ${members.size}`
      );
      index++;
    } catch (error) {
      console.log(`Failed to fetch details for guild ${guild.name}: ${error}`);
    }
  }

  console.log(`C | Option: Change Token`);
  console.log(`X | Option: Exit\n`);

  const chosenOption = await promptInput(
    rl,
    "Enter the number of the server, C to change token, or X to exit: "
  );

  if (chosenOption.toUpperCase() === "X") {
    console.log("Exiting the script. Goodbye!");
    rl.close();
    client.destroy();
    process.exit(0);
  } else if (chosenOption.toUpperCase() === "C") {
    console.log("Changing the token...");
    rl.close();
    client.destroy();
    return startBot(); // Restart the bot with a new token
  }

  const chosenGuild = guildList.find((g) => g.index === parseInt(chosenOption));

  if (!chosenGuild) {
    console.log("Invalid option chosen. Returning to server list.\n");
    rl.close();
    return promptServerAndSendDMs();
  }

  console.log(); // Adding an extra line for spacing

  const guild = guilds.get(chosenGuild.id);
  const members = await guild.members.fetch();

  const totalMembers = members.size;
  const totalBots = members.filter((member) => member.user.bot).size;
  const totalUsers = totalMembers - totalBots;
  const totalOnline = members.filter(
    (member) => member.presence?.status === "online"
  ).size;

  console.log(`\nServer Selected: ${guild.name}`);
  console.log(`- Total Users (non-bots): ${totalUsers}`);
  console.log(`- Total Bots: ${totalBots}`);
  console.log(`- Total Online Members: ${totalOnline}`);
  console.log(`- Total Members: ${totalMembers}`);

  dmMessage = await promptInput(
    rl,
    `\nWhat is the message to send to all members ? `
  );
  rl.close();

  console.log(); // Adding an extra line for spacing

  let successCount = 0;
  let failureCount = 0;

  for (const member of members.values()) {
    if (!member.user.bot) {
      try {
        await member.send(dmMessage);
        console.log(`DM sent to ${member.user.tag}: SUCCESS`);
        successCount++;
      } catch (err) {
        console.log(`DM to ${member.user.tag} FAILED: ${err.message}`);
        failureCount++;
      }
    }
  }

  console.log(`\nSummary:`);
  console.log(`- Total members: ${totalMembers}`);
  console.log(`- Members who received the message: ${successCount}`);
  console.log(`- Members who didn't receive the message: ${failureCount}`);
  console.log(
    `- Ratio: ${successCount}/${totalMembers} members received the message\n`
  );

  console.log("Returning to server list...\n");
  return promptServerAndSendDMs(); // Restart the process
};

const startBot = async () => {
  const rl = createReadlineInterface();
  token = await promptInput(rl, "Enter your bot token: ");
  rl.close();

  client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildPresences,
    ],
  });

  client.once("ready", async () => {
    console.log("Note: Bot is online!\n");
    await promptServerAndSendDMs(); // Start the DM process
  });

  client.login(token).catch((err) => {
    console.error("Failed to login. Invalid token provided or network issue.");
    console.error(err);
    process.exit(1); // Exit with error
  });
};

startBot();
