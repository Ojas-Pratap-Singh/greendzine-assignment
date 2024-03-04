import React, { useEffect, useState } from "react";
import userlogo from "../../assest/moptro.png";
import "./styles.css";
function UserContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [Data, setData] = useState([]);

  const data = [
    {
      id: 1,
      name: "John Doe",
      dob: "1990-05-15",
      role: "software engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      dob: "1985-10-20",
      role: "data analyst",
    },
    {
      id: 3,
      name: "Michael Johnson",
      dob: "1993-03-08",
      role: "project manager",
    },
    {
      id: 4,
      name: "Emily Brown",
      dob: "1988-12-25",
      role: "software engineer",
    },
    {
      id: 5,
      name: "Daniel Wilson",
      dob: "1979-08-30",
      role: "UX designer",
    },
    {
      id: 6,
      name: "Sophia Lee",
      dob: "1995-06-10",
      role: "software engineer",
    },
    {
      id: 7,
      name: "James Taylor",
      dob: "1983-09-18",
      role: "data scientist",
    },
    {
      id: 8,
      name: "Olivia Martinez",
      dob: "1992-02-14",
      role: "software engineer",
    },
    {
      id: 9,
      name: "Ethan Anderson",
      dob: "1975-11-05",
      role: "IT specialist",
    },
    {
      id: 10,
      name: "Ava Harris",
      dob: "1982-07-22",
      role: "product manager",
    },
    {
      id: 11,
      name: "Noah Clark",
      dob: "1998-04-03",
      role: "software engineer",
    },
    {
      id: 12,
      name: "Isabella Young",
      dob: "1991-01-12",
      role: "web developer",
    },
    {
      id: 13,
      name: "William Hernandez",
      dob: "1986-11-30",
      role: "software engineer",
    },
    {
      id: 14,
      name: "Mia King",
      dob: "1980-03-17",
      role: "graphic designer",
    },
    {
      id: 15,
      name: "Liam Garcia",
      dob: "1996-09-07",
      role: "software engineer",
    },
    {
      id: 16,
      name: "Charlotte Lopez",
      dob: "1989-07-01",
      role: "network administrator",
    },
    {
      id: 17,
      name: "Benjamin Adams",
      dob: "1977-05-28",
      role: "business analyst",
    },
    {
      id: 18,
      name: "Amelia Hall",
      dob: "1984-12-10",
      role: "software engineer",
    },
    {
      id: 19,
      name: "Mason Rogers",
      dob: "1994-08-19",
      role: "QA engineer",
    },
    {
      id: 20,
      name: "Evelyn Wood",
      dob: "1987-02-26",
      role: "software engineer",
    },
  ];

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }
  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(filteredData);
  }, [searchQuery]);
  return (
    <div className="user-container">
      <div className="img">
        <img src={userlogo} />
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search with name"
          value={searchQuery}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="card">
        {searchQuery
          ? Data.map((item, i) => {
              return (
                <div className="item">
                  <table>
                    <tr>
                      <td>EMP ID :</td>
                      <td>{item.id}</td>
                    </tr>
                    <tr>
                      <td>Name :</td>
                      <td>{item.name}</td>
                    </tr>
                    <tr>
                      <td>DOB :</td>
                      <td>{item.dob}</td>
                    </tr>
                    <tr>
                      <td>Role :</td>
                      <td>{item.role}</td>
                    </tr>
                  </table>
                </div>
              );
            })
          : data.map((item, i) => {
              return (
                <div className="item">
                  <table>
                    <tr>
                      <td>EMP ID :</td>
                      <td>{item.id}</td>
                    </tr>
                    <tr>
                      <td>Name :</td>
                      <td>{item.name}</td>
                    </tr>
                    <tr>
                      <td>DOB :</td>
                      <td>{item.dob}</td>
                    </tr>
                    <tr>
                      <td>Role :</td>
                      <td>{item.role}</td>
                    </tr>
                  </table>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default UserContent;
