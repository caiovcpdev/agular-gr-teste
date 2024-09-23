// src/app/models/usuario.model.ts

export interface  Endereco {
    localidade: string;
    estado: string;
    uf: string;
    logradouro: string;
    cep: string;
}
  
export interface Usuario {
    id: string;
    nome: string;
    email: string;
    password: string;
    endereco: Endereco;
}
  