
![Ajs/Ogar-Unlimited - Graphics by LegitSoulja](http://ogarul.tk/ajs.png)
### - The Next Generation Ogar
[![Build Status](https://travis-ci.org/AJS-development/Ogar-unlimited.svg?branch=master)](https://travis-ci.org/AJS-development/Ogar-unlimited) [![Join the chat at https://gitter.im/AJS-development/Ogar-unlimited](https://badges.gitter.im/AJS-development/Ogar-unlimited.svg)](https://gitter.im/AJS-development/Ogar-unlimited?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)  [![GitHub issues](https://img.shields.io/github/issues/AJS-development/Ogar-unlimited.svg)](https://github.com/AJS-development/Ogar-unlimited/issues)  [![GitHub forks](https://img.shields.io/github/forks/AJS-development/Ogar-unlimited.svg)](https://github.com/AJS-development/Ogar-unlimited/network)  [![GitHub stars](https://img.shields.io/github/stars/AJS-development/Ogar-unlimited.svg)](https://github.com/AJS-development/Ogar-unlimited/stargazers)  [![Plugin](https://img.shields.io/badge/Official%20Plugin%20Library-OgarUL--Plugin--Library-green.svg)](https://github.com/AJS-development/OgarUL-Plugin-Library)  [![MS](https://img.shields.io/badge/Client-AJS--dev-green.svg)](https://github.com/AJS-development/OgarUL-Client) [![Plugin](https://img.shields.io/badge/Forums-OgarUl-green.svg)](http://forum.ogarul.tk) [![Plugin](https://img.shields.io/badge/Stats-OgarUl-green.svg)](http://stats.ogarul.tk)  [![MS](https://img.shields.io/badge/Client-AJS--dev-green.svg)](http://play.ogarul.tk) 
[![Demo] (https://img.shields.io/badge/Demo-Heroku-green.svg)] (https://github.com/AJS-development/Ogar-unlimited/wiki/Demos)

A fully functional open source Agar.io server implementation, written in Node.js by AJS development team. Ogar Unlimited is designed to be used with the latest Agar.io client and also our own official client, [*play.ogarul.tk*](http://play.ogarul.tk/). It is basically what it says in the title, Ogar, except its functionality is unlimited!

###### Installation Guide (short)
1. Download and install Node
    * Required version [**v5.9.0**](https://nodejs.org/download/release/v5.9.0/)
2. Download Ogar Unlimited (Zip or Git)
    * [Download Latest Zip](https://github.com/AJS-development/Ogar-unlimited/archive/master.zip)
    * ``` git clone git@github.com:AJS-development/Ogar-unlimited.git ```
3. Once downloaded
    * CD to the extracted zip folder, or clone to **Ogar-unlimited** folder.
4. Install Modules
    * Run command using cmd, or terminal **npm install**, wait until done. Otherwise,
    * Run Install Dependencies (Windows).bat file in the **src** folder.
5. Launch Ogar Unlimited
    * CD to the **src** folder inside **Ogar-unlimited** and run the start.bat/sh file or use command (**node index**).
    * Just run **Start.bat** inside **src** folder (Windows only)
6. You're all done. Now, you can play it by using `play.ogarul.tk`. Continue reading for more info

###### Troubleshooting, FAQ and Tutorial
[Troubleshooting Guide](https://github.com/AJS-development/Ogar-unlimited/issues/1335)

[FAQ](https://github.com/AJS-development/Ogar-unlimited/issues/1336)

[How To Tutorial](https://github.com/AJS-development/Ogar-unlimited/issues/729)

### Highlight features in Ogar Unlimited
 1. More commands! (eg. `pmsg`, `merge`, `freeze`; see [here](https://github.com/AJS-development/Ogar-unlimited#console-commands) for more info)
 2. OP (Makes player OP, see [here](https://github.com/AJS-development/Ogar-unlimited#op245---guide) for more info)
 3. More game modes! (see [here](https://github.com/AJS-development/Ogar-unlimited#custom-game-modes) for more info)
 4. Ban, Unban, Ban List (with revolutionary ban technique, no lag, no DDoS attacks)
 5. Autoban option (see config.ini or advConfig.ini)
 6. Better physics (ejected mass, split, autosplit, virus, etc.)
 7. Colortext command (changes console output color and style)
 8. Live console (see advConfig.ini, where a live console appears) *NOTE: This is way different that Ogarserv's Console*
 9. Restart (make it restart automatically or restart manually) *NOTE: Only works if use windows start script*
 11. Veteran skins and custom skins (see [here](https://github.com/AJS-development/Ogar-unlimited#veteran-skins-and-custom-skins-guide) for more info)
 12. Minions (see [here](https://github.com/AJS-development/Ogar-unlimited#minions) for more info)
 13. Banlist file
 14. "Opbyip" (Makes player always OP using player's IP)
 15. Database free high score keeper
 16. Easy verify system (anti bot measure, see config.ini or advconfig.ini)
 17. Mousefilter (anti bot measure, see config.ini or advconfig.ini)
 18. Plugins (add gamemodes and commands easily! see [here](https://github.com/AJS-development/Ogar-unlimited/wiki/Plugin-API-Tutorial) for how to make your own plugin!)
 19. Uniban (a pre-made banlist of already known bad IPs)
 20. Garbage collection (prevent memory leaks)
 21. Chat *(play.ogarul.tk only)*
 22. Multi server support (see [multiverse](https://github.com/AJS-development/Ogar-unlimited#multiverse)) *(play.ogarul.tk only)*
 23. Teaming bots (for testing purposes)
 24. Client's configuration (see clientConfig.ini) *(play.ogarul.tk only)*
 25. Language support (currently English and Spanish)
 26. Tutorials (runs only once in console)
 27. Quadrants (improves performance and reduce lag)
 28. Chat commands *(play.ogarul.tk only)*

### Note:
Please note that this is updated very frequently and you should check for updates every week. I added an update system but It needs to be initialized by you (because I don't think it is the right thing to do, updating without your consent). Also you may copy this and modify it just please give some credit to the hard working dev team, that is all I care. Another note is that I am sometimes terrible in my grammar (I still cannot spell potato out loud). If there is an issue, please notify me. If there is something you want in this, just make a pull request.

### DO NOT BUY OGAR UL!
If you've purchased a copy of Ogar UL, you just got scammed. It is open source which means it is FREE. Yes, FREE! So if you paid any money, well, too bad.

### Do not get from other sources
If you got OgarUL from anywhere besides github, DELETE IT IMMEDIATLY!!! Those might be bundled with viruses and other things. Remember, you are running this probably from `sudo`. Get it from github only!!! : https://github.com/AJS-development/Ogar-unlimited

### How can I get plugins? Is there any official library?
Yes, we have our own official library. It's only right here: https://github.com/AJS-development/OgarUL-Plugin-Library

~~To install any plugins from the library, first do `plugin available` and remember the name of the plugin you want.~~
[DEPRECATED] Use `plugin search [terms]` instead and then do `plugin install [name]`. The `name` arg is the name from the search terms.

### How do I use other plugins?
To use a plugin, simply download the folder and drag it into the plugins folder in "src" or use the `plugin add` command. To use the plugin add command, the plugin must have a "files.txt" file. Then click on that file, click raw, and then copy the url. Then do `plugin add [url] [pluginname]` and it will even reload automatically for you. Thats it! Example, doing `plugin add https://raw.githubusercontent.com/AJS-development/OgarUL-Plugin-Library/master/devtools-plugin/files.txt devtools` will add a plugin called devtools to your plugins.

### How do I create a plugin? Is there any documentation?
This is the fun part, creating your own plugins. There is an example plugin you should look at and there is a template plugin. To get started, you can look at the plugin API documentation [here](https://github.com/AJS-development/Ogar-unlimited/wiki/Plugin-API-Tutorial).

### Multiverse
Multiverse is for having multiple servers in one console. The command for multiverse is `multiverse [command] [arg]`. Available commands are:
- `multiverse create [name] [port] [gamemode] [title(optional)]` - Creates a server (the title arg is optional and spaces are allowed, which is to display it in the client aka play.ogarul.tk. Note that only the main server has a statsport and sends multiverse data.)
- `multiverse list` - Listing all servers and their ports (also tells which server is a main server)
- `multiverse remove [name]` - Remove a server
- `multiverse select [name]` - Selects which server that you want to control

### Easy Verify
For those of you who have trouble with minions and such, this feature is for you. Currently, there is no program that can get through all of ogar unlimited's filters and features, but in some future, someone might be able to crack the other anti bot measures. So we created an easy verify system, a currently foolproof system that filters out the bots. To turn on, turn `verify` to 1 in advConfig.ini . Then when a player spawns, he is frozen at a spot and is given a 3 digit code. Then that player presses "W" to kill himself and types in the code in the nickname box. Afterwards, when pressing "Play" again, it shows a success message. Press "W" again to play.

### Minions
In order to use minions, you can spawn them by typing `minion [yourid] [amount] [minionname]` in console. The way that client controls the minion between agar.io and play.ogarul.tk are different. To control your minions:

#### play.ogarul.tk
Input | Description
----|----
E | Split the minion
R | Makes minion to eject some mass
T | Freeze the minion

#### agar.io (change `useER = 0` in config.ini)
Input | Description
----|----
Q | Toggles control mode between you and your minion (a letter "B" will appear next to your name, indicates that you are in "minion" mode)
Space | Split the minion (while in "minion" mode)
W | Makes minion to eject some mass (while in "minion" mode)
You can disable minions by typing `minion [id]` in console, or do `minion destroy` and it will remove all minions in your server.

### OP
OP is use for having fun in your server like trolling, increases your mass, playing virus, etc. You can make yourself OP by doing `op [yourid]` in console. To toggle between modes, you need to press Q in order to use OP's features. The C's will appears next to your name. If you press Q again, it will add another C until you have 4 C's. If you press Q once again, it will go back to normal state. What these does is:

C's(in order) | When pressing "W" | When pressing "Space"
----|----|----
C | Gives you 100 more mass | Able to merge instantly (for short of time)
CC | Shoots virus | Shoots tiny "things" (almost invisible) that if someone eats it, their mass reduced by 100
CCC | Shoots "troll" virus | Shoots "exploding" virus
CCCC | Shoots "one-hit-kill" virus | Shoots "gtfo-from-my-server" virus
No C's | Normal feed | Normal split

* Note: Names (CC's) don't work when player's name is blank and it doesn't work on Leap gamemodes and/or while using minions. Also, you can configure this in config.ini 

## Skin list and custom skins
**Play.ogarul.tk**
- Click "Want skin list?" located at the bottom. Then you can choose the skin that you wanted. After that, type your name next to the `<skinname>`. (eg: `<nuclear>Bomb` would give you a "nuclear" skin and your name would be "Bomb")

**Agar.io**
- To use agar.io skins, do `<skinname>` and then your name. For example `<spy> lol` will give you "spy" skin with name of "lol". You can also use a custom skin from a website by using `[website]name` *(you need to use a url shortener though)*

You can use custom skins by putting them in customskins.txt. The format should be `[skin_shorcut] :http//image_url` for using skin image from URL, or use `[skin_shortcut] :%skinname` for using agar.io skin instead. To use URL skin, use `:http//url_image`. **NOTE: Use only "http"(not "https"). Also, don't forget to put `:` before "http")**

You can see more detailed guide on the [wiki](https://github.com/AJS-development/Ogar-unlimited/wiki/Skins-and-skin-shortcuts)

## Obtaining and Using
As Ogar Unlimited is written in Node.js, you must have Node.js and its modules installed to use it ~~(unless you are using the Windows binary)~~. You can usually download Node using your distribution's package manager (for *nix-like systems), or from [the Node website](http://nodejs.org). To install the modules that is required, open up your system command line (cmd for windows, terminal for mac) and simply type "npm install". To see a detailed guide go to the [Installation guide] (https://github.com/AJS-development/Ogar-unlimited/wiki/Installation) in the wiki.

~~(Binarys are also available in Releases)~~ OUTDATED

Currently, OgarUL listens on the following addresses and ports:
* *:88 - for the stats server (I would use it to track servers)
* *:443 - for the game server

Please note that on some systems, you may have to run the process as root or otherwise elevate your privileges to allow the process to listen on the needed ports. **If you are getting an EADDRINUSE error, it means that the port required to run Ogar UL is being used. Usually, Skype is the culprit. To solve this, either close out skype, or change the serverPort value in settings/advconfig.ini to a different port. You will have to change your ip connection to "127.0.0.1:PORT"**

Once the game server is running, you can connect (locally) by typing `play.ogarul.tk/?ip=127.0.0.1:443` into your browser's address bar.

## Configuring Ogar UL
To control how your server is running, you can edit your settings to your own liking in `src/settings/`. If you don't want your config gets overwritten by updates, you can copy the configs and paste it into `config.ini`

## Custom Game modes
Ogar UL has support for custom game modes. To switch between game modes, change the value of "serverGamemode" in the configurations file to the selected game mode id and restart the server. The current supported game modes are:

Id   | Name                         | Additional Description
-----|------------------------------|-----------------------
0    | Free For All                 | Everyone on there own
1    | Teams                        | Team and be the best
2    | Experimental (As of 6/13/15) | Something cool
3    | Timed FFA                    | Normal FFA but with time limit (see config.ini for time configuration)
4    | Virus Off                    | No virus in the map
5    | UnlimitPVP                   | Where you can split indefinitely and rejoin instantly - 1v1 game (created by me)
6    | UnlimitFFA                   | Same as above (Unlimited PVP) except in FFA (created by me)
7    | Shrinking FFA                | Shrinks the game(map size) as time passes
8    | Experimental v2              | An improved Experimental mode
10   | Tournament                   | Normal FFA, but with no respawn and time limit
11   | Hunger Games                 | Adapted from a movie called "The Hunger Games"
12   | Zombie Mode                  | Infection-like mode
13   | Team Z                       | Teaming in Zombie Mode
14   | Team X                       | Teaming in Experimental
15   | NoCollision Teams            | Same as Teams mode but no collision between teammates
16   | NoCollision TeamZ            | Same as Team Z mode but no collision between teammates
17   | NoCollision TeamX            | Same as Team X mode but no collision between teammates
18   | Leap                         | Where you leap instead of split (made by Ogarplus)
20   | Rainbow FFA                  | Where every entity gets rainbow effect. Hint: Use "Acid Mode" in the custom client's settings
22   | BlackHole                    | Normal FFA but with one big black hole in the middle of the map.

## Chat Commands
The available in-game chat commands.

 Command                      | Usage
------------------------------|-----------------------------------------------------------------------------------------------
help                          | Shows list of commands
color [r] [b] [g]             | Changes the color of your chatname
mute                          | Mutes/unmutes chat
pm [chatname] [msg]           | sends a private message

## Console Commands
The current available console commands are listed here. Command names are not case sensitive, but player names are.

 Command                      | Usage
------------------------------|-----------------------------------------------------------------------------------------------
help                          | Shows list of commands
ophelp                        | Shows how to use op
addbot [number]               | Adds [number] of bots to the server. If an amount is not specified, 1 bot will be added.
announce                      | Starts the high score announce feature.
ban [ip]                      | Bans an IP and sends a Message. Do (**ban record**) to record a ban.
banlist                       | Lists banned IP's
clearban                      | Clears ban list
unban [ip]                    | Unbans an IP
blind [id]                    | Blinds/Unblind a player (player can't see other players)
board [String 1] [String 2] ...| Replaces the text on the leaderboard with the string text.
boardreset                    | Resets the leaderboard to display the proper data for the current gamemode
change [config setting] [value]| Changes a config setting to a value. (Usage: **change serverMaxConnections 32**).Note that some config values (Like serverGamemode) are parsed before the server starts so changing them mid game will have no effect.
changelog [page]              | Changelog of the latest update. The arg **[page]** is a number of page
chat [command] [args]         | Chat from console. (all, pm) (Usage: **chat all [msg]**)
chatban [id]                  | Ban people user id from chatting.
clear                         | Clears the console output
color [id] [r] [g] [b]        | Replaces the color of the specified player with this color.
colortext [color]             | Changes console color and style. (blue, green,red,yellow,bold,reset,dim,white, help)
enlarge [amount]              | Enlarge the game place space. _Amount is optional_
exit                          | Closes the server
explode [id]                  | Explodes a player (Usage: **explode 1**)
fmsg [message 1] [message 2] [etc...] | Force players to read a message. Changes leaderboard, freeze players, and change their name temporarily
food [x pos] [y pos] [mass]   | Spawns a food cell at those coordinates. If a mass value is not specified, then the server will default to "foodStartMass" in the config.
freeze [id]                   | Freezes a player
gamemode [id]                 | Changes the gamemode of the server. **Warning. _This can cause problems!._**
hide [id]                     | Hide/Unhide a player (will not seen by other players)
kickrange/killrange/banrange [start] [end] | Kicks/kills/bans in a range (eg: killrange 1 10 will kill players whos ids are between them)
kick [id]                     | Kicks a specific player -or- bot from the server
kickbots [number]             | Kick a specific number of bots. (_Leave blank to kick all_)
kill [id]/killall             | Kills all cells belonging to a specific player. Do (**killall**) to kill all players.
mass [id] [mass]              | Sets the mass of all cells belonging to a specified player.
merge [id]                    | Forces a player to merge
minion [id] [amount] [name]   | Create minions. To turn off, do **minion [id]**. To destroy, do **minion destroy**.
msg [message1] [message2] [etc...] | Changes the leaderboard to a message for a short time
multiverse [command] [args]   | Manage multiple servers in 1 console. See [here](https://github.com/AJS-development/Ogar-unlimited#multiverse) for more info
name [id] [new name]          | Changes the name of the player with the specified id with [new name]. Skin name can be use aswell.
nojoin [id]                   | Makes a player unable to join
op [id]                       | Makes a player OP
dop [id]                      | De-OP's a player
rop                           | Resets player's OP
opbyip [command] [ip]         | OP based on ip. Available commands are:**add, remove, list, clear, record**.
pause                         | Pauses/Unpauses the game
pcmd [delay] [repeattime] [command] [flag] | Periodic commands, where **[flag]** is a command's arg.
pfmsg [delay] [duration] [x to repeat] [msg1] [msg2] [etc...] | Periodically sends a force message (seconds)
spfmsg                        | Stops pfmsg
playerlist                    | Shows a list of connected players, their IP, player ID, the amount of cells they have, total mass, and their position.
plugin [command] [name]       | Manage plugins. (Usage: **reload,list,delete,add,install,update,search**)
pmsg [delay] [duration] [x to repeat] [msg1] [msg2] [etc...] | Periodically sends a message (seconds)
spmsg                         | Stops pmsg
quickrestart                  | Quickly restart your server. (**Does not restart, nor reduce memory**)
rainbow [id]                  | Gives a player a rainbow effect
range [start] [end] [command] [flag] | Bulk commands, where **[flag]** is a command's arg. (Usage: **range 1 10 freeze**) freezes players 1-10(id)
reload                        | Reloads the config file used by the server. However, some configs are not affected. (eg: serverPort, serverGamemode, serverBots, serverStatsPort, serverStatsUpdate, etc.)
reset                         | Destroys everything and start from scratch.
resetvirus                    | Turns specials virusus (_From OP's_) into normal ones.
restart [minutes]             | Restarts the server after a specific amount of minutes. (_Leave blank for instant restart_)
shrink [amount]               | Shrinks the game play space. _Amount is optional_
spawnmass [id] [mass]         | Sets a player spawnmass. Default is (0)
speed [id] [mass]             | Sets a player base speed. Default is (0)
split [id] [count]            | Splits a player into [count] pieces.
status                        | Shows the amount of players currently connected, time elapsed, memory usage (memory used/memory allocated), and the current gamemode.
team [id] [team (r,g,b)]      | Changes a players team. (_You might have to split to see the changes though_)
tp [id] [x pos] [y pos]       | Teleports the specified player to the specified coordinates.
troll [id]                    | You'll figure this one out. It's a suprise!.
update  [all,botname,skin]    | Update to current/recent version & replace old with new.
verify [command] [id]         | Verifies/Re-verifies a player. (Usage: **verify reverify 1** force 1 to verify again)
virus [x pos] [y pos] [mass]  | Spawns a virus cell at those coordinates. If a mass value is not specified, then the server will default to "virusStartMass" in the config.
whitelist [ip]                | Whitelist an IP. Do (**whitelist**) only for a list of whitelisted IP
unwhitelist [ip]              | Remove ip from whitelist

## Contributing
Just make a pull request or make your own copy

## Things that I dont want you to copy (copying it to your own file or fork)
1. No-Lag antibot measures
2. OP
3. Minions
4. Smart bot/despawn
5. Easy verify
6. Periodic things *(pmsg, pcmd, etc..)*
7. Mousefilter
8. Plugins
9. Advanced multiverse system
10. Client config system
11. Language support system
12. Tutorial system
13. Quadrants

##### Anything else, if you improved it, you dont have to give us credit, or else if you just copied, you must give us credit
