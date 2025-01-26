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

// Function to load team data into Firestore
async function loadTeamsFromFile(filePath) {
    try {
        // Read the JSON file
        const data = fs.readFileSync(filePath, 'utf-8');
        const teams = JSON.parse(data); // Parse JSON data

        // Add each team to Firestore
        const collection = db.collection('teams');
        for (const team of teams) {
            await collection.doc(String(team._id)).set(team);
            console.log(`Team ${team.name} added!`);
        }

        console.log('All teams loaded successfully!');
    } catch (error) {
        console.error('Error loading teams:', error);
    }
}

// Execute the function with the JSON file path
loadTeamsFromFile('./data/teams.json');
