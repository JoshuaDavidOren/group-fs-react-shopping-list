import React from 'react';
import {useState} from 'react';


function AddForm({addItem}) {

    const [newItem, setNewItem] = useState({
        name: '',
        quantity: 0,
        unit: ''
    });
// need some logic here

    addItem(newItem);

    return (
        <main>
            <p>Under Construction...</p>
            <form onSubmit={addItem} />
            <input value={newItem.name} onChange={(evt) => setNewItem(evt.target.value)} />
            <input value={newItem.quantity} onChange={(evt) => setNewItem(evt.target.value)} />
            <input value={newItem.unit} onChange={(evt) => setNewItem(evt.target.value)} />
            <button type='submit'>Add Item</button>
        </main>
    )
}

export default AddForm;