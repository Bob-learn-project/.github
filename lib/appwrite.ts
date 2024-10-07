'use server'
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from 'next/headers'

// The name of your cookie that will store the session
export const SESSION_COOKIE = "appwrite-session";

// Admin client, used to create new accounts
// 管理员客户端
export function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.APPWRITE_KEY!); // Set the API key here!

  // Return the services you need
  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get users() {
      return new Users(client);
    },
  };
}

// Session client, used to make requests on behalf of the logged in user
// 会话客户端
export function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.PUBLIC_APPWRITE_PROJECT!);

  // Get the session cookie from the request and set the session
  const session = cookies().get(SESSION_COOKIE);
  if (!session || !session.value) {
    throw new Error("Session cookie not found");
  }

  client.setSession(session.value);

  // Return the services you need
  return {
    get account() {
      return new Account(client);
    },
  };
}


