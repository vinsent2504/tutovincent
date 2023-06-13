import { Component } from "react";
import { Button, Alert } from "react-bootstrap";
class Result extends Component {
  state = {
    name: "Mario",
    winner: true,
  };

  changeStatus = () => this.setState({ winner: !this.state.winner });

  render() {
    const success = {
      backgroundColor: "green",
      color: "black",
    };

    const classColor = this.state.winner ? "success" : "danger";

    return (
      <>
        <Alert variant={classColor} className="text-center">
          {this.state.winner ? ` Bravo ${this.state.name}` : "Ratées"}
        </Alert>

        <Button
          onClick={this.changeStatus}
          variant="success"
          style={{ display: "block", margin: "5px auto" }}
        >
          change status
        </Button>
      </>
    );
  }
}
export default Result;
