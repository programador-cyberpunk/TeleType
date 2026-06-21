//exemplos de tipos primitivos
export {};
import { useState } from 'react';

let nome: string = "João";
let idade: number = 30;
let ativo: boolean = true;

//tipando parametros e valores de retono de funções
function saudar(nome: string): string{
    return `Olá, ${nome}!`;
}
//testando padroes do type e erros
let email: string = "vsf@email.com";
email = undefined; //vai dar ruim msm
let telefone: string | undefined;
telefone = undefined// esse vai, sei la opq

//dados any
let dados:  any = "texto aqui nessa porra";
dados = 666;

//tipagem basica aplicada em hoooks/ganchos
const [contador, setContador] = useState<number>(0);
    function incrementar(valor: number): void{
        setContador((prev: number) => prev + valor);
    }