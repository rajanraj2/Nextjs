import { Client, Account } from 'appwrite';

const client = new Client()
  .setEndpoint('http://localhost/v1') // Your Appwrite endpoint
  .setProject('YOUR_PROJECT_ID'); // Your project ID

const account = new Account(client);

export { client, account };
