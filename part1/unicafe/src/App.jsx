import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <ButtonDiv goodHandler={()=>{setGood(g=>g+1)}} badHandler={()=>{setBad(b=>b+1)}} neutralHandler={()=>{setNeutral(n=>n+1)}}  />
      <Statistics good={good} bad={bad} neutral={neutral}/>      
    </div>
  )
}

const ButtonDiv = ({goodHandler,badHandler,neutralHandler}) => {

  return (
    <>
      <button onClick= {goodHandler} >good</button>
      <button onClick= {neutralHandler}>neutral</button>
      <button onClick= {badHandler}>bad</button>
    </>
  )
}

const Statistics = ({good, bad, neutral}) =>{
  const all = (good + bad + neutral);
  const avg = (1.00*(good-bad))/all;
  const positive = (1.00*good)/all;
  if(good === 0 && bad === 0 && neutral === 0 ){
    return (<><h1>statistics</h1><section>No feedback given</section></>)
  }
  return(
    <>
      <h1>statistics</h1>
      <table>
      <StatisticsLine text='good' value={good}/>
      <StatisticsLine text='neutral' value={neutral}/>
      <StatisticsLine text='bad' value={bad}/>
      <StatisticsLine text='all' value={all}/>
      <StatisticsLine text='avg' value={avg}/>
      <StatisticsLine text='positive' value={positive}/>
      </table>
    </>
  )
}

const StatisticsLine= ({text,value}) =>{
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

export default App