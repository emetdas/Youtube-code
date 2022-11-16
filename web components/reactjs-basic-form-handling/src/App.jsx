import React, { useState } from 'react';

function App() {
  const [formData, setformData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
  });
  function inputHandler(e) {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function submit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    for (const entry of data.entries()) {
      console.log(`${entry[0]} : ${entry[1]}`);
    }
    console.log(formData);
    setformData({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      password: '',
    });
  }
  return (
    <div className="form">
      <h1 className="section-heading">Signup for Codsfli</h1>
      <form action="" onSubmit={submit}>
        <div className="input-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first-name"
            autoComplete="off"
            required
            value={formData.first_name}
            onChange={inputHandler}
          />
        </div>
        <div className="input-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last-name"
            autoComplete="off"
            required
            value={formData.last_name}
            onChange={inputHandler}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
            value={formData.email}
            onChange={inputHandler}
            pattern="(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone-number"
            autoComplete="off"
            required
            value={formData.phone}
            onChange={inputHandler}
          />
        </div>
        <div className="input-group">
          <label htmlFor="passowrd">Password</label>
          <input
            type="password"
            name="password"
            id="passowrd"
            autoComplete="off"
            required
            value={formData.password}
            onChange={inputHandler}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
