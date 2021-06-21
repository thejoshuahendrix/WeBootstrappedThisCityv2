import React from "react";

import { Component } from "react";
import store from "../store";
import { loadUser } from "../actions/authActions";

class Posts extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Posts;
