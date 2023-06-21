import { useState } from "react";

export function ToDoForm({ addTodo }) {
    const [newItem, setNewItem] = useState(""); // Creo un estado para cada item

    // Funcion que agrega items a la lista al hacer click en el boton add
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem === "") return;
        addTodo(newItem);
        setNewItem("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="new-item-form"
        >
            <div className="form-row">
                <label htmlFor="item">New item</label>
                <input 
                    value={newItem} 
                    onChange={(e) => setNewItem(e.target.value)} 
                    type="text" 
                    id="item" 
                />
            </div>
            <button className="btn">Add</button>
        </form>
    );
};