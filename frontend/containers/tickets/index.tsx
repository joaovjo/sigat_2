import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@radix-ui/react-checkbox"

export default function Tickets() {
    return (
        <Table className="flex-auto rounded-xl bg-muted/50">
            <TableCaption>Todos os chamados.</TableCaption>
            <TableHeader>
                <TableRow className="">
                    <TableHead className="w-[100px]">#</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Solicitante</TableHead>
                    <TableHead>Assunto</TableHead>
                    <TableHead>Local</TableHead>
                    <TableHead>Região</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Tempo</TableHead>
                    <TableHead className="">Responsável</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">50000</TableCell>
                    <TableCell>Pendente</TableCell>
                    <TableCell>Fulano</TableCell>
                    <TableCell>Deu erro</TableCell>
                    <TableCell>SEAD TI</TableCell>
                    <TableCell>Prefeitura</TableCell>
                    <TableCell>18/11/2024</TableCell>
                    <TableCell>01:00h</TableCell>
                    <TableCell className="">João Vitor de Jesus Oliveira</TableCell>
                </TableRow>
            </TableBody>
        </Table>
)
}