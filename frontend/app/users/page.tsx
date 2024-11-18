import { userData } from "@/services/usersData";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Users() {
    let data = await userData()

    return (
        <div className="flex flex-auto flex-col gap-4 p-4 pt-0">
            <div className="flex-auto rounded-md bg-muted/50">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}
