import conf from "@/conf/conf";
import { Client, Account, ID } from "appwrite";
import { error } from "console";
import { SrvRecord } from "dns";

export class AuthService {
  clint = new Client();
  account: Account;

  constructor() {
    this.clint.setEndpoint(conf.appWriteURL).setProject(conf.appWriteProjectID);
    this.account = new Account(this.clint);
  }

  async createAccount({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.logIn({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async logIn({ email, password }: { email: string; password: string }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}
