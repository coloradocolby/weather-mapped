import React from "react";

export default (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    e.persist();
    props.getCoordinates(e.target.value);
  };

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search weather by location..."
          onChange={handleChange}
          autoFocus
        />
      </form>
    </div>
  );
};
