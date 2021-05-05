import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStype = {
    color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentStype}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
