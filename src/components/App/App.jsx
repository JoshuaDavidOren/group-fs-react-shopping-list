import React from 'react';
import { useState, useEffect } from 'react';
import ShoppingList from '/shoppingList' 
import Header from '../Header/Header.jsx'
import './App.css';

function App() {
<<<<<<< HEAD

    const updateItem = () => {
            axios.put(`/item/${itemId}`, {isBought: itemStatus.isBought})
        .then(dbResponse => {
            console.log('Axios Put successful update', dbResponse);
        })
        .catch(error => {
            console.log('Axios PUT unsuccessful update', error);
        });
    }
=======
    let [shoppingList, setShoppingList] = useState([]); 

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
    };
    const addItem = () => {
        axios.post('/item', {name: newItem.name, quantity: newItem.quantity, unit: newItem.unit, isBought: false})
        .then (res => {
            // clear inputs
            getGroceryList();
        })
        .catch(error => {
            console.log(error);
        })
    };
    const deleteList = () => {
        axios.delete('/')
        .then(response => {
            getGroceryList();
        })
        .catch(err => {
            console.log('error deleting list app.jsx', err);
        })
    };
    const deleteItem = () => {
        axios.delete('/item', {item: id})
        .then(response => {
            getGroceryList();
        })
        .catch(err => {
            console.log('error deleting item app.jsx', err);
        })
    };

>>>>>>> d454250a2b82712dbeb0fc517381a9b2fda6e0e2


    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingList list={shoppingList} />
            </main>
        </div>
    );
};

export default App;
