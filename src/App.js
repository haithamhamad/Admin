import "./styles.css";
import { Route, Routes} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import NewUsers from './NewUsers'

function App() {

  return (

      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Dashboard" element={<Dashboard/>} />
           < Route path="NewUsers" element={<NewUsers/>} />

        </Routes>

      </div>

  );
}

export default App;
