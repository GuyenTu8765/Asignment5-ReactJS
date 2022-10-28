import React, { Component } from "react";

/* Import Components */

import InputFrom from "./Exercise2Que4/InputFrom";
import TextAreaFrom from "./Exercise2Que4/TextAreaFrom";
import SelectFrom from "./Exercise2Que4/SelectFrom";
import ButtonFrom from "./Exercise2Que4/ButtonFrom";
import CheckBoxFrom from "./Exercise2Que4/CheckBoxFrom";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: "",
      },

      genderOptions: ["Male", "Female", "Others"],
      skillOptions: ["Programming", "Development", "Design", "Testing"],
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName = (event) => {
    let value = event.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          name: value,
        },
      }),
      () => console.log(this.state.newUser)
    );
  };

  handleAge = (event) => {
    let value = event.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          age: value,
        },
      }),
      () => console.log(this.state.newUser)
    );
  };

  handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          [name]: value,
        },
      }),
      () => console.log(this.state.newUser)
    );
  };

  handleTextArea = (event) => {
    console.log("Inside handleTextArea");
    let value = event.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          about: value,
        },
      }),
      () => console.log(this.state.newUser)
    );
  };

  handleCheckBox = (event) => {
    const newSelection = event.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        (s) => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState((prevState) => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray },
    }));
  };

  handleFormSubmit = (event) => {
    let name = this.state.newUser.name;
    let age = this.state.newUser.age;
    let gender = this.state.newUser.gender;
    let skill = this.state.newUser.skills;
    let about = this.state.newUser.about;
    alert(
      "input name is:" +
        name +
        ", Age: " +
        age +
        ", gender: " +
        gender +
        ", skill: " +
        skill +
        ", about you: " +
        about
    );
    event.preventDefault();
  };

  handleClearForm = (event) => {
    event.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: "",
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <InputFrom
          inputType={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />
        <InputFrom
          inputType={"number"}
          name={"age"}
          title={"Age"}
          value={this.state.newUser.age}
          placeholder={"Enter your age"}
          handleChange={this.handleAge}
        />
        <SelectFrom
          title={"Gender"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={"Select Gender"}
          handleChange={this.handleInput}
        />
        <CheckBoxFrom
          title={"Skills"}
          name={"skills"}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        />

        <TextAreaFrom
          title={"About you."}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Describe your past experience and skills"}
        />

        <ButtonFrom
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />
  
        <ButtonFrom
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />

      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px",
  color: "rgb(11 11 226)",
  // background-color: "#0404f0",
};

class Question2 extends React.Component {
  render() {
    return (
      <>
        <FormContainer />
      </>
    );
  }
}
export default { Question2 };
