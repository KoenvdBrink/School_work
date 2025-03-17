async function getData() {
    const url = "https://stallingsnet.nl/api/1/parkingcount/utrecht";
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error ('Response status : ${response.status}');
        }
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.error(error.message);
    }
}

const bicycleParking = [
    {
      "facilityName": "House Modernes",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 954,
      "freePlaces": 770,
      "occupiedPlaces": 182
    },
    {
      "facilityName": "House Modernes Hoog",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 439,
      "freePlaces": 398,
      "occupiedPlaces": 41
    },
    {
      "facilityName": "House Modernes Laag",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 513,
      "freePlaces": 372,
      "occupiedPlaces": 141
    },
    {
      "facilityName": "Keizerstraat",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 321,
      "freePlaces": 312,
      "occupiedPlaces": 9
    },
    {
      "facilityName": "Keizerstraat Hoog",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 166,
      "freePlaces": 166,
      "occupiedPlaces": 0
    },
    {
      "facilityName": "Keizerstraat Laag",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 155,
      "freePlaces": 146,
      "occupiedPlaces": 9
    },
    {
      "facilityName": "Knoop",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 2956,
      "freePlaces": 1705,
      "occupiedPlaces": 1224
    },
    {
      "facilityName": "Knoop Hoog",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 1368,
      "freePlaces": 1025,
      "occupiedPlaces": 343
    },
    {
      "facilityName": "Knoop Laag",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 1561,
      "freePlaces": 680,
      "occupiedPlaces": 881
    },
    {
      "facilityName": "Laag Catharijne",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 359,
      "freePlaces": 145,
      "occupiedPlaces": 154
    },
    {
      "facilityName": "Laag Catharijne Laag",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 186,
      "freePlaces": 46,
      "occupiedPlaces": 140
    },
    {
      "facilityName": "Laag Catharijne Hoog",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 113,
      "freePlaces": 99,
      "occupiedPlaces": 14
    },
    {
      "facilityName": "Neude",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 743,
      "freePlaces": 413,
      "occupiedPlaces": 310
    },
    {
      "facilityName": "Neude Hoog",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 354,
      "freePlaces": 294,
      "occupiedPlaces": 60
    },
    {
      "facilityName": "Neude Laag",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 369,
      "freePlaces": 119,
      "occupiedPlaces": 250
    },
    {
      "facilityName": "Pop Up Domplein",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 1,
      "freePlaces": 1,
      "occupiedPlaces": 0
    },
    {
      "facilityName": "Pop Up Jacobskerkhof",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 1,
      "freePlaces": 0,
      "occupiedPlaces": 1
    },
    {
      "facilityName": "Pop Up Janskerkhof",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 1,
      "freePlaces": 0,
      "occupiedPlaces": 1
    },
    {
      "facilityName": "Pop Up Mariaplaats",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 1,
      "freePlaces": 1,
      "occupiedPlaces": 0
    },
    {
      "facilityName": "Pop Up Neude",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 1,
      "freePlaces": 0,
      "occupiedPlaces": 1
    },
    {
      "facilityName": "Pop Up Vredenburg",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 1,
      "freePlaces": 1,
      "occupiedPlaces": 0
    },
    {
      "facilityName": "Stadhuis",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 380,
      "freePlaces": 246,
      "occupiedPlaces": 134
    },
    {
      "facilityName": "Stadhuis Hoog",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 157,
      "freePlaces": 153,
      "occupiedPlaces": 4
    },
    {
      "facilityName": "Stadhuis Laag",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 223,
      "freePlaces": 93,
      "occupiedPlaces": 130
    },
    {
      "facilityName": "Stationsplein",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 12603,
      "freePlaces": 3253,
      "occupiedPlaces": 9351
    },
    {
      "facilityName": "Stationsplein Hoog",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 6160,
      "freePlaces": 2442,
      "occupiedPlaces": 3720
    },
    {
      "facilityName": "Stationsplein Laag",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 6443,
      "freePlaces": 811,
      "occupiedPlaces": 5631
    },
    {
      "facilityName": "UB Plein",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 619,
      "freePlaces": 449,
      "occupiedPlaces": 170
    },
    {
      "facilityName": "UB Plein Hoog",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 206,
      "freePlaces": 200,
      "occupiedPlaces": 6
    },
    {
      "facilityName": "UB Plein Laag",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 413,
      "freePlaces": 249,
      "occupiedPlaces": 164
    },
    {
      "facilityName": "Vredenburg",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 833,
      "freePlaces": 408,
      "occupiedPlaces": 386
    },
    {
      "facilityName": "Vredenburg Hoog",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 349,
      "freePlaces": 256,
      "occupiedPlaces": 93
    },
    {
      "facilityName": "Vredenburg Laag",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 445,
      "freePlaces": 157,
      "occupiedPlaces": 288
    },
    {
      "facilityName": "Zadelstraat",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 101,
      "freePlaces": 17,
      "occupiedPlaces": 90
    },
    {
      "facilityName": "Zadelstraat Laag",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 69,
      "freePlaces": 5,
      "occupiedPlaces": 64
    },
    {
      "facilityName": "Zadelstraat Hoog",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 38,
      "freePlaces": 12,
      "occupiedPlaces": 26
    },
    {
      "facilityName": "Jaarbeursplein",
      "time": "2025-03-17T09:49:30.100Z",
      "totalPlaces": 4088,
      "freePlaces": 1673,
      "occupiedPlaces": 2415
    }
  ]

const lengteArray = (array) => {
    return array.length;
}
const vrijePlekken = (data) => {
    let places = 0
    for (let i = 0; i < data.length; i++) {
        places += data[i]["freePlaces"]
    }
    return places
}
const facilityNames = (data) => {
    let names = []
    for (let i = 0; i < data.length; i++) {
        if (data[i]["facilityName"].slice(-4).includes("Hoog") || data[i]["facilityName"].slice(-4).includes("Laag")) {continue}
        names.push(data[i]["facilityName"])
    }
    return names
}

console.log(lengteArray(bicycleParking))
console.log(vrijePlekken(bicycleParking))
console.log(facilityNames(bicycleParking))