import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// index.htmlのidを指定してAppコンポーネント内のJSXを反映する
ReactDom.render(<App />, document.getElementById("root"));
