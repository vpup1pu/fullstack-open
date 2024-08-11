import { useState } from 'react'

const Display = ({ title, text, votes }) => (
<div>
  <h1>{title}</h1>
  <p>{text}</p>
  <p>{votes}</p>
</div>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0: 1, 1: 3, 2: 4, 3: 2, 4: 0, 5: 0, 6: 0, 7: 0 })
  const [mostVotes, setMostVotes] = useState({ anecdote: anecdotes[2], votes: points[2] });

  const handleClick = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    console.log(random);
    setSelected(random);
  }

  const handleVote = () => {
    console.log(selected);
    const copy = { ...points }
    copy[selected] += 1
    setPoints(copy);

    if (copy[selected] > mostVotes.votes) {
      setMostVotes({ anecdote: anecdotes[selected], votes: copy[selected] });
    }
  }

  const displayVotes = (text) => {
    return `has ${text} votes`;
  }

  return (
    <div>
      <Display title="Anecdote of the day" text={anecdotes[selected]} votes={displayVotes(points[selected])} />
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleClick} text="next anecdote" />
      <Display title="Anecdote with most votes" text={mostVotes.anecdote} votes={displayVotes(mostVotes.votes)} />
    </div>
  )
}

export default App