import express from 'express';
import { Client, Account, Databases } from 'appwrite';

const router = express.Router();

// Initialize Appwrite client
const client = new Client()
  .setEndpoint('http://localhost/v1') // Your Appwrite endpoint
  .setProject('YOUR_PROJECT_ID'); // Your project ID

const account = new Account(client);
const databases = new Databases(client, 'YOUR_DATABASE_ID');

// Signup route
router.post('/signup', async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const response = await account.create('unique()', email, password, name);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Signin route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await account.createSession(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Store user details route
router.post('/user-details', async (req, res) => {
  const { userId, userDetails } = req.body;

  try {
    const response = await databases.createDocument('YOUR_COLLECTION_ID', 'unique()', {
      userId,
      ...userDetails
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;


