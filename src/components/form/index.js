import React, { useState, useEffect } from "react";

const Form = (props) => {
  const [properties, setProperties] = useState({
    bg: "white",
    text: "black",
    fontwt: 400,
    fontsize: 100,
  });

  useEffect(() => {
    props.update(properties);
  }, [properties]);

  
  return (
    <div
      className="ui inverted container segment"
      style={{
        height: "100vh",
      }}
    >
      <div
        className="ui massive center aligned header"
        style={{ fontSize: "5rem" }}
      >
        Form
      </div>
      <div className="ui form inverted">
        <div className="ui field">
          <label>Background Color</label>
          <input
            type="text"
            value={properties.bg}
            onChange={(event) =>
              setProperties({ ...properties, bg: event.target.value })
            }
            placeholder="white"
          />
        </div>
        <div className="ui field">
          <label>Color</label>
          <input
            type="text"
            value={properties.text}
            onChange={(event) => {
              setProperties({ ...properties, text: event.target.value });
            }}
            placeholder="black"
          />
        </div>
        <div className="ui field">
          <label>Font Size</label>
          <input
            type="number"
            placeholder="100"
            value={properties.fontsize}
            onChange={(event) => {
              setProperties({ ...properties, fontsize: event.target.value });
            }}
          />
        </div>
        <div className="ui field">
          <label>Font Weight</label>
          <input
            type="number"
            placeholder="400"
            value={properties.fontwt}
            onChange={(event) => {
              setProperties({ ...properties, fontwt: event.target.value });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
