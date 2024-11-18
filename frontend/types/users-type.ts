export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    avatar: string;
    role: "Master" | "Supervisão" | "Administrador" | "Operador";
    status: "Ativo" | "Inativo" | "Bloqueado" | "Pendente";
};

// const user: User = {
//     id: 1,
//     name: "João",
//     username: "joao",
//     email: "joao@joao.com",
//     password: "123456",
//     avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
//     role: "Administrador",
//     status: "Ativo"
// };