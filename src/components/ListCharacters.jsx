import React from 'react'
import { useEffect, useState } from 'react'

import Character from './Character'

export default function ListCharacters() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fecthData() {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setLoading(false);
            setCharacters(data.results)
        }
        fecthData()
    }, [])

    return (
        <>
            {
                loading ? (<h1>Cargando</h1>) : 
                
                (characters.map(character => {
                    return (
                        <Character key={character.id} character={character} />
                    )
                }))
            }
        </>

    )
}
