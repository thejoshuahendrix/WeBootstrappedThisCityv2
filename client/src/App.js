import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/AppNavBar";
import { Provider } from "react-redux";
import store from "./store";
import AppNavBar from "./components/AppNavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ItemModal from "./components/ItemModal";
import PostList from "./components/PostList";
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar></AppNavBar>

        <Container>
          <ItemModal />
          <PostList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
