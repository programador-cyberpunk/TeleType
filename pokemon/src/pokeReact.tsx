import React, { useState, useEffect } from 'react'; // vtnc, como essa porra dessa virgula funciona????
import { IPokemon } from './pokedex';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

export default function Pokedex(){
    const [pokemon, setPokemon] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPokemon(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
            const data = await response.json();
            setPokemon(data);
            setLoading(false);
        
        }
        fetchPokemon();
    }, []);

     if(loading) return <ActivityIndicator size="large" />;
        return(
            <View>
                <Text>{pokemon.name.ToUpperCase()}</Text>
                <Image 
                   source={{uri: pokemon.sprites.front_default}}
                   style={{ width: 200, height: 200}}
                   />
            </View>

        );
}