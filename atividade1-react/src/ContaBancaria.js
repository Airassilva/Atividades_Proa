import React, { useState } from "react";

const ContaBancaria = (props) => {
    const[saldo, setSaldo] = useState(1000)

    const aumentaSaldo = () => {
        setSaldo(saldo+1000)
    }
    return <>
        <h1>Meu saldo é {saldo}</h1>
        <button className="aumento" onClick={aumentaSaldo}>Aumentar</button></>
}

export default ContaBancaria;