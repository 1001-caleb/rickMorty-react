import React from 'react'
import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import Character from './Character'

function NavPage({page, setPage}) {
    return (
        <header>
            <p>Page : {page}</p>
            <button onClick={() => setPage(page + 1 )}>next page {page + 1 }</button>
        </header>
    )
}

export default function ListCharacters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        async function fecthData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setLoading(false);
            setCharacters(data.results)
        }
        fecthData()
    }, [page])

    return (
        <>
            <NavPage page={page} setPage={setPage}></NavPage>
            <Flex wrap='wrap' gap='10'>
            {
                loading ? (<h1>Cargando</h1>) :

                    (characters.map(character => {
                        return (
                            <Character key={character.id} character={character} />
                        )
                    }))
            }
            </Flex>
          
             <NavPage page={page} setPage={setPage}></NavPage>
        </>

    )
}
