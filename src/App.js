import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-darkPurple">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
