import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class PostList extends Component {
  state = {};

  
  componentDidMount() {
    this.props.getItems();
  }
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { items } = this.props.item;
    const posts = items.map(({ _id, name, title, message, date }) => (
      //CSS transition for list group items so they fade
      <CSSTransition key={_id} timeout={500} classNames="fade">
        <ListGroupItem>
          <h2 style={{ backgroundColor: "#F1F1F1", padding: "10px" }}>
            {title}
          </h2>
          {user? name === user.name?
          <Button
            className="remove-btn float-right"
            color="danger"
            size="sm"
            onClick={this.onDeleteClick.bind(this, _id)}
          >
            &times;
          </Button>:"":''}
          <h6 style={{ float: "right", marginRight: "30px" }}>{name}</h6>
          <div className="wrapper" style={{ marginLeft: "50px" }}>
            <h6>{message}</h6>
            {new Date(date).toLocaleDateString()}
          </div>
        </ListGroupItem>
      </CSSTransition>
    ))
    return (
      <Container>
        <ListGroup style={{ boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, .2)" }}>
          <TransitionGroup className="shopping-list">{isAuthenticated ? posts : ''}</TransitionGroup>
        </ListGroup>
      </Container>
      
    );
  }
}

PostList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStatetoProps = (state) => ({
  item: state.item,
  auth: state.auth
});
export default connect(mapStatetoProps, { getItems, deleteItem })(PostList);
