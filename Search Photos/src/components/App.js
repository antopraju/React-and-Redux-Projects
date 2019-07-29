import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import ImageList from './ImageList'


class App extends React.Component{


     state = {images : []};

     formSubmitted = async (term) =>{

         const response = await axios.get('https://api.unsplash.com/search/photos', {

            params : {
                query : term
            },
           headers : {
               Authorization : 'Client-ID 3005600e9ac461d6e61fb3055c66397edb930c333a827e13cd87148b822c3147'
           }
        });

         this.setState({images : response.data.results});
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop : '15px' }}>
                <SearchBar onFormSubmit={this.formSubmitted}/>
                <ImageList imagesList = {this.state.images}></ImageList>
            </div>
        );
    }

}

export default App;

