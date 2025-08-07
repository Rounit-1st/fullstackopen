const Total = (props) => {
  // console.log(props.exercise[0].exercises)
  // console.log(Number(props.exercise[0].exercises)+Number(props.exercise[1].exercises)+Number(props.exercise[2].exercises))
  return (
      <p>Number of exercises {Number(props.exercise[0].exercises)+Number(props.exercise[1].exercises)+Number(props.exercise[2].exercises)}</p>
  )
}

export default Total