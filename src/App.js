
import { useState } from 'react';
import './App.css';
import coverCard from "../src/assets/img/cover.png"

const cardImages = [
  {"src":"./assets/img/navi1.jpg" },
  {"src":"/assets/img/navi2.jpg" },
  {"src":"/img/navi3.jpg" },
  {"src":"./assets/img/navi4.jpg" },
  {"src":"../src/assets/img/navi5.jpg" },
  {"src":"../src/assets/img/navi6.jpg" },
  {"src":"../src/assets/img/navi7.jpg" },
  {"src":"/img/navi8.png" },
  {"src":"../src/assets/img/navi0.jpg" },
  {"src":"./img/navi10.jpg" }    
]
function App() {
  const [cards, setCards] = useState([])// estado para las cartas barajadas
  const [turns, setTurns] = useState(0)//estado de turno 

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=> Math.random() - 0.5)
      .map((card)=>({ ...card, id : Math.random() }))
      setCards(shuffledCards)
      setTurns(0)
  }
  console.log(cards, turns);

  return (
    <div className="App">
      <button  onClick={shuffleCards}>Volver a jugar</button>

      <div className='card-grid'>
        {cards.map(card=>(
          <div className='card' key={card.id}>
            {console.log(card)}
            
            <div>
              <img className="front-card" src={card.src} alt='tarjeta de frente'/>
              <img className="back-card" src={coverCard} alt='tarjeta dada vuelta'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
  