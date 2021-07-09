import React from 'react';
import { useState, useEffect } from 'react';
import ShoppingList from '/shoppingList' 
import Header from '../Header/Header.jsx'
import './App.css';

function App() {
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
