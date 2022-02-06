import './App.css';
import Post from './components/typicodeApi';
import User from "./components/user";
import Table from "./components/table/table";
import Home from "./components/customHook/customHookFile";
import { Cont } from "./components/contextApi/useContext";

const data = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

const columns = [{ name: "name" }, { username: "username" }, { email: "email" }, { phone: "phone number" }, { button: "button" }];

function App() {

  return (
    <div className="app">
      <User />
      <Post />
      <Table data={data} columns={columns} />
      <Home />
      <Cont />
    </div>
  );
}

export default App;
