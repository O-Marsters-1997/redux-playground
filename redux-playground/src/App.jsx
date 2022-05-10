import "./App.css";
// import CounterPage from "./pages/CounterPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <CounterPage/> */}
      <LoginPage/>
    </div>
  );
}

export default App;
