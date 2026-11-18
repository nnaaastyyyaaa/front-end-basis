import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import GetStarted from "./components/GetStarted";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import { ModalProvider } from "./context/Modal";
import Modal from "./components/Modal";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <Header />
      <GetStarted />
      <Stats />
      <HowItWorks />
      <Services />
      <Testimonials />
      <Blog />
      <Modal />
    </ModalProvider>
  </StrictMode>,
);
