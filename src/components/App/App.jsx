import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    const getGroceryList = () => {
        axios({
            method: 'GET',
            url: '/list'
        })
        .then(response => {
            console.log('SUCCESS GETting from DB', response.data)
            // APPEND GROCERY LIST FUNCTION HERE(response.data);
        })
        .catch(error => {
            console.log('ERROR GETting from DB', error);
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
