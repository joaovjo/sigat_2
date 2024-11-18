"use client"

import { Tickets } from "@/types/tickets-type"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//     id: string
//     amount: number
//     status: "pending" | "processing" | "success" | "failed"
//     email: string
// }

export const columns: ColumnDef<Tickets>[] = [
    {
        accessorKey: "id",
        header: "#",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "requester",
        header: "Solicitante",
    },
    {
        accessorKey: "subject",
        header: "Assunto",
    },

    {
        accessorKey: "location",
        header: "Local",
    },

    {
        accessorKey: "region",
        header: "Região",
    },

    {
        accessorKey: "date",
        header: "Data",
    },

    {
        accessorKey: "time",
        header: "Tempo",
    },

    {
        accessorKey: "responsible",
        header: "Responsável",
    },
]
