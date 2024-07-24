const Header = (props) => {
  console.log(props.course)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
};

const Part = (props) => {
  return (
    <div>
      <p>{props.part} has {props.exercise} exercises.</p>
    </div>
  )
};

const Content = ({prop}) => {
  return (
    <div>
      <Part part={prop[0].part} exercise={prop[0].exercise}/>
      <Part part={prop[1].part} exercise={prop[1].exercise}/>
      <Part part={prop[2].part} exercise={prop[2].exercise}/>
    </div>
  )
}

const Total = ({prop1, prop2, prop3}) => {
  console.log({prop1, prop2, prop3})
  return (
    <div>
      <p>
        Number of exercises: {prop1+prop2+prop3}.
      </p>
    </div>
  )
};

const App = () => {
  const course = 'Half Stack application development';
  const courseInfo = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14}
  ];

  return (
    <div>
      <Header course={course} />
      <Content prop={courseInfo} />
      <Total prop1={courseInfo[0].exercise} prop2={courseInfo[1].exercise} prop3={courseInfo[2].exercise} />
    </div>
  )
};

export default App
