import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { Component } from "react";
import PropTypes from "prop-types";

class RegisterModal extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    message: null,
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  componentDidUpdate(prevProps) {
      const {error, isAuthenticated} = this.props;
      if(error !== prevProps.error) {
          if(error.id === 'REGISTER_FAIL') {
              this.setState({ message: error.message.message});
          }else {
              this.setState({message: null})
          }
      }

      if(this.state.modal) {
          if(isAuthenticated){
              this.toggle();
          }
      }
  }

  toggle = () => {
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    //User object creation
    const newUser = {
      name,
      email,
      password,
    };
    this.props.register(newUser);

    //Close Modal
  };
  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href="#">
          Register
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
              {this.state.message ? <Alert color="danger">{this.state.message}</Alert>: null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  className="mb-3"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  onChange={this.onChange}
                ></Input>

                <Label for="email">Email</Label>
                <Input
                  className="mb-3"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  onChange={this.onChange}
                ></Input>

                <Label for="password">Password</Label>
                <Input
                  className="mb-3"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={this.onChange}
                ></Input>

                <Button color="success" style={{ marginTop: "2rem" }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});
export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);
