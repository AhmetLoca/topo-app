import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Read() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get('https://6318d4d9f6b281877c77d58b.mockapi.io/Crud')
      .then((getData) => {
        setApiData(getData.data);
      })
  }, [])

  const setData = (id, userName) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('userName', userName)
  }

  const getData = () => {
    axios.get('https://6318d4d9f6b281877c77d58b.mockapi.io/Crud')
      .then((getData) => {
        setApiData(getData.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`https://6318d4d9f6b281877c77d58b.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      })
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Todo</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => {
            return (
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.userName}</td>
                <td><button
                  type="button"
                  className="btn btn-success"
                  onClick={() => setData(data.id, data.userName)}
                >Update</button>
                </td>

                <td><button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onDelete(data.id)}
                >Delete</button></td>
              </tr>
            )
          })}



        </tbody>
      </table>
    </div>
  )
}

export default Read