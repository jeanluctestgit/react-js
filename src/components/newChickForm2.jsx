import React, { Component } from "react";

class NewChickForm2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        race: "",
        type: "",
        imgUrl: "https://picsum.photos/200/300",
      },
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Race</label>
          <input
            name="race"
            type="text"
            value={this.state.form.race}
            onChange={this.handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <input
            name="type"
            type="text"
            value={this.state.form.type}
            onChange={this.handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>ImgUrl</label>
          <input
            name="imgUrl"
            type="text"
            value={this.state.form.imgUrl}
            onChange={this.handleInputChange}
            className="form-control"
          />
        </div>

        <button className="btn btn-block btn-success" type="submit">
          Ajouter
        </button>
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { form } = this.state;
    let chicken = [
      ...this.props.chicken,
      { race: form.race, type: form.type, imgUrl: form.imgUrl },
    ];
    form.race = "";
    form.type = "";
    form.imgUrl = "" || "https://picsum.photos/200/300";
    this.setState({
      form: form,
    });
    this.props.onNewChick(chicken);
  };

  handleInputChange = (event) => {
    let { form } = this.state;
    const target = event.target;

    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    form[name] = value;

    this.setState({ form  : form});
  };
}

export default NewChickForm2;
