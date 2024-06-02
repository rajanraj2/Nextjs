import express from 'express';
import { Client, Account, Databases } from 'appwrite';
import { home } from '../controllers/home-controller.js';

const router = express.Router();

// Initialize Appwrite client
const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
    .setProject("665836440037db08f8d3"); // Your project ID

const account = new Account(client);
const databases = new Databases(client, '665b30a2002200df1e93');

// home route
router.get('/', home);

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

// Login route
// router.post('/signin', async (req, res) => {
//     const { email, password } = req.body;
//     const account = new Account(client);
  
//     try {
//       // Create the session using the Appwrite client
//       const session = await account.createEmailPasswordSession(email, password);
  
//       // Set the session cookie
//       res.cookie('session', session.$id, { // use the session ID as the cookie value
//         httpOnly: true,
//         secure: true,
//         sameSite: 'strict',
//         maxAge: session.expire - Math.floor(Date.now() / 1000), // Set maxAge based on session expiration
//         path: '/',
//       });
  
//       res.status(200).json({ success: true });
//     } catch (e) {
//       res.status(400).json({ success: false, error: e.message });
//     }
//   });

// Signin route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    console.log('Signin request:', { email, password });

    try {
        const response = await account.createEmailPasswordSession(email, password);
        console.log('Signin successful:', response);
        res.status(200).json(response);
    } catch (error) {
        console.error('Signin error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Store user details route
router.post('/user-details', async (req, res) => {
    const { userId, userDetails } = req.body;

    try {
        const response = await databases.createDocument('665b319900151e2b2323', 'unique()', {
            userId,
            ...userDetails
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;


