import { Home } from "./components/Home";
import {Navbar} from "./components/Navbar"
function App() {
  return (
    <div className="App" >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

//popular =  https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=2
//query = https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25