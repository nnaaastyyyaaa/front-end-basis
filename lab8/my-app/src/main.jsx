import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import GetStarted from "./components/GetStarted";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <GetStarted />
    <Stats />
    <HowItWorks />
  </StrictMode>,
);
