Dungeon Brawler

Project Description
Include:

General App Idea/Purpose

A React-Native app game themed after old school dungeon crawlers and the Combat Hero game books. It is turn based with a map built out of a series of rooms. The player will navigate the dungeon while trying to catch their opponent and defeat them. 

The player can log in using their google account through Auth0. They can save their game to the backend and load the data from their to start from where they left off. 

What technology stack(s) are you using for your frontend / backend?

React-Native, Node.js, Express ,MongoDB, JavaScript, JSX, and
Auth0. 

I used React-Native-Navigation to have multiple screens and React-Native-Paper to assist with styling.

Wire Frames
![Wire Frame](https://i.imgur.com/DtDE9BQ.png "Wire Frame")


Models including field names and their datatypes

Game Model:
email: string,
username: string
enemyHealth: number,
playerHealth: number,
playerLocation: number,
enemyLocation: number,




User Stories
User stories detailing app functionality

As a user, I want to be able to explore the dungeon and defeat my opponent.
As a user, I want to be able to log in and have my game info recorded.
As a user, I want to be able to stop a match vs the computer and continue it later.



MVP Goals
Full Crud
Turn base gameplay vs a computer opponent
User login
Players create games that track match details which are deleted once match concludes.

Stretch Goals
Multiplayer using socket.io
Win rate and ranking through a leaderboard

Unresolved Problems
I need to add delays in for actions to force space and prevent spamming inputs. I just ran out of time.


Future Plans
I want to add more methods of interacting with the opponent and the world. I have a few written up that I will be implementing later.
I would like to take this framework and expand it into a fuller game.
I would like to add more descriptive text and have a list of combat text to pull from.