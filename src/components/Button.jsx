import React from "react";

// eslint-disable-next-line react/prop-types
export default function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

React.Fragment;
