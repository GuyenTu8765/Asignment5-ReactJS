import "./Exercise2.css";
import React from "react";
import "antd/dist/antd.css";
import { ThemeContext, ThemeContext1, themes } from "./ThemeContext";

const MessageContext = React.createContext();
MessageContext.displayName = "message";

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

const ChildComponentB = (props) => {
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

const ParentComponentB = (props) => {
  return (
    <>
      <ChildComponentB />
    </>
  );
};

class GrandParentComponentB extends React.Component {
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
        <ParentComponentB />
        <button onClick={this.changeTheme}> Change Theme</button>
      </ThemeContext.Provider>
    );
  }
}

class Question1b extends React.Component {
  render() {
    return (
      <>
        <GrandParentComponentB />
      </>
    );
  }
}

const ChildComponentC = (props) => {
  return (
    <MessageContext.Consumer>
      {(message) => (
        <ThemeContext1.Consumer>
          {({ theme, changeTheme }) => (
            <>
              <h1
                style={{
                  backgroundColor: theme.background,
                  color: theme.foreground,
                }}
              >
                Message from GrandParents: {message}
              </h1>
              <button
                style={{
                  backgroundColor: theme.background,
                  color: theme.foreground,
                }}
              >
                Chau da hieu
              </button>
              <button onClick={changeTheme}> Change Theme</button>
            </>
          )}
        </ThemeContext1.Consumer>
      )}
    </MessageContext.Consumer>
  );
};

const ParentComponentC = (props) => {
  return (
    <>
      <ChildComponentC />
    </>
  );
};

class GrandParentComponentC extends React.Component {
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
    const themeAndMethod = {
      theme: this.state.theme,
      changeTheme: this.changeTheme,
    };
    const message = "CO hoc di chau";

    return (
      <MessageContext.Provider value={message}>
        <ThemeContext1.Provider value={themeAndMethod}>
          <ParentComponentC />
        </ThemeContext1.Provider>
      </MessageContext.Provider>
    );
  }
}

class Question1c extends React.Component {
  render() {
    return (
      <>
        <GrandParentComponentC />
      </>
    );
  }
}

export default { Question1aFun, Question1aClass, Question1b, Question1c };
