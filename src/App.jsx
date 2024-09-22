import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <h1 className="heading">New Channel</h1>
        <Form />
      </div>
    </>
  );
}

export default App;
