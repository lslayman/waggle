import { NextAuthOptions } from 'next-auth';
import { CredentialsProvider } from 'next-auth/providers/credentials';

const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "your-email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            async authorize(credentials) {
                const user = {}

                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
}

export default (req, res) => NextAuthOptions(req, res, options)