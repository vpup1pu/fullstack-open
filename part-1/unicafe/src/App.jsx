import { useState } from 'react'

const Display = ({ title }) => <div><h1>{title}</h1></div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statisctics = ({ good, neutral, bad }) => {
  const totalClicks = good + neutral + bad;
  const totalScore = good * 1 + neutral * 0 + bad * -1;
  const averageScore = totalClicks > 0 ? totalScore / totalClicks : 0;
  const percent = totalClicks > 0 ? `${good * 100 / totalClicks}%` : "0%";

  if (totalClicks !== 0) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={totalClicks} />
            <StatisticLine text="average" value={averageScore} />
            <StatisticLine text="positive" value={percent} />
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
      <p>
        No feedback given
      </p>
    </div>
  )
}

const BtnFeedback = ({ handleGood, handleNeutral, handleBad }) => (
  <div>
    <Display title="give feedback" />
    <Button handleClick={handleGood} text="good" />
    <Button handleClick={handleNeutral} text="neutral" />
    <Button handleClick={handleBad} text="bad" />
  </div>
)

const ShowStatistics = ({ good, neutral, bad }) => (
  <div>
    <Display title="statistics" />
    <Statisctics good={good} neutral={neutral} bad={bad} />
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleBtnClick = (name, set) => {
    const total = name + 1;
    set(total);
    console.log(`total clicks: ${total}`);
  }

  return (
    <div>
      <BtnFeedback handleGood={() => handleBtnClick(good, setGood)} handleNeutral={() => handleBtnClick(neutral, setNeutral)} handleBad={() => handleBtnClick(bad, setBad)} />
      <ShowStatistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
