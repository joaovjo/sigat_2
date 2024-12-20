import { User } from '@/types/users'

export async function userService(): Promise<User[]> {
    let api = await fetch(`${process.env.API_URL}/users`)
    let userData = await api.json()
    return userData
}