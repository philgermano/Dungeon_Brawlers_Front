const roomList = {
    1:{
        north: 15,
        south:false,
        west:false,
        east: 2,
        description:'Large skulls lie on the floor. \nVines and other plants have grown into the stonework. \nThere exits to the north and east.',
    },
    2:{
        north: false,
        south:false,
        west:1,
        east:3,
        description:'Rubble lines the floor and cobwebs cover the ceiling. \nThe interior is oddly well lit. \nThere are exits to the west and east',

    },
    3:{
        north: 4,
        south:false,
        west:2,
        east:false,
        description:'A large burning candle rests on a stone pedistal.\nPillars adorn the walls. \nThere are exits to the north and west.',
    },
    4:{
        north: 5,
        south:3,
        west:false,
        east:false,
        description:'Rocks are scattered on the floor. \nA mysterious light source fills the room with a warm light. \nThere are exits to the south and north.',
    },
    5:{
        north: 6,
        south:4,
        west:13,
        east:12,
        description:'Light pours in from panels in the ceiling.\nBroken timber and stone rest in along the walls. \nThere are exits to the south, east, west, and north.',

    },
    6:{
        north: 7,
        south:5,
        west:false,
        east:false,
        description:'A long dead skeleton is pinned to the stone wall.\nThere are exits to the south and north.',
    },
    7:{
        north: false,
        south:6,
        west:false,
        east:8,
        description:'A floating candalabra lights the room.\nTrash has collected in the corners of the room.\nThere are exits to the south and east.',
    },
    8:{
        north: false,
        south:false,
        west:7,
        east:9,
        description:'Old crates and pots are stacked around the room. \nA stuffed goblin is leaned against the wall. \nThere are exits to the west and east.',
    },
    9:{
        north: false,
        south:10,
        west:8,
        east:false,
        description:'The rockwalls have begun to collapse.\nLoose stones are stacked in large piles.\nThere are exits to the south and west.',
    },
    10:{
        north: 9,
        south:11,
        west:false,
        east:false,
        description:'Old supplies rest along the wall.\n A large torch burns brightly on the wall.\n There are exits to the north and south',
    },
    11:{
        north: 10,
        south:false,
        west:12,
        east:false,
        description:'There are exits for the north and west.',
    },
    12:{
        north: false,
        south:false,
        west:5,
        east:11,
        description:'There are exits to the east and west',
    },
    13:{
        north: false,
        south:false,
        west:14,
        east:5,
        description:'There are exits to the east and west',
    },
    14:{
        north: false,
        south:15,
        west:false,
        east:13,
        description:'There are exits to the east and south.',
    },
    15:{
        north: 14,
        south:1,
        west:false,
        east:false,
        description:'There are exits to the north and south.',
    },
    0:{
        north: false,
        south:false,
        west:false,
        east:false,
        description:'',
    },


  };


export default roomList;