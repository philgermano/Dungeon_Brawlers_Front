Dungeon Brawler

This is a React-Native game themed after old school dungeon crawlers and the Combat Hero game books. It is turn based with a map built out of a series of rooms. The player will navigate the dungeon while trying to catch their opponent and defeat them. 

The player can log in using their google account through Auth0. They can save their game to the backend and load the data from their to start from where they left off. 

What technology stack(s) are you using for your frontend / backend?

React-Native, Node.js, Express ,MongoDB, JavaScript, JSX, and
Auth0. 

I used React-Native-Navigation to have multiple screens and React-Native-Paper to assist with styling.

Wire Frames
![Wire Frame](https://i.imgur.com/DtDE9BQ.png "Wire Frame")


Models including field names and their datatypes

Game Model:<br />
id: string,<br />
email: string,<br />
username: string,<br />
enemyHealth: number,<br />
enemyRoom: number,<br />
playerHealth: number,<br />
playerRoom: number,<br />





User Stories<br />
As a user, I want to be able to explore the dungeon and defeat my opponent.<br />
As a user, I want to be able to log in and have my game info recorded.<br />
As a user, I want to be able to stop a match vs the computer and continue it later.<br />



MVP Goals<br />
Full Crud<br />
Turn base gameplay vs a computer opponent<br />
User login<br />
Players create games that track match details which are deleted once match concludes.<br />

Stretch Goals<br />
Multiplayer using socket.io<br />
Win rate and ranking through a leaderboard<br />


Future Plans<br />
I want to add more methods of interacting with the opponent and the world. I have a few written up that I will be implementing later.<br />
I would like to take this framework and expand it into a fuller game.<br />
I would like to add more descriptive text and have a list of combat text to pull from.<br />