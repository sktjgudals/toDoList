import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";
import List from "./List";
import Header from "./Header";

const Home: React.FC = () => {
  return (
    <>
      <Header path={"/"} title={`All ToDoList`} />
      <Link to="/daylist" className="icon_heading">
        <FiAlignLeft />
      </Link>
      <List />
    </>
  );
};

export default Home;
