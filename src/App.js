
import { useEffect, useState } from 'react';
import './App.css';
import coverCard from "../src/assets/img/cover.png"
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src":"./assets/img/navi1.jpg ", matched :false},
  {"src":"./assets/img/navi2.jpg ", matched :false},
  {"src":"./assets/img/navi3.jpg ", matched :false},
  {"src":"./assets/img/navi4.jpg ", matched :false},
  {"src":"./assets/img/navi5.jpg ", matched :false},
  {"src":"./assets/img/navi6.jpg ", matched :false},
  {"src":"./assets/img/navi7.jpg ", matched :false},
  {"src":"./assets/img/navi8.png ", matched :false},
  {"src":"./assets/img/navi9.jpg ", matched :false},
  {"src":"./assets/img/navi10.jpg", matched :false},    
]
function App() {
  const [cards, setCards] = useState([])// estado para las cartas barajadas
  
  const [turns, setTurns] = useState(0)//estado de turno 
  
  const [choiceOne, setChoiceOne] = useState(null)//estado para la primer carta elegida

  const [choiceTwo, setChoiceTwo] = useState(null)//estado para la segunda carta elegida

  const [disabled, setDisabled] = useState(false)


  //repartir baraja
  //trae 2 veces las imagenes
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=> Math.random() - 0.5)
      .map((card)=>({ ...card, id : Math.random() }))
      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards)
      setTurns(0)
  }

  //toma una carta selecionada, si es la primera o la segunta 
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo (card) : setChoiceOne(card)
    console.log(card)
  }

  //compara las 2 cartas seleccionadas
  useEffect(() => {
    if(choiceOne && choiceTwo){
      setDisabled(true)
      console.log('eligio 2 cartas');

      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              return{...card, matched:true}
            }else {
              return card
            }
          })
        })
        console.log('those cards match - las cartas coinciden');
        resetTurn()
      }else{
        console.log('those cards do not match - las cartas no coinciden');
        setTimeout(()=> resetTurn(), 1000)
      }
    }
  },[choiceOne, choiceTwo])

  console.log(cards);

  //resetea la cartas seleccionada e ingresa un turno
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }
  //console.log(cards, turns);

  //comenzar un nuevo juego automaticamente cuando se carga la pagina 
  useEffect(()=>{
    shuffleCards()
  },[])

  return (
    <div className="app">

      <h1 className='title-memotest'>Memotest</h1>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard 
          key={card.id} 
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          />
          ))}
      </div>

      <p className='turn-memotest'>Intentos:<span>{turns}</span></p>
      <button className='btn-play-again' onClick={shuffleCards}>Volver a jugar</button>
    </div>
  );
}

export default App;
  