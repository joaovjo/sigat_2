"use client"

import { User } from "@/types/users-type"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//     id: string
//     amount: number
//     status: "pending" | "processing" | "success" | "failed"
//     email: string
// }

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "#",
    },
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "username",
        header: "Usuário",
    },
    {
        accessorKey: "email",
        header: "E-mail",
    },
    {
        accessorKey: "password",
        header: "Senha",
    },

    {
        accessorKey: "avatar",
        header: "Avatar",
    },

    {
        accessorKey: "role",
        header: "Cargo/Função",
    },

    {
        accessorKey: "status",
        header: "Status",
    }
]
