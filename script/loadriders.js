const admin = require('firebase-admin');
const fs = require('fs'); // Import the filesystem module

// Path to your Firebase service account key file
const serviceAccount = require('./data/priv.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Firestore database reference
const db = admin.firestore();

// Function to load riders data into Firestore
async function loadRidersFromFile(filePath) {
    try {
        // Read the JSON file
        const data = fs.readFileSync(filePath, 'utf-8');
        const riders = JSON.parse(data); // Parse the JSON data

        // Load each rider into Firestore
        const collection = db.collection('riders');
        for (const rider of riders) {
            await collection.doc(String(rider._id)).set(rider);
            console.log(`Rider ${rider.name} added!`);
        }

        console.log('All riders loaded successfully!');
    } catch (error) {
        console.error('Error loading riders:', error);
    }
}

// Execute the function with the JSON file path
loadRidersFromFile('./data/riders.json');
