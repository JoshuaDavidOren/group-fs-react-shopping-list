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

    const deleteItem = () => {
        axios.delete('/item', {item: id})
        .then(response => {
            //call GET function
        })
        .catch(err => {
            console.log('error deleting item app.jsx', err);
        })
    }
    
    const deleteList = () => {
        axios.delete('/')
        .then(response => {
            //call GET function
        })
        .catch(err => {
            console.log('error deleting list app.jsx', err);
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
