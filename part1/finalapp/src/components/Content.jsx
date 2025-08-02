const Content = (props) => {
  return (
    <>
      <Part part={props.part[0]} exercise={props.exercise[0]}/>
      <Part part={props.part[1]} exercise={props.exercise[1]}/>
      <Part part={props.part[2]} exercise={props.exercise[2]}/>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}


export default Content