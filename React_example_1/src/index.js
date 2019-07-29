// Import React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component

const App = function() {

    const buttonText = {text : 'Click Me'};

    return(
        <div>
            <div>Hi Anto!</div>
            <label>Enter Name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor : 'white', color : 'red'}}>
                {buttonText.text}
            </button>
        </div>
    );
};

// Take the react component and ashow it on the screen

ReactDOM.render(
    <App />, document.querySelector('#root')
);
