import { Component } from "react";
import Card from "./components/card";
import List from "./components/list";
import NewChickForm from "./components/newChickForm";
import NewChickForm2 from "./components/newChickForm2";

class App extends Component {
  state = {
    chicken: [
      {
        race: "Harco",
        type: "Pondeuse",
        imgUrl: "https://picsum.photos/200/300",
      },
      {
        race: "Cou nu",
        type: "Chair",
        imgUrl: "https://picsum.photos/200/300",
      },
      {
        race: "Standard",
        type: "Chair",
        imgUrl: "https://picsum.photos/200/300",
      },
    ],
    current: 0,
    form: {
      race: "",
      type: "",
      imgUrl: "" || "https://picsum.photos/200/300",
    },
  };
  render() {
    return (
      <div className="container" style={{ width: "20rem" }}>
        <NewChickForm2
          chicken={this.state.chicken}
          onNewChick={this.NewChick}
        />
        <NewChickForm
          state={this.state}
          onChickChange={this.handleInputChange}
          onAddChick={this.handleSubmit}
        />
        <hr></hr>
        <List
          chicken={this.state.chicken}
          current={this.state.current}
          handleDelete={this.handleDelete}
          onChickNext={this.handleChickNext}
        />
        <hr></hr>
        <Card
          chick={this.state.chicken[this.state.current]}
          onChickNext={this.handleChickNext}
        />
      </div>
    );
  }

  handleChickNext = () => {
    let { current, chicken } = this.state;
    this.setState({
      current: current === chicken.length - 1 ? 0 : current + 1,
    });
  };

  handleDelete = (current) => {
    let { chicken } = this.state;

    chicken = chicken.filter((chick, index) => {
      return current !== index;
    });

    this.setState({
      chicken: chicken,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let { form, chicken } = this.state;
    chicken = [
      ...chicken,
      { race: form.race, type: form.type, imgUrl: form.imgUrl },
    ];
    form.race = "";
    form.type = "";
    form.imgUrl = "" || "https://picsum.photos/200/300";
    this.setState({
      chicken: chicken,
      form: form,
    });
  };

  handleInputChange = (event) => {
    let { form } = this.state;
    const target = event.target;

    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    form[name] = value;

    this.setState({ form });
  };

  NewChick = (chicken) => {
    this.setState({
      chicken: chicken,
    });
  };
}

export default App;
