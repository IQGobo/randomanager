A Discord bot that manages speedrunning competitions based on posting a link to a seed and reacting to the message.

Status
======

/!\ Currently only able to connect to a server and send a few basic replies, no event management as of now! /!\

Newer versions of the discord.js library require some rather big changes, most sample code out there is outdated.

More research needed on
- which intents are needed on connect for our planned features
- which permissions are needed
- updated/deprecated events

Installation instructions
=========================

This is a node JavaScript project that requires node version 1.16 or newer.

Clone the repository and install the node modules:
  $ git clone https://github.com/IQGobo/randomanager
  $ cd randomanager
  $ npm install

On your discord developer page https://discord.com/developers/applications, create a new application.
Next, navigate to the "Bot" page and add a bot. Then copy the token from that page for the next step.

Create a file ".env" inside of the randomanger directory that contains your bot token:
  $ echo TOKEN=pasteYourTokenHere > .env

If you did not already, enable developer mode in your user settings under the advanced section. This
will allow you to right click your server icon in Discord and copy the ID, also known as the Guild ID.
Add this ID to the .env file (caution: TWO angled brackets!):
  $ echo GUILDID=pasteYourGuildIDHere >> .env

Navigate to the OAuth2 page on your discord app page and copy the Client ID, then add it to the .env:
  $ echo CLIENTID=pasteYourClientIDHere >> .env

Go to the OAuth2 page on your discord app page and then to URL Generator.
There, check the following boxes (first two are in the scopes section the rest under bot permissions):
- bot
- applications.commands
- Read Messages/View Channels
- Manage Events
- Send Messages
- Send Messages in Threads
- Manage Messages
- Embed Links
- Attach Files
- Read Message History
- Mention Everyone
- Use External Emojis
- Add Reactions
- Use Slash Commands

At the bottom of the page, copy the invite link and open it in a browser. Completing
the form on that page will add the bot to your selected server.

Start the bot:
  $ node index.js

Bot commands
============

The bot supports the following commands:
- "/ping": the bot will reply to your message with "pong!". Just for testing purposes.
- "/roll 2d20": the bot will roll 2 twenty-sided dice and reply with the result
