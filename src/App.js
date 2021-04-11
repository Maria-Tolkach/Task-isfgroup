import React, {useState, useEffect} from "react";
import './App.css';
import { TableRow, TableHeader } from "./components/Table";
import Modal from "./components/Modal";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isShow, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect( () => {
    loadData()
  }, [])

  const loadData = () => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users").
    then(response => response.json()).
    then(data => {
      setData(data);
      setLoading(false);
    });
  }

  const handleClick = (id) => {
    const item = data.find(item => item.id === id)
    setModalContent(item)
    handleShowModal()
  }

  const handleShowModal = () => setShow(!isShow)

  return (
    <div className="App">
      <Modal 
        isShow = {isShow} 
        handleShowModal = {handleShowModal}
        content = {modalContent}
      />
      <div className="table">
        <TableHeader/>
        <div className="table__body">
          {data.map(user => {
            return (
              <TableRow
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
              website={user.website}
              onClick={handleClick}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
