import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import AddForm from '../AddForm/AddForm';
import ShoppingList from '../ShoppingList/ShoppingList';

function App() {

    let [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        getGroceryList();
    }, []);

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
            console.log('SUCCESS GETting from DB', response.data);
            setShoppingList(response.data);
        })
        .catch(error => {
            console.log('ERROR GETting from DB', error);
        })
    };
    const addItem = (newItem) => {
        console.log(newItem);
        axios.post('/list', (newItem))
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
            <AddForm addItem={addItem} />
            <ShoppingList shoppingList={shoppingList} />
            </main>
        </div>
    );
};

export default App;
