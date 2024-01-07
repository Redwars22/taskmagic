import '../style/ui.css';

export default function Header({ toggleFormVisible, appLogo, appTitle, background, color }) {
    return <header style={{
        backgroundColor: background,
        color: color,
    }}>
        <div style={{
            display: "flex",
            gap: "10px",
            alignItems: "baseline",
            marginTop: "-25px"
        }}>
            <i className={appLogo} style={{
            fontSize: "25px"
        }}></i>
            <h1>{appTitle}</h1>
        </div>
        <button className={"ui button"} onClick={() => toggleFormVisible()}>
            <i className="icon plus"></i>
            Novo
        </button>
    </header>
}