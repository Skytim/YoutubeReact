import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar';



const API_KEY = 'AIzaSyA0D_h0ouhGomC9xUTZHG_1uZ3X6aFdao0';


// Create a new Component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
//Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));