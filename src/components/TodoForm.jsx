import { useState } from "react";

export function TodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();

        if(newItem === "") return;

        onSubmit(newItem);
    }

    return (
        <form onSubmit={handleSubmit} action="" className="ui form new-task-form">
            <div className="field">
                <label htmlFor="item">Adicione uma nova tarefa</label>
                <input type="text"
                    value={newItem}
                    onChange={(e) => {
                        setNewItem(e.target.value)
                    }}
                    id="item" />
            </div>
            <button className='ui youtube button'>
                <i class="plus icon"></i>
                Adicionar Nova Tarefa</button>
        </form>
    )
}