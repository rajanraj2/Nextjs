// services/appwrite.js



// import { Client, Account } from 'appwrite';

// const client = new Client();
// client
//   .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
//   .setProject(process.env.APPWRITE_PROJECT_ID); // Your project ID

// const account = new Account(client);

// export { client, account };


const client = new Client();

client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID);