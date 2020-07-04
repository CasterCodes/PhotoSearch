import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Banner = () => {
  const [search, setSearch] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      setAlert("Please enter a search term");
    } else {
      setRedirect(true);
    }
  };

  // redirect
  if (redirect) {
    return <Redirect to={`/searched/${search}`} />;
  }

  if (alert !== null) {
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <div className='banner'>
      <div className='container'>
        <h2>Stunning free photos for you</h2>
        <p>
          All photos are from pixabay website. A great place to get free stock
          photos
        </p>
        {alert !== null && <p style={{ color: "red" }}>{alert}</p>}
        <form className='form-inline' onSubmit={handleSubmit}>
          <input
            type='text'
            value={search}
            onChange={handleChange}
            placeholder='Search for amazing photos'
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
