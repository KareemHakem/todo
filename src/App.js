import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Card, IconButton } from "@material-ui/core";
import { useState } from "react";
import cuid from "cuid";
import { QRCode } from "react-qr-svg";
import './App.css'

export default function ToDo() {
  const [id, setId] = useState("");
  const [name, SetName] = useState("");
  const [date, setDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [image, setImage] = useState("");
  const [userData, setUserData] = useState(users);

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleName = (e) => {
    SetName(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleNationality = (e) => {
    setNationality(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = {
      id,
      name,
      date,
      nationality,
      image,
    };

    setUserData([...userData, value]);
    setId("");
    SetName("");
    setDate("");
    setNationality("");
    setImage("");
  };


  const handleClick = () => {
    setId(cuid());
  };

  const handleDelate = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
  };


  const handleUpdate = (user) => {
    setId(user.id);
    SetName(user.name);
    setDate(user.date);
    setNationality(user.nationality);
    setImage(user.image);
 
    setUserData(userData.filter((user) => user.id !== id));
  };

  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'

  return (
    <div style={{marginTop: 100}}>
      <form onSubmit={(e) => handleSubmit(e)} className="flex_col">
        <div>
          <input
            onChange={(e) => handleId(e)}
            type="text"
            placeholder="ID"
            className="input"
            value={id}
            style={{ width: 360, marginLeft: 15 }}
          />
          <IconButton onClick={handleClick}>
            <AddCircleOutlineIcon style={{ color: "green" }} />
          </IconButton>
        </div>
        <div style={{width: 400}}>
        <input
          onChange={(e) => handleName(e)}
          type="text"
          value={name}
          placeholder="Name"
          className="input"
        />
        <input
          onChange={(e) => handleDate(e)}
          type="date"
          value={date}
          placeholder="Born In"
          className="input"
        />
        <input
          onChange={(e) => handleNationality(e)}
          type="text"
          value={nationality}
          placeholder="Nationality"
          className="input"
        />
        <input
          onChange={(e) => handleImage(e)}
          value={image}
          placeholder="image(only URL)"
          className="input"
        />

        <button style={{ marginTop: 30 }} type="submit" className="btn_primary">
          SUBMIT
        </button>
          </div>
        
      </form>

      <div style={{ marginTop: 60, width: "80%", marginLeft: "10%" }}>
        <h1
          className="main_title"
          style={{ textAlign: "center", marginBottom: 50, marginTop: 50 }}
        >
          Receive your ID
        </h1>
        <div style={{ flexWrap: "wrap" }} className="flex">
          {userData.map((user) => (
            <Card style={{ width: 350, margin: 20 }}>
              <img src={user.image || placeholderImage} alt="images" className="img" />
              <div style={{ marginTop: 6 }} className="flex">
                <h2 className="color"> Id : </h2>
                <h3>{user.id}</h3>
              </div>
              <div style={{ marginTop: 6 }} className="flex">
                <h2 className="color">Name :</h2>
                <h3>{user.name}</h3>
              </div>
              <div style={{ marginTop: 6 }} className="flex">
                <h2 className="color">Born In :</h2>
                <h3>{user.date}</h3>
              </div>
              <div style={{ marginTop: 6 }} className="flex">
                <h2 className="color">Nationality :</h2>
                <h3>{user.nationality}</h3>
              </div>
              <div className="flex">
                <div>
                  <QRCode
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="Q"
                    style={{ marginLeft: 5, marginTop: 5, width: 60 }}
                    value={user.id}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={() => handleUpdate(user)}
                    style={{
                      height: 40,
                      width: 100,
                      backgroundColor: "#027373",
                      marginTop: 20,
                      borderRadius: 20,
                      outline: "none",
                      border: "none",
                      color: "#fff",
                    }}
                  >
                    update
                  </button>
                </div>
                <div>
                  <IconButton
                    style={{ marginTop:20, marginLeft: 20}}
                    onClick={() => handleDelate(user.id)}
                  >
                    <DeleteIcon style={{ color: "red" }} />
                  </IconButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const users = [
  {
    id: "2037809850394853", //FIXME:
    image: "https://wallpapercave.com/wp/wp7162705.jpg",
    name: "sera ahmed",
    nationality: "egypt",
    date: "12/1/1998",
  },
];
