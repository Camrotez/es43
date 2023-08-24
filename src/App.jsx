import FilteredList from "./assets/FilteredList"
import React, { useState} from 'react';
function App() {
  const initialList = [
    { id: 1, name: "luciano", age: 25 },
    { id: 2, name: "marco", age: 17 },
    { id: 3, name: "michele", age: 18 },
    { id: 4, name: "carlo", age: 5 },
    { id: 5, name: "gennaro", age: 30 },
  ];

  const [list, setList] = useState(initialList);

  return (
    <div>
      <FilteredList list={list} />
    </div>
  );
}

export default App;
