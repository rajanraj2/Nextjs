import conf from './conf/config.js';
import { Client, Account, ID } from 'appwrite';

const CreateUserAccount = {
    email: '',
    password: '',
    name: ''
};

const LoginUserAccount = {
    email: '',
    password: ''
};

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService{
    // create a new record of user inside appwrite
    async createUserAccount(data){
        try {
            const userAccount = await account.create(ID.unique, data.email, data.password, data.name);
            if (userAccount){
                return this.loginUserAccount(data);
            }
            else {
                return userAccount;
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    }


    // login user account
    async loginUserAccount(data){
        try {
            const userAccount = await account.createSession(data.email, data.password);
            return userAccount;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async isLoggedIn(){
        try {
            const data = this.getCurrentUser();
            return Boolean(data);
            // const userAccount = await account.get();
            // return userAccount;
        } catch (error) {
            console.log(error);
            return error;
        }
        return false;
    }

    async getCurrentUser() {
        try {
            const userAccount = await account.get();
            return userAccount;
        } catch (error) {
            console.log("getCurrentUser error: " + error);
            return null;
        }
    }

    async logout() {
        try {
            return await account.deleteSession('current');
        }
        catch (error) {
            console.log("logout error: " + error);
            return error;
        }
    }
}

const appwriteService = new AppwriteService();

export default appwriteService;