const Content = (props) => {
  // console.log(props.part[0].exercises)
  return (
    <>
      <Part part={props.part[0].name} exercise={props.part[0].exercises}/>
      <Part part={props.part[1].name} exercise={props.part[1].exercises}/>
      <Part part={props.part[2].name} exercise={props.part[2].exercises}/>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}


export default Content