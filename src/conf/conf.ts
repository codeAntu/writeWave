interface Config {
  appWriteURL: string;
  appWriteProjectID: string;
  appWriteDatabaseID: string;
  appWriteCollectionID: string;
  appWriteBucketID: string;
}

const conf: Config = {
  appWriteURL : import.meta.env.VITE_APPWRITE_URL as string,
  appWriteProjectID : import.meta.env.VITE_APPWRITE_PROJECT_ID as string,
  appWriteDatabaseID : import.meta.env.VITE_APPWRITE_DATABASE_ID as string,
  appWriteCollectionID : import.meta.env.VITE_APPWRITE_COLLECTION_ID as string,
  appWriteBucketID : import.meta.env.VITE_APPWRITE_BUCKET_ID as string,
};

export default conf;