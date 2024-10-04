import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: number
    email: string
    name: string
    username: string
    avatar_url: string
  }
}
