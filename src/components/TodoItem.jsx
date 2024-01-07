export default function TodoItem({ completed, id, title, toggleTodo, editTodo, deleteTodo }) {
    return (
        <li key={id} style={{
            padding: "10px",
            listStyle: "none",
            display: "flex",
            gap: "10px"
        }}>
            <label htmlFor="" style={{
                display: "flex",
                gap: "10px",
                marginRight: "auto",
                alignItems: "center",
                textDecoration: completed ? "line-through" : "",
                fontSize: "1rem",
                fontWeight: "bold"
            }}>
                <input type="checkbox" className="ui checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} />
                <span style={{
                    color: completed ? "#3b83c0" : "",
                }}>{title}</span>
            </label>
            <button className="ui button blue" onClick={() => {
                editTodo(id)
            }}>
                <i className="edit icon"></i>
                Editar
            </button>
            <button className='ui youtube button' onClick={() => {
                deleteTodo(id)
            }}>
                <i className="trash alternate icon"></i>
                Deletar
            </button>
        </li>)
}