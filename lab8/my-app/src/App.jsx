import { useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { ModalProvider } from "./context/Modal";
import { useRoute } from "./router";
import Home from "./pages/Home";
import InnerPage from "./pages/InnerPage";
import Contact from "./pages/Contact";
import SubPage from "./pages/SubPage";

const subPages = {
  "/page-one": "Page one",
  "/page-two": "Page two",
  "/page-three": "Page three",
};

function App() {
  const route = useRoute();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  let page;
  if (route === "/") page = <Home />;
  else if (route === "/inner") page = <InnerPage />;
  else if (route === "/contact") page = <Contact />;
  else if (subPages[route]) page = <SubPage title={subPages[route]} />;
  else page = <SubPage title="Page not found" notFound />;

  return (
    <ModalProvider>
      <Header route={route} />
      {page}
      <Modal />
    </ModalProvider>
  );
}

export default App;
