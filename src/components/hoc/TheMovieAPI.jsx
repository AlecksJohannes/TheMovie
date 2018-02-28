import React, { Component } from 'react';

function withResult(WrappedComponent) {

  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: []
      }
    }

    componentDidMount() {
      //Test Movies
      this.setState({
        movies: [{name: 'Kungfu Panda'}, {name: 'Kill Bill'}]
      })
    }

    render() {
      return (
        <WrappedComponent movies={this.state.movies} />
      );
    }
  }
}

export { withResult };
