import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import "./app.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SalesList from "./pages/salesList/SalesList";
import Sales from "./pages/sales/Sales";
function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/sales">
              <SalesList />
            </Route>
            <Route path="/sales/:salesId">
              <Sales />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
