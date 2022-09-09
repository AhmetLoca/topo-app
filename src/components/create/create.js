import React, { useState } from 'react'
import axios from 'axios';
function Create() {

  const [userName, setUserName] = useState('');

  const sendDataToAPI = () => {
    axios.post(`https://6318d4d9f6b281877c77d58b.mockapi.io/Crud`, { userName })
  }

  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={(e) => setUserName(e.target.value)} />
      </div>
      <button
        type="submit"
        className="btn btn-primary addTodo"
        onClick={sendDataToAPI}>Add Todo</button>
    </form>
  )
}

export default Create