import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
