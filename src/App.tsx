import "./App.css";
import Navbar from "./components/navbar";
import Clock from "./components/clock";
import Weather from "./components/weather";
import Anime from "./components/anime";
import Bookmarks from "./components/bookmarks";
import Apps from "./components/apps";
import Footer from "./components/footer";

function App() {
  return (
    <div data-theme="mocha" className="min-h-screen bg-base">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center px-15">
        <div className="flex justify-between items-center gap-8 my-5">
          <div>
            <Clock />
          </div>
          <div>
            <Weather />
          </div>
        </div>
        <div className="flex justify-around items-center gap-8">
          <div>
            <Anime />
          </div>
          <div>
            <Bookmarks />
          </div>
          <div>
            <Apps />
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
