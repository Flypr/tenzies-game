import Die from './components/Die'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map(die => <Die key={die.id} {...die} holdDice={() => holdDice(die.id)} /> )  

  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allDiceAreTheSame = dice.every(die => die.value === dice[0].value && die.isHeld)
    if (allDiceAreTheSame) {
      setTenzies(true)
    }
  }, [dice])

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }

  function rollDice() {
    if (!tenzies) {
      setDice(prevDice => prevDice.map(die => {
          return die.isHeld ? {...die} : {...die, value: Math.ceil(Math.random() * 6)}
        })
      )
    } else {
      setDice(allNewDice())
      setTenzies(false)
    }
    
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : {...die}
      })
    )
  }

  return (
    <main className="tenzies__main">
      {tenzies && <Confetti />}
      <h1 className="tenzies__title">Tenzies</h1>
      <p className="tenzies__instructions">Roll until all dice are the same. 
      Click each die to freeze it at its current value between rolls.</p>
      <div className="tenzies__dice">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
