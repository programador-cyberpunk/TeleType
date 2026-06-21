export {};
import { useState } from 'react';
import { Text, Button } from 'react-native';
import { useAuth } from './auth';
import React from 'react';
import { GestureResponderEvent } from 'react-native';
const Saudacao = ({nome}: {nome: string }) =>{
     return <Text>`Olá{nome}!`</Text>;
};

const {usuario, sair} = useAuth();
const handlePress({nativeEvent}: GestureResponderEvent) =>{
    console.log(nativeEvent);
}
//tipagem direta
type Usuario = {
    nome: string;
    idade: number;
};

    function apresentar({nome, idade}: Usuario): string{
        return `${nome} tem ${idade} anos.`;
    }

    //tipagem desestruturada
    const resposta: {ok: boolean, status: number} = {ok: true, status: 200 };
    const {ok, Status}: {ok: boolean, status: number} = resposta;
    
    //spread e rest

    //SPREAD
    const numeros = [1, 2, 3];
const maisNumeros = [...numeros, 4, 5];
//agora foi vsf kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
console.log(maisNumeros);

//objetos
const Uuario = {nome: "Ana",idade: 30};
const usuarioAtualizado = {...usuario, idade: 31};
console.log(usuarioAtualizado);

//rest syntax, pra preencher o resto de um array
const [primeiro, ...rest] = [10, 20, 30, 40];
console.log(primeiro);
console.log(rest);
//rest em objetos
const {nome, ...outrosDados} = {nome: "jao", idade: 45, ativo: true};
console.log(nome);
console.log(outrosDados);

//agora com o react native
const Botao= ({ titulo, ...props }) => {
  return <Button title={titulo} {...props} />;
};

//funcoes com argumentos variaveos
function somar(...numeros: number[]): number{
    return numeros.reduce((total, n) => total + n,0);
}
console.log(somar(1, 2, 3, 4)); //10

//tipagem de objetos com rest
type Usuario = {
    nome: string;
    idade: number;
    ativo: boolean;
};

const {nome, ..resto}: Usuario = {
    nome: "jao",
    idade: 45,
    ativo: true,
};
//tipo generico
function logarTudo<T extends any[]>(...args: T): void {
  console.log(...args);
}

logarTudo("texto", 42, true);

//map
const numerosos = [1, 2, 3];
const dobrados = numerosos.map(n => *2);
console.log(dobrados);

const usuarios =[
    {nome: "ana" , idade: 25},
    {nome: "jao", idade: 30}
];
const nombres = usuarios.map(usuarios => usuarios.nome);
console.log(nombres);


//filter
const numbers = [1,2,3,4,5];
const pares = numbers.filter(n=> n % 2 === 0);
console.log(pares);

const usuari = [
    {nome: "Ana", ativo: true },
    {nome: "Ze", ativo: false},
    {nome: "Jao", ativo: true}
];
const ativos = usuari.filter(u=> u.ativo);
console.log(ativos);

//reduce
const numeros = [1,2,3,4];
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma);

const compras = [
  { item: "Livro", preco: 30 },
  { item: "Caneta", preco: 5 },
  { item: "Caderno", preco: 15 }
];
const total = compras.reduce((soma, compra) => soma + compra.preco, 0);
console.log(total);

//find

const number = [1,2,3,4];
const encontrado = number.find(n=> n > 2);
console.log(encontrado);