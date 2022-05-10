import "./App.css";
import { useSelector } from "react-redux";
import CounterPage from "./pages/CounterPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";

function App() {
  const loggedin = useSelector((state) => state.auth.loggedin);
  return (
    <div className="App">
      <Header />
      <LoginPage />
      {loggedin ?<CounterPage /> : null}
    </div>
  );
}

export default App;
