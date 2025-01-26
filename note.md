### DB
Users:
```json
[
    {
        "_id": 1,       
        "nickname": "Nick",
        "email": "email@mail.com",
        "squad": 1      // reference to Squads
    }
]
```

Squads:
```json
[
    {
        "_id": 1,
        "name": "MyTeam",
        "owner": 1,     // reference to Users
        "budget": 50,   // team budget
        "points": 100,  // sum of each raider points
        "riders": [     // references to Riders (max 4)
            1,
            2,
            3,
            4
        ],
        "constructor": 1,   // reference to Constructors
        "team": 1           // reference to Teams
    }
]
```

Riders: ~21
```json
[
    {
        "_id": 1,
        "name": "Joe",
        "price": 15,
        "team": 1,      // reference to Teams
        "points": 13,   // sum of each circuit points
        "performance": [
            {
                "circuit": "circuit1",
                "scoreSprint": 1,
                "scoreRace": 1, 
                "modifiers": [
                    {
                        "name": "name",
                        "value": 123
                    },
                    {
                        "name": "name",
                        "value": -20
                    }
                ]
            },
            {
                "circuit": "circuit2",
                "scoreSprint": 1,
                "scoreRace": 5
            },
            {
                "circuit": "circuit3",
                "scoreSprint": 1,
                "scoreRace": 4
            }
        ]
    }
]
```

Constructor: ~5
```json
[
    {
        "_id": 1,
        "name": "KTM",
        "price": 15,
        "points": 6,
        "performance": [
            {
                "circuit": "circuit1",
                "scoreSprint": 1,
                "scoreRace": 1
            },
            {
                "circuit": "circuit2",
                "scoreSprint": 1,
                "scoreRace": 1
            },
            {
                "circuit": "circuit3",
                "scoreSprint": 1,
                "scoreRace": 1
            }
        ]
    }
]
```

Team:   ~10
```json
[
    {
        "_id": 1,
        "name": "Aprilia Racing",
        "price": 15,
        "points": 4,
        "performance": [
            {
                "circuit": "circuit1",
                "scoreSprint": 1,
                "scoreRace": 1
            },
            {
                "circuit": "circuit2",
                "scoreSprint": 1,
                "scoreRace": 0
            },
            {
                "circuit": "circuit3",
                "scoreSprint": 1,
                "scoreRace": 0
            }
        ]
    }
]
```

### Features
1. account management
   1. creating
   2. updating information
2. squad management
   1. creating a squad
      1. add/remove riders
      2. add/remove team
      3. add/remove constructor
3. backoffice functionality
   1. modifing scores
      1. riders
      2. team 
      3. constructor
   2. loading scores
      1. for each circuit
         1. riders
         2. team
         3. constructor

### Structure
1. Landing page
   1. Login
   2. Register
2. Home
   1. Squad
      1. CreateSquad
      2. ModifySquad
   2. Ranking
   3. Profile
      1. Info