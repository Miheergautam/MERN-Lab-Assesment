import React, { useState } from "react";

export default function Signup() {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    const response = await fetch("http://localhost:3000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    const result = await response.json();
    console.log(result);
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <h1>Signup</h1>
      <div>
        <h1>Username</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
      </div>
      <div>
        <h1>Email</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div>
        <h1>Password</h1>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already Registered?
        <a href="/">Login</a>
      </p>
    </div>
  );
}
