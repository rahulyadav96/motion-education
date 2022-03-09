import { Home } from "./components/Home";
import {Navbar} from "./components/Navbar";
import {Login} from "./components/Login"
function App() {
  const toggle = ()=>{
    var blur = document.getElementById("main");
    blur.classList.toggle('active')
    var popup = document.getElementById("popup");
    popup.classList.toggle('active')
}
  return (
    <div className="App" >
      <div id="main">
      <Navbar toggle={toggle} />
      <Home />

      </div>
      <div id="popup">
          <Login toggle={toggle} />
      </div>
    </div>
  );
}

export default App;

//popular =  https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=2
//query = https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25