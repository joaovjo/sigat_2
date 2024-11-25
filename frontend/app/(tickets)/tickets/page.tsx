import { Tickets } from "@/types/tickets"
import { columns } from "@/app/(tickets)/tickets/_components/columns"
import { DataTable } from "@/components/ui/data-table"

export async function getData(): Promise<Tickets[]> {
    let api = await fetch(`${process.env.API_URL}/tickets`)
    let ticketsData = await api.json()
    return ticketsData
}

export default async function TicketsPage() {
    let data = await getData()

    return (
        <DataTable columns={columns} data={data} />
    )
}
