import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {

  //adicionando o valor dos inputs nesses estados 
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    //definindo as mensagens de erro
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'DADOS INVÁLIDOS',
        message: 'Por favor coloque dados válidos'
      })
      return;
    }
    //convertendo enteredAge para um number, já que todo valor retornado por input é string
    if (+enteredAge < 1) {
      setError({
        title: 'IDADE INVÁLIDA',
        message: 'Por favor coloque uma idade válida (>0)'
      })
      return;
    }

    //executando os inputs como parametro de uma função que será passado via props no App.js
    props.onAddUser(enteredUsername, enteredAge);

    //Limpando os inputs
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  //função para que o a tela de erro desapareça
  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit" onConfirm={errorHandler} >Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
