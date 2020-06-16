import React, { Component } from 'react';
import characters from './characters.json';
import CharacterCard from './components/CharacterCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Header from './components/Header'

class App extends Component {

  

      constructor(props) {
        super(props);
        this.state = {
          characters,
          clickCount: 0,
          score: 0
        }
      };

      // handleClick = () => {
      //   console.log(this.state)

      //   this.setState({ clickCount: this.state.clickCount + 1 })
      // }

      render() {
        return (
          <Wrapper>
            <Header scores={this.state.score}/>
            <Title> Characters </Title>
            {this.state.characters.map(character => (
              <CharacterCard
                clicks={this.state.clickCount}
                onClick={this.handleClick}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
              />
          ))}
            
          </Wrapper>
        )
        
    }

}

export default App;

