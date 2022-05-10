import { useState } from "react";
import "./App.scss";

function App() {
  const [name, setName] = useState(``);
  const [] = useState();
  return (
    <>
      <div className="App">
        <h2>Update the page based on text typed into input fields</h2>
        <div className="formdata">
          <div className="name">{name}</div>
        </div>
        <form>
          <div className="row">
            <div className="label">Name </div>
            <div className="data">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
