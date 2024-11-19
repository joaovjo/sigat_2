import { Tickets } from "@/types/tickets-type"
import { columns } from "@/app/tickets/columns"
import { DataTable } from "@/components/ui/data-table"

export async function getData(): Promise<Tickets[]> {
    let api = await fetch(`${process.env.API_URL}/tickets`)
    let ticketsData = await api.json()
    return ticketsData
}

export default async function TicketsPage() {
    let data = await getData()

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
