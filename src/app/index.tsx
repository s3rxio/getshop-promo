import React from "react";
import "./app.css";
import { Button } from "../shared/ui";

const App: React.FC = () => {
  return (
    <div className="box">
      <h1 className="box__heading">Hello World!</h1>

      <Button>
        OK
      </Button>
    </div>
  );
};

export default App;
