'use server'
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from 'next/headers'



// Session client, used to make requests on behalf of the logged in user
// 会话客户端
export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  // Get the session cookie from the request and set the session
  const session = cookies().get("appwrite-session");

  if (!session || !session.value) {
     throw new Error("No session");
  }

  client.setSession(session.value);

  // Return the services you need
  return {
    get account() {
      return new Account(client);
    },
  };
}

// Admin client, used to create new accounts
// 管理员客户端
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!); // Set the API key here!

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
