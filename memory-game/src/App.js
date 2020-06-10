import React from 'react';
import Header from './components/Header';
import characters from './characters.json';
import CharacterCard from './components/CharacterCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper'

function App() {

  let charactersCard = characters.map(character => {
    return <CharacterCard {...character}/>
  })

  return (
    <Wrapper>
      <Title> Characters </Title>
      {charactersCard}
    </Wrapper>
  )
  
}

export default App;

