import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    const updateItem = () => {
            axios.put(`/item/${itemId}`, {isBought: itemStatus.isBought})
        .then(dbResponse => {
            console.log('Axios Put successful update', dbResponse);
        })
        .catch(error => {
            console.log('Axios PUT unsuccessful update', error);
        });
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
