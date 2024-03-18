import React from 'react'

const CharacterComponent = ({character}) => {
  return (
    <div key={character.id} className='character__container'>
        <div >
            <img className='character__image' src={character.image} alt="" />
        </div>
        <div className='character__description'>
            <p className='character__name'>{character.name}</p>
            <p className='character__status'>{character.status}-{character.species}</p>
            <p id='last__seen'>Last seen on</p>
            <p>{character.location.name}</p>
        </div>
        
    </div>
  )
}

export default CharacterComponent
