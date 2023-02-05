import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  console.log("render started");
  useEffect(() => {
    console.log("useEfeect called");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (e) => {
    console.log("onSearchChange started");
    setSearchField(e.target.value.toLowerCase());
    console.log(searchField);
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log("onSearchChange finished");
  };

  console.log("return statement called");

  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        placeholder="Search monsters"
        type="search"
        onChangeHandler={onSearchChange}
      />

      {searchField ? (
        <CardList monsters={filteredMonsters} />
      ) : (
        <CardList monsters={monsters} />
      )}
      {console.log("render finished")}
    </div>
  );
};

export default App;
