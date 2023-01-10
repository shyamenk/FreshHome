import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {prisma} from '@/lib/prisma'
import {PrismaAdapter} from '@next-auth/prisma-adapter'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  pages: {
    signIn: '/login', // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) { return true },
    // async redirect({ url, baseUrl }) { return baseUrl },
    async session({session, user, token}) {
      if (session) {
        session.user.id = user.id
        session.user.role = user.role
      }
      return session
      // async jwt({ token, user, account, profile, isNewUser }) { return token }
    },
  },
})
