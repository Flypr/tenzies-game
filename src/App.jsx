import Die from './components/Die'
import { useState } from 'react'

function App() {
  const [dice, setDice] = useState(allNewDice());

  const diceElements = dice.map(die => <Die value={die} /> )

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  return (
    <main className="tenzies__main">
      <div className="tenzies__dice">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
