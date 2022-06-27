import React from 'react'
import { useEffect, useState } from 'react'

import Character from './Character'

export default function ListCharacters() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function fecthData() {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setCharacters(data.results)
        }
        fecthData()
    }, [])

    return (
        <>
            {
                characters.map(character => {
                    return (
                        <Character key={character.id} character={character}/>
                    )
                })
            }
        </>

    )
}
