import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import CognitoProvider from "next-auth/providers/cognito";
import CredentialsProvider from "next-auth/providers/credentials";

// Is an object of providers that we want to use
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
          CognitoProvider({
            clientId: process.env.COGNITO_CLIENT_ID,
            clientSecret: process.env.COGNITO_CLIENT_SECRET,
            issuer: process.env.COGNITO_ISSUER,
          }),
          CredentialsProvider({
            //Name to display on sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // credentials is used to generate a form on the sign in page
            credentials: {
                email: {label: "Email", type: 'text'},
                password: {label: "Password", type: 'password'}
            }, 
            async authorize(credentials, req){
                // I want to check if the user exists in my RDS database
            }
          })
    ]
}