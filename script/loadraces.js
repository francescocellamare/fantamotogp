const admin = require('firebase-admin');
const fs = require('fs'); // For file system operations

// Path to your Firebase service account key file
const serviceAccount = require('./data/priv.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Firestore database reference
const db = admin.firestore();

// Static race data extracted from the HTML <option> elements
const races = [
    { number: 1, value: "thailandia", date: "28 febbraio-2 marzo" },
    { number: 2, value: "argentina", date: "14-16 marzo" },
    { number: 3, value: "americhe", date: "28-30 marzo" },
    { number: 4, value: "qatar", date: "11-13 aprile" },
    { number: 5, value: "spagna", date: "25-27 aprile" },
    { number: 6, value: "francia", date: "9-11 maggio" },
    { number: 7, value: "gran-bretagna", date: "23-25 maggio" },
    { number: 8, value: "aragon", date: "5-7 giugno" },
    { number: 9, value: "italia", date: "20-22 giugno" },
    { number: 10, value: "olanda", date: "27-29 giugno" },
    { number: 11, value: "germania", date: "11-13 luglio" },
    { number: 12, value: "repubblica-ceca", date: "18-20 luglio" },
    { number: 13, value: "austria", date: "15-17 agosto" },
    { number: 14, value: "ungheria", date: "22-24 agosto" },
    { number: 15, value: "barcellona", date: "5-7 settembre" },
    { number: 16, value: "san-marino", date: "12-14 settembre" },
    { number: 17, value: "giappone", date: "26-28 settembre" },
    { number: 18, value: "indonesia", date: "3-5 ottobre" },
    { number: 19, value: "australia", date: "17-19 ottobre" },
    { number: 20, value: "malesia", date: "24-26 ottobre" },
    { number: 21, value: "portogallo", date: "7-9 novembre" },
    { number: 22, value: "valencia", date: "14-16 novembre" }
];

// Function to load MotoGP race data into Firestore
async function loadRacesToFirestore() {
    try {
        // Add each race to Firestore
        const collection = db.collection('motogp_races');
        for (const race of races) {
            await collection.doc(String(race.number)).set(race);
            console.log(`Race ${race.value} added!`);
        }

        console.log('All races loaded successfully!');
    } catch (error) {
        console.error('Error loading races:', error);
    }
}

// Execute the function to load races
loadRacesToFirestore();
