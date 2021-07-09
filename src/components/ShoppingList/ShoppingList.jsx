function ShoppingList({shoppingList}) {
    return(
        <>
        <h2>Shopping List</h2>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Units</th>
            </tr>
            </thead>
            <tbody>
            {shoppingList.map(item => (
                <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    )
}

export default ShoppingList