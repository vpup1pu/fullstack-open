const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><b>Number of exercises {sum}</b></p>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  console.log(parts)
  const content = parts.map(i => {
    console.log('see', i);
    return <Part part={i} key={i.id} />;
  });
  console.log('see', content)
  return <>{content}</>
}

const Course = ({ courses }) => {
  const eachCourse = courses.map(course => {
    const total = course.parts.reduce((sum, parts) => {
      console.log('see', sum, parts.exercises)
      return sum + parts.exercises
      }, 0);
    return <div key={course.id}>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={total} />
    </div>;
  });
  return (
    <div>
      {eachCourse}
    </div>
  )
}

export default Course