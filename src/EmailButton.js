import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function EmailButton(props) {
  const postData = () => {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // open the request with the verb and the url
    xhr.open("POST", "http://localhost:3002");
    // send the request
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        nome: props.nome,
        juros: props.juros,
        amortizacao: props.amortizacao,
        tai: props.tai,
        aniversario: props.aniversario,
        valorNominalRemanescente: props.valorNominalRemanescente,
      })
    );
  };

  const handleClick = (event) => {
    postData();
    console.log("Email Enviado");
  };

  return (
    <Button
      variant="contained"
      endIcon={<SendIcon />}
      onClick={(event) => handleClick()}
    >
      Enviar Email
    </Button>
  );
}
export default EmailButton;
