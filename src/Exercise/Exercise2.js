import "./Exercise2.css";
import React from "react";
import "antd/dist/antd.css";

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

export default { Question1aFun, Question1aClass };
