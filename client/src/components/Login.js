import React, { useState } from "react";
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export default function Login(props) {
  const client = useApolloClient();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem("token", login);
      client.writeData({ data: { isLoggedIn: true }});
    }
  });

  const onSubmit = () => {
    props.history.push("/");
  }

  return (
    <div>
      <b>Login</b>
      <form>
        Username: 
        <input value={username} onChange={e => setUsername(e.target.value)} type="text" />
        <br />
        <br />
        Password: 
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
        <br />
        <br />
        <button type="submit" onClick={onSubmit}>login</button>
      </form>
    </div>
  )
}
