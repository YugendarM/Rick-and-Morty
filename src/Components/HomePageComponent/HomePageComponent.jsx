import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./HomePageComponent.css"
import CharacterComponent from '../CharacterComponent/CharacterComponent';
import { useQuery } from 'react-query';

const HomePageComponent = () => {
    // const [characterData, setCharacterData] = useState([]);
    const [page, setPage] = useState(1);

    const handlePrevious = async() => {
      console.log("previous clicked");
      setPage((prev) => prev-1);
    }

    const handleNext = async() => {
      console.log("next clicked");
      setPage((prev) => prev+1);
    }

    const fetchData = async({queryKey}) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
        return response.data
    }
    // useEffect(() => {
    //     fetchData();
    // },[page])

    const {data, isPreviousData, isLoading, isError} = useQuery(["characters", page], fetchData, 
    {
      keepPreviousData: true
    });

    if (isLoading){
      return <div className='page__header'>Loading...</div>
    }
    if (isError){
      return <div>Error...</div>
    }


  return (
    <React.Fragment>
      <main className='main__container'>
        <h1 className='page__header'>Rick and Morty</h1>
       


        <div className='characters__container'>
        {
          data.results && data.results.map((character) => (
              <CharacterComponent character = {character}/>
          ))
        }
        </div>


        <div className='page__navigation__container'>
        
          <button disabled= {data.info && data.info.prev === null} className='primary__btn' onClick={handlePrevious}>Previous</button>
          <h1 className='page__header'>{page}</h1>
          <button disabled= {isPreviousData || !data.info.next} className='primary__btn' onClick={handleNext}>Next</button>
        </div>
      </main>

    </React.Fragment>
  )
}

export default HomePageComponent
