import "./Exercise2.css";
import { Col, Form, Row, Alert } from "antd";
import React from "react";
import "antd/dist/antd.css";

import Input from "./Exercise2Que4/Input";
import Select from "./Exercise2Que4/Select";
import Checkbox from "./Exercise2Que4/CheckBox";
import TextArea from "./Exercise2Que4/TextArea";
import Button from "./Exercise2Que4/Button";

class Question1a extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
class Question1b extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const Question1c = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    alert("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

class Question2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
    };
  }

  changeName = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };
  render() {
    return (
      <>
        <h1>FullName: {this.state.fullName}</h1>
        <input
          type="text"
          value={this.state.fullName}
          onChange={this.changeName}
        ></input>
      </>
    );
  }
}

class Question4 extends React.Component {
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

      genderOptions: ["Male", "Female", "UnKnow"],
      skillOptions: ["Programing", "Development", "Design", "Testing"],
    };

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

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
    let name = event.target.value;
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
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType="text"
          title="Full Name"
          name="name"
          value={this.state.newUser.name}
          placeholder={"Enter your full name"}
          handleChange={this.handleInput}
        />
        <Input
          inputType={"number"}
          title={"Age"}
          name={"age"}
          value={this.state.newUser.age}
          placeholder={"Enter your age"}
          handleChange={this.handleAge}
        />
        <Select
          title={"Gender"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={"Select your gender"}
          handleChange={this.handleInput}
        />
        <Checkbox
          title={"Skills"}
          name={"skill"}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        />
        <TextArea
          title={"About you"}
          row={"10"}
          name={"currentPetInfo"}
          value={this.state.newUser.about}
          placeholder={"Describe your past experience and skills"}
          handleChange={this.handleTextArea}
        />
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
        />
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
        />
      </form>
    );
  }
}

export default { Question1a, Question1b, Question1c, Question2, Question4 };
