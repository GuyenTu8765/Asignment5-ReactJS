import React, { Component } from "react";
import "./Exercise1.css";
import "antd/dist/antd.css";
import {  Table } from 'antd';

function Question1() {
  return (
    <React.Fragment>
      <p>Some text.</p>
      <h1>A heading</h1>
      <p>More text.</p>
      <h1>Another heading</h1>
      <p>Even more text.</p>
      </React.Fragment>
  );
}

const dataSource = [
  {
    key: '1',
    name: 'Trần Đức Anh',
    date: '03/08/1993',
    sex: 'Nam',
  },
  {
    key: '2',
    name: 'Kieu Thi Thu Trang',
    date: '04/09/1991',
    sex: 'Nu',
  },
  {
    key: '3',
    name: 'Vuong Thi Le Na',
    date: '06/10/1991',
    sex: 'Nu',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Sex',
    dataIndex: 'sex',
    key: 'sex',
  },

];

const Question2p1 = () => {
  return <Table dataSource={dataSource} columns={columns} />
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="bordersName">Name</th>
        <th className="borders1">Date</th>
        <th className="borders1">Sex</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((item, index) => {
    return (
      <tr key={index}>
        <td className="bordersName">{item.name}</td>
        <td className="borders1">{item.date}</td>
        <td className="borders1">{item.sex}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table1 extends Component {
  render() {
    const { characterData } = this.props;
    return (
      <table className="bordersName">
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

class Question2p2 extends Component {
  render() {
    const characters = [
      {
        name: "Trần Đức Anh",
        date: "03/08/1993",
        sex: "Nam",
      },
      {
        name: "Kieu Thi Thu Trang",
        date: "04/09/1991",
        sex: "Nu",
      },
      {
        name: "Vuong Thi Le Na",
        date: "06/10/1991",
        sex: "Nu",
      },
    ];
    return (
      <div className="container">
        <Table1 characterData={characters} />
      </div>
    );
  }
}

export default { Question1, Question2p1, Question2p2 };
