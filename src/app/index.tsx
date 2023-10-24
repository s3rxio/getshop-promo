import React from "react";
import { HomePage } from "@/pages/home";
import { DialogProvider } from "@/shared/providers";

const App: React.FC = () => {
  return (
    <DialogProvider>
      <HomePage />
    </DialogProvider>
  );
};

export default App;
