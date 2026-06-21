import {View, Text, FlatList} from 'react-native';
let numeros: number[] = [1, 2, 3, 4, 5 ,6];
let nomes: Array<string> = ["jao", "ze", "carlao"];
numeros.push(5);
numeros.push("seis");// vai dar bosta

const primeiro = nomes[0];

//array com objetos
type Produto = {nome: string, preco: number, id : number};
    const lista: Produto[] =[
        {nome: "caderno", preco: 10, id: 1},
        {nome: "lapis", preco: 5, id: 2},
        {nome: "borracha", preco: 2, id: 3}
    ];

    //manipulando com o FlatList
    <FlatList
        data={lista}
        renderItem={({item}) => <Text>{item.nome} - R$ {item.preco}</Text>}
    />