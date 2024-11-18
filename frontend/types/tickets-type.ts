export type Tickets = {
    id: number
    status: "Pendente" | "Em andamento" | "Finalizado"
    requester: string
    subject: string
    location: string
    region: string
    date: string
    time: string
    responsible: string
}