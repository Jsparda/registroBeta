import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './Dashboard.css';

import { toast } from 'react-toastify';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  }

  useEffect(() => {
    loadData();
  }, [])

  return(
    <div style={{ marginTop: "150px", alignContent: 'center' }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>id</th>
            <th style={{textAlign:"center"}}>Nombre</th>
            <th style={{textAlign:"center"}}>Apellido</th>
            <th style={{textAlign:"center"}}>Contacto</th>
            {/* <th style={{textAlign:"center"}}>Reseña</th> */}
            <th style={{textAlign:"center"}}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { data.map((item, index) => {
            return(
              <tr key={item.id}>
                <th scope="row">{index+1}</th>
                <td>{item.nombre}</td>
                <td>{item.aPaterno}</td>
                {/* <td>{item.aMaterno}</td> */}
                <td>{item.contacto}</td>
                {/* <td>{item.resenia}</td> */}
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button className="btn btn-delete">Delete</button>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            )
          }) }
        </tbody>
      </table>
      <Link to="/addContact">
        <button className="btn btn-contact" style={{alignContent: 'center'}}>Add Contact</button>
      </Link>
    </div>
  )
}

export default Dashboard;