import React from 'react';
import {useState} from 'react';


function AddForm({addItem}) {

    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState('');
    const [newItemUnit, setNewItemUnit] = useState('');
// need some logic here

    let newItemFinished = {
        name: newItemName,
        quantity: newItemQuantity,
        unit: newItemUnit
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(newItemFinished);
        addItem(newItemFinished);
        setNewItemName('');
        setNewItemQuantity('');
        setNewItemUnit('');
    }

    return (
        <>
            <p>Under Construction...</p>
            <form onSubmit={handleSubmit}>
            <input value={newItemName} onChange={(evt) => setNewItemName(evt.target.value)} />
            <input value={newItemQuantity} onChange={(evt) => setNewItemQuantity(evt.target.value)} />
            <input value={newItemUnit} onChange={(evt) => setNewItemUnit(evt.target.value)} />
            <input type='submit' value="Add Item" />
            </form>
        </>
    )
}

export default AddForm;