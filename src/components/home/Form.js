import React, { Component} from 'react';
import { connect } from "react-redux";
import { addNewMovie } from '../../redux/actionsCreator/actions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addNewMovie
  }, dispatch)
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log(this.props.store)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}> Add me </button>
      </div>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
