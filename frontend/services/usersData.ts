import { User } from '../types/users-type'

export async function userData(): Promise<User[]> {
    let api = await fetch(`${process.env.API_URL}/users`)
    let userData = await api.json()
    return userData
}