import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Update() {

  const [userName, setUserName] = useState('');
  const [ID, setID] = useState(null);


  const sendDataToAPI = () => {
    axios.put(`https://6318d4d9f6b281877c77d58b.mockapi.io/Crud/${ID}`, { userName })
  }

  useEffect(() => {
    setUserName(localStorage.getItem('userName'));
    setID(localStorage.getItem('ID'))
  }, [])

  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary addTodo"
        onClick={sendDataToAPI}>Update</button>
    </form>
  )
}
export default Update
