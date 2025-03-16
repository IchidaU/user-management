import { BrowserRouter } from "react-router";

import { Toaster } from "./components/ui/toaster";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Router />
    </BrowserRouter>
  );
}

export default App;
