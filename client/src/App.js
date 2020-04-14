import React from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_STUDENTS = gql`
  {
    students {
      id
      firstName
      lastName
      collegeId
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_STUDENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="App">
      <React.Fragment>
        <h1>Students</h1>
        <p>revolves around 832 fictional species of collectible monsters, each having</p>
        <div className="container">
          {data &&
            data.students &&
            data.students.map((student, index) => (
              <div key={index} className="card">                
                <div className="card-body">
                  <h3>{student.firstName}</h3>
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
