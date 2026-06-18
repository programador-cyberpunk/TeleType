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
const [primeiro, ...resto] = [10, 20, 30, 40];
console.log(primeiro);
console.log(resto);
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