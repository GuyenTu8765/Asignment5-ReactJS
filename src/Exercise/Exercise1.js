import React, { Component } from "react";
import "./Exercise1.css";
// import "antd/dist/antd.css";
// import { Table } from "antd";

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};
//  Calculator
class Question1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(event) {
    this.setState({ temperature: event.target.value });
  }
  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

const InputName = (props) => {
  const handleChangeInput = (event) => {
    props.changeInputName(event.target.value);
  };

  return (
    <div>
      <label>
        Name:
        <input
          type={"text"}
          value={props.name}
          onChange={handleChangeInput}
        ></input>
      </label>
    </div>
  );
};

class Question2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  receiveInputChanging = (newName) => {
    this.setState({
      name: newName,
    });
  };

  render() {
    return (
      <div>
        <InputName
          name={this.state.name}
          changeInputName={this.receiveInputChanging}
        />
        <div>Hello {this.state.name} </div>
      </div>
    );
  }
}

class TemperatureInput extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {this.props.typeTemperature}: </legend>
        <input
          value={this.props.temperature}
          onChange={(event) =>
            this.props.onTemperatureChange(event.target.value)
          }
        />
      </fieldset>
    );
  }
}

class Question3a extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
  }

  toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  handleCelsiusChange = (celsius) => {
    this.setState({
      temperature: celsius,
    });
  };

  handleFahrenheitChange = (fahrenheit) => {
    this.setState({
      temperature: this.toCelsius(fahrenheit),
    });
  };

  render() {
    const celsius = this.state.temperature === "" ? "" : this.state.temperature;
    const fahrenheit =
      this.state.temperature === ""
        ? ""
        : this.toFahrenheit(this.state.temperature);
    return (
      <div>
        <TemperatureInput
          temperature={celsius}
          typeTemperature="Celsius"
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          temperature={fahrenheit}
          typeTemperature="Fahrenheit"
          onTemperatureChange={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}

const USDtoVND = (props) => {
  const convert = (usd) => {
    return usd * 24845;
  };
  return (
    <>
      <span>USD </span>
      <input
        onChange={(event) => {
          const usd = event.target.value;
          const vnd = convert(usd);
          props.onHandleChange({
            usd,
            vnd,
          });
        }}
        value={props.value}
      />
    </>
  );
};

const VNDtoUSD = (props) => {
  const convert = (vnd) => {
    return vnd / 24845;
  };
  return (
    <>
      <span>VND </span>
      <input
        onChange={(event) => {
          const vnd = event.target.value;
          const usd = convert(vnd);
          props.onHandleChange({
            usd,
            vnd,
          });
        }}
        value={props.value}
      />
    </>
  );
};

class Question3b extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usd: 0,
      vnd: 0,
    };
  }

  handleChange = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <>
        <USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
        <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
      </>
    );
  }
}
export default { Question1, Question2, Question3a, Question3b };
