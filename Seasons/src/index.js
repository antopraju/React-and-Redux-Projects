import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

class App extends React.Component{


    state = {lat : null};

    componentDidMount() {
        console.log("Component is seen on the screen");

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log("position got");
                this.setState({ lat: position.coords.latitude});
            },
            err => console.log(err)
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component was updated!");
    }

    render(){

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request" />;
    }
}

ReactDOM.render(
    <App/>, document.querySelector("#root")
);