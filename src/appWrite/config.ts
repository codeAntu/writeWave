import conf from "@/conf/conf";
import { Client, Databases, ID, Query, Storage } from "appwrite";

export class Service {
  clint = new Client();
  databases;
  bucket;

  constructor() {
    this.clint.setEndpoint(conf.appWriteURL).setProject(conf.appWriteProjectID);
    this.databases = new Databases(this.clint);
    this.bucket = new Storage(this.clint);
  }

  async createPost({
    title,
    slag,
    content,
    status,
    userId,
  }: {
    title: string;
    slag: string;
    content: string;
    status: string;
    userId: string;
  }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectionID,
        slag,
        {
          title,
          content,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(
    slag: string,
    {
      title,
      content,
      featuredImg,
      status,
    }: {
      title: string;
      content: string;
      featuredImg: string;
      status: string;
    }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectionID,
        slag,
        {
          title,
          content,
          featuredImg,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slag: string) {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectionID,
        slag
      );
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getPost(slag: string) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectionID,
        slag
      );
    } catch (error) {
      throw error;
    }
  }

  async getPosts(query = [Query.equal("status", "inactive")] as Query[]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseID,
        conf.appWriteCollectionID,
      );
    } catch (error) {
      throw error;
    }
  }

  async uploadFile(file: any) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId: string) {
    try {
      return await this.bucket.deleteFile(conf.appWriteBucketID, fileId);
    } catch (error) {
      throw error;
    }
  }

  getFilePreview(fileId: string) {
    return this.bucket.getFilePreview(conf.appWriteBucketID, fileId);
  }
}

const service = new Service();

export default service;
