import { userService } from "@/services/userService";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

export default async function Users() {
    let userData = await userService()

    return (
        <div className="flex flex-auto flex-col gap-4 p-4 pt-0">
            <div className="relative rounded-md bg-muted/50">
                <DataTable columns={columns} data={userData} />
            </div>
        </div>
    )
}
