import "./Exercise2.css";
import React from "react";
import "antd/dist/antd.css";
import { ThemeContext, themes } from "./ThemeContext";

const MessageContext = React.createContext();

const ChildComponentFun = (props) => {
  return (
    <div>
      <MessageContext.Consumer>
        {(context) => <h1>Message from Grandparents: {context}</h1>}
      </MessageContext.Consumer>
    </div>
  );
};

const ParentComponentFun = (props) => {
  return <ChildComponentFun />;
};

const GrandParentComponentFun = (props) => {
  const message = "Cố học đi cháu";
  return (
    <MessageContext.Provider value={message}>
      <ParentComponentFun />
    </MessageContext.Provider>
  );
};

class Question1aFun extends React.Component {
  render() {
    return (
      <div>
        <GrandParentComponentFun />
      </div>
    );
  }
}

class ChildComponentClass extends React.Component {
  render() {
    return (
      <div>
        <h1>Message from Grandparents: {this.context}</h1>
      </div>
    );
  }
}
ChildComponentClass.contextType = MessageContext;

const ParentComponentClass = (props) => {
  return <ChildComponentClass />;
};

const GrandParentComponentClass = (props) => {
  const message = "Cố học đi cháu";
  return (
    <MessageContext.Provider value={message}>
      <ParentComponentClass />
    </MessageContext.Provider>
  );
};

class Question1aClass extends React.Component {
  render() {
    return (
      <div>
        <GrandParentComponentClass />
      </div>
    );
  }
}

const ChildComponent = (Props) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div>
          <h1
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
            }}
          >
            Message from Grandparents:
          </h1>
          <button
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
            }}
          >
            Chau da hieu
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

const ParentComponent = (props) => {
  return (
    <>
      <ChildComponent />
    </>
  );
};

class GrandParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.dark,
    };
  }

  changeTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ParentComponent />
        <button onClick={this.changeTheme}> Change Theme</button>
      </ThemeContext.Provider>
    );
  }
}

class Question1b extends React.Component {
  render() {
    return (
      <>
        <GrandParentComponent />
      </>
    );
  }
}
export default { Question1aFun, Question1aClass, Question1b };
