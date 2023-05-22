import React, { useState } from "react";

import "./Contato.css";

function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    function enviarFormulario(event) {
        event.preventDefault();

        console.log("Formulário enviado");

        const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

        const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; // número do WhatsApp para o qual a mensagem será enviada

        const linkWhatsapp = `https://api.whatsapp.com/send/?phone=${numeroWhatsApp}&text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsapp, '_blank');
    }

    function mascaraTelefone(event) {
        const texto = event.target.value;
        const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);
    
        let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    
        if (textoApenasNumeros.length < 11) {
            telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        }
    
        setTelefone(telefoneFormatado);
    }


    return (
        <main>
          <form onSubmit={enviarFormulario}>

            <fieldset>
                <label htmlFor="input-nome">Nome</label>
                <input
                    type="text"
                    name="input-nome"
                    id="input-nome"
                    required
                    minLength="2"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />
            </fieldset>

            <fieldset>
                <label htmlFor="input-email">E-mail</label>
                <input
                    type="email"
                    name="input-email"
                    id="input-email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </fieldset>

            <fieldset>
                <label htmlFor="input-tel">Telefone</label>
                <input
                    type="tel"
                    name="input-tel"
                    id="input-tel"
                    placeholder="(99) 99999-9999"
                    required
                    pattern="^\(\d{2}\) \d{5}-\d{4}$"
                    maxLength="15"
                    value={telefone}
                    onChange={mascaraTelefone}
                />
            </fieldset>

            <fieldset>
                <label htmlFor="input-msg">Mensagem</label>
                <textarea
                    name="input-msg"
                    id="input-msg"
                    cols="30"
                    rows="10"
                    value={mensagem}
                    onChange={(event) => setMensagem(event.target.value)}
                ></textarea>
            </fieldset>

            <center>
                <input type="submit" value="ENVIAR" className="button" />
            </center>

        </form>

      <section> 
    <h2>Contato</h2>
    <p>Telefone: (81) 9 9999-0763<br></br>
    E-mail: matheus.miranda@hotmail.com<br></br>
    Github: <a target = "_blank" href = "https://github.com/matheusmirandalacerda">github.com/matheusmirandalacerda</a><br></br>
    LINKEDIN: <a target = "_blank" href = "https://www.linkedin.com/in/matheus-miranda-lacerda-93b7a61b7/">linkedin.com/in/matheus-miranda-lacerda-93b7a61b7</a></p>
    </section>
    </main>

    
  );

}

export default Contato;
