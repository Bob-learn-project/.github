'use server'

import { defineMiddleware } from "astro:middleware";
import { createSessionClient, createAdminClient } from "../appwrite";
import { SignInProps, SignUpParams } from "@/types";

import { ID, Query } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { Client } from "node-appwrite";
import { parse } from "path";

export const signIn = async (userData: SignInProps) => {

  try {
    
  } catch (error) {
    console.log(error)
  }
}


export const signUp = async({password, ...userData}: SignUpParams) => {
  const { firstName, lastName, email } = userData;

  try {
    const { account} = await createAdminClient();

    const newUser = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);
    // Set the session cookie
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUser);
  } catch (error) {
    console.error("Error during sign up:", error);
  }
}


export async function getLoggedInUser(){
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();
    cookies().delete('appwrite-session');
    await account.deleteSession('current');
  } catch {
    return null;
  }
}