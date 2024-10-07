'use server'

import { defineMiddleware } from "astro:middleware";
import { createSessionClient } from "./server/appwrite";
import { SignInProps, SignUpParams } from "@/types";
import { ID } from "appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
export const signIn = async (userData: SignInProps) => {

  try {
    
  } catch (error) {
    console.log(error)
  }
}


export const signUp = async (userData: SignUpParams) => {
  const { firstName, lastName, email, password } = userData;
  try {
    const { account } = createSessionClient();
    // Create the email password session
    const newUserAccount = await account.create(
      ID.unique(),
      userData.email,
      userData.password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

    // Set the session cookie
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      expires: new Date(session.expire),
      sameSite: "strict",
      secure: true,
      httpOnly: true,
    });
    return parseStringify(newUser);
  } catch (error) {
    console.log(error)
  }
}


export const onRequest = defineMiddleware(async ({ request, locals }, next) => {
  try {
    const { account } = createSessionClient(request);
    locals.user = await account.get();
  } catch {}

  return next();
});
