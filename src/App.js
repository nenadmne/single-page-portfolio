import { Fragment } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="w-full flex bg-lighterBlack clip-border">
        <div className="w-full flex flex-col items-center justify-center bg-darkPurple clip-border">
          <Main />
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
