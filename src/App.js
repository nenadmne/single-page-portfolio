import { Fragment } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Certificates from "./components/Certificates/Certificates";

export default function App() {
  return (
    <Fragment>
      <Header />
      <div className="w-full flex bg-lighterBlack clip-border-bot">
        <div className="w-full flex flex-col items-center justify-center bg-darkPurple clip-border-bot">
          <Main />
        </div>
      </div>
      <Certificates />
      <Footer />
    </Fragment>
  );
}
