import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function change(event) {
    setName(event.target.value);
  }

  function click(event) {
    setHeadingText(name);
    event.preventDefault(); //handlingten sonra sayfanın refreshini engeller
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form action="" onSubmit={click}>
        <input
          onChange={change}
          value={name}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
