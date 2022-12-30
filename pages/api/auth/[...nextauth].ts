import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {prisma} from '@/lib/prisma'
import {PrismaAdapter} from '@next-auth/prisma-adapter'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],

  pages: {
    // signIn: '/auth/signin',  // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) { return true },
    // async redirect({ url, baseUrl }) { return baseUrl },
    async session({session, user}) {
      if (session) {
        session.user.id = user.id
      }
      return session
      // async jwt({ token, user, account, profile, isNewUser }) { return token }
    },
  },
})
