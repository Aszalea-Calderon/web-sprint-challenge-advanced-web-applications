import React, { useState } from "react";
import axios from "axios";

const INITAL_STATE = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [form, setForm] = useState(INITAL_STATE);
  const { push } = props.history;
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", form)
      .then((res) => {
        //console.log(res.data.payload)
        localStorage.setItem("token", res.data.payload);
        push("/bubble-page");
      })
      .catch((err) => {
        console.error("Our error", err);
      });
    // axios
    // .delete(`http://localhost:5000/api/colors/1`, {
    //   headers: {
    //     authorization:
    //       "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98",
    //   },
    // })
    // .then((res) => {
    //   axios
    //     .get(`http://localhost:5000/api/colors`, {
    //       headers: {
    //         authorization: "",
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     });
    //   console.log(res);
    // });
  };

  //OnChange
  const change = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={submit}>
        <label htmlFor="username">
          <input
            type="text"
            id="username"
            onChange={change}
            placeholder="Username"
            value={form.username}
          />
        </label>
        <label htmlFor="login">
          <input
            type="text"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={change}
          />
        </label>

        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
