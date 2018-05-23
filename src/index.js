import React from 'react';
import ReactDOM from 'react-dom';


import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB30VGwFTy3Swu3EFtqZHJVuSTG79ne_F8';

//Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//Take this component's generated HTMl and put it 
//On de Pag (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));