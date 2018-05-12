/* exported randomNum timesArray locationsArray calculateRandom  */
/* globals displayBody*/
class Salmon {
    constructor(locationName, min, max, avg) {
        this.locationName = locationName,
        this.min = min,
        this.max = max,
        this.avg = avg,
        this.customer = [];

    }
    

}
let timesArray = ['5a.m.', '6a.m.', '7a.m.', '8a.m.', '9a.m.', '10a.m.', '11a.m', '12p.m.', '1p.m.', '2p.m.', '3p.m'];

let airport = new Salmon('Airport', 20, 100, 60);
let pioneerSquare = new Salmon('Pioneer Square', 4, 80, 42);
let powells = new Salmon('Powell\'s', 8, 98, 53);
let stJohns = new Salmon('St. John', 3, 5, 4);
let division = new Salmon('Division', 8, 74, 41);

let locationsArray = [airport, pioneerSquare, powells, stJohns, division];

function calculateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function submitLocationData() {
    event.preventDefault();
    var newLocation = event.target.newLocation.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var average = parseInt(event.target.average.value);
    locationsArray.push(new Salmon(newLocation, min, max, average));
    console.log(locationsArray);
    displayBody();

}

const storeEntry = document.getElementById('locationForm');
storeEntry.addEventListener('submit', submitLocationData);