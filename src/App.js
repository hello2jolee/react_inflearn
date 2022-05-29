// import "./App.css";
import Container from "./Container";
import Counter from "./Counter";
import MyHeader from "./MyHeader";

function App() {
  const numbers = {
    a: 1,
    b: 2,
    initialValue: 5,
  };
  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...numbers} />
      </div>
    </Container>
  );
}

export default App;
