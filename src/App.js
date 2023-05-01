import React from "react";
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";
import ServiceFilter from "./components/ServiceFilter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="redux_filter">
      <ServiceAdd />
      <ServiceFilter />
      <ServiceList />
    </div>
  );
}

export default App;

