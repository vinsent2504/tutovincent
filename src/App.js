import Result from "./components/Game";

import { Container, Button } from "react-bootstrap";

function App() {
  const customBtn = {
    backgroundColor: "grey",
    border: "none",
    color: "#fff",
    fontsize: "19px",
    padding: "15px 30px",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "7px",
    display: "block",
    margin: "20px auto",
  };
  const sayHello = () => alert("Hello World");
  return (
    <Container>
      <Result></Result>

      <Button variant="warning" onClick={sayHello} style={customBtn}>
        {" "}
        btn de app
      </Button>
    </Container>
  );
}

export default App;
