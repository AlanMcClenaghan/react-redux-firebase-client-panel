import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "666",
        firstName: "Jim",
        lastName: "McDonald",
        email: "jim@gmail.com",
        phone: "555-555-5555",
        balance: "30.33"
      },
      {
        id: "777",
        firstName: "Matthew",
        lastName: "McClenaghan",
        email: "matt@gmail.com",
        phone: "555-555-5556",
        balance: "100"
      },
      {
        id: "888",
        firstName: "Lucy",
        lastName: "McClenaghan",
        email: "luce@gmail.com",
        phone: "555-555-5557",
        balance: "10"
      }
    ];

    if (clients) {
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-users" />
              Clients
            </h2>
          </div>
          <div className="col-md-6" />
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>£{parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
