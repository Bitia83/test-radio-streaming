
import {ChangeEvent, useState } from 'react';
import './App.css';
import List from './componentes/List';
import Search from './componentes/Search';
import axios from 'axios'
function App() {
  const [search, setSearch] = useState('')
  const [list, setList] = useState([])
  const [init, setInit] = useState(true);


  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleClick = () => {
    const url = `http://95.179.139.106/json/stations/search?name=${search}`;
   
    axios.get(url)
      .then(result => {
        setList(result.data)
      })
    .catch(console.error)
    }

  return (
    <div className="App">
      <header>
        <h1>radio factoria</h1>
      </header>
      <Search value={search} handleClick={handleClick} handleChange={ handleChange} />
      <List list={list} init={init} />
    </div>
  );
}

export default App;
