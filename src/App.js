import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/userList";
import UserForm from "./components/Userform";

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;