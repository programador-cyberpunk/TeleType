const container: HTMLElement = document.getElementById("pokedex")!;
//vou fazer com os pokemon que eu gosto porra
//https://codesandbox.io/p/sandbox/typescript-pokedex-yluzs?file=%2Fsrc%2Findex.ts

interface IPokemon{
    numero: number; //tentei usar os msms nomes do desenho
    nome: string;
    tipo: string;
    image: string;
    lore: string;
}

const mostraPokemon = (pokemon: IPokemon): void =>{
    let output: string = `<div class ="card">
    <span class="card--numero">#${pokemon.numero}</span>
    <img class="card--image" src=${pokemon.image} alt=${pokemon.nome}/>
    <h1 class = "card--name">${pokemon.nome}</h1>
    <span class="card--details">${pokemon.tipo}</span>
    </div>`;
    container.innerHTML += output;
};

const getPokemon = async (numero: number): Promise<void> =>{
 const data: Response = await fetch('https://pokeapi.co/api/v2/pokemon/${numero}'); //possivelmente vai dar erro
 const pokemon: any = await data json();
 const pokemonType : string = pokemon.tipos
                        .map((poke: any) => poke.tipo.nome)
                        .join(", ");


const transformPokemon = {
    numero: pokemon.numero,
    nome: pokemon.nome,
    image: `${pokemon.sprites.front_default}`,
    tipo: pokemonTipo
};
    showPokemon(transformPokemon);
};

    const fetchData = (): void => {
        for(let = 1; i <= pokemons; i++){
            getPokemon(i);
        }
    };
    fetchData();