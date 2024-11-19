"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { User } from "@/types/users-type"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    #
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "avatar",
        header: () => <div>Avatar</div>,
        cell: ({ row }) => (
            <Avatar className="size-8">
                <AvatarImage src={row.original.avatar} alt={row.original.name} />
                <AvatarFallback>{row.original.name.charAt(0)} </AvatarFallback>
            </Avatar>
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nome
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
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
        accessorKey: "role",
        header: "Cargo/Função",
    },

    {
        accessorKey: "status",
        header: "Status",
    }
]
