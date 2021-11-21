import react, { useState } from "react";

export default function Contador() {
    const [num, setNum] = useState(0);

    return (
        <div className="container">
            <button className="cont">Contador {num}</button> <br/> <br/>
            <button className="button bt1" onClick={() => setNum(num + 2)}>Somar</button>
            <button className="button bt2" onClick={() => setNum(num - 1)}>Subtrair</button>
        </div>
    );
}