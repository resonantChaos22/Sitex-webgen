import React, { useState } from "react";

const Output = (props) => {
  
  return (
    <div
      className="ui container"
      style={{
        backgroundColor: `${props.bg}`,
        color: `${props.text}`,
        fontSize: `${props.fontsize}px`,
        fontWeight: `${props.fontwt}`,
        paddingTop: '40vh',
        paddingLeft: '10vw'
      }}
    >
      Output
    </div>
  );
};

export default Output;
