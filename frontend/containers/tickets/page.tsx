import { Tickets } from "@/types/tickets-type"
import { columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

export async function getData(): Promise<Tickets[]> {
    let api = await fetch(`${process.env.API_URL}/tickets`)
    let ticketsData = await api.json()
    return ticketsData
}

export default async function DemoPage() {
    let data = await getData()

    return (
        <div className="flex-auto rounded-md bg-muted/50">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
