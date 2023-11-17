import { Fragment } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Certificates from "./components/Certificates/Certificates";

export default function App() {
  return (
    <Fragment>
      <Header />
      <div className="w-full flex flex-col bg-lighterBlack clip-border-top">
        <div className="w-full flex flex-col items-center justify-center bg-darkPurple">
          <Main />
          <Certificates />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
