import React from "react";
import { HomePage } from "../pages/home";
import { DialogProvider } from "../features/dialog";

const App: React.FC = () => {
  return (
    <DialogProvider>
      <HomePage />
    </DialogProvider>
  );
};

export default App;
