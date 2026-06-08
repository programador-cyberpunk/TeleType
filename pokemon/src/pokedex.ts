const container: HTMLElement = document.getElementById("pokedex")!;
//vou fazer com os pokemon que eu gosto porra

interface IPokemon{
    numero: number; //tentei usar os msms nomes do desenho
    nome: string;
    type: string;
    image: string;
    lore: string;
}

const mostraPokemon = (pokemon: IPokemon): void =>{
    let output: string = `<div class ="card">
    <span class="card--numero">#${pokemon.numero}</span>
    <img class="card--image" src=${pokemon.image} alt=${pokemon.nome}/>
    <h1 class = "card--name">${pokemon.nome}</h1>
    <span class="card--details">${pokemon.type}</span>
    </div>`;
    container.innerHTML += output;
};
//
const getPokemon = async( numero: number): Promise<void> => {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/${numero}');
        const pokemon = await response.json();

        const pokemonType = pokemon.types
            .map((poke: any) => poke.type.name)
            .join(', ');
           
           const transformPokemon = {
            numero: pokemon.id,
            nome: pokemon.name,
            tipo: pokemonType,
            image: pokemon.sprites.font_default,
           };
          console.log('transformPokemon', transformPokemon); 
    }catch(error){
        console.error('Erro ao caçar Pokemon: ', error);
    }
}
  /* const fetchData = (): void => {
        for(let = 1; i <= pokemons; i++){
            getPokemon(i);
        }
    }
    fetchData()*/ //isso aqui deu bosta