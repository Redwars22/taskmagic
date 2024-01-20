export default function TrashbinComponent({ trash }) {
    return (<div>
        <hr />
        <h3>
            <i className="trash icon"></i>
            Lixeira</h3>
        {trash.length > 0 && <ul>
            {trash.map((item) => <li style={{
                textDecoration: "line-through"
            }}>{item.title}</li>)}
        </ul>}
        {trash.length == 0 && <strong>A lixeira está vazia</strong>}
    </div>)
}