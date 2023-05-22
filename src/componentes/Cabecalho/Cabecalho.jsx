import React from "react";
import "./Cabecalho.css";
import MatheusMiranda from "../../assets/Matheus_Miranda_Lacerda.jpeg";

function Cabecalho() {
  return (
    <header>
      <img src={MatheusMiranda} alt="Foto de Matheus" />
      <h1 id="nome-perfil">Matheus Miranda Lacerda</h1>
    </header>
  );
}

export default Cabecalho;
