import React, { useState } from "react";
import styled from 'styled-components'
import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { Icone, Box, Botao, Saldo, Detalhe, DivCentral, IconeFilter } from "../UI/index";

const IconeMargin = styled(Icone)`
  margin-top: "2px" 
`
const ContaAtiva = styled.h2`
color: ${({theme}) => theme.text }

`
const Conta = ({ props }) => {
  const [toggleState, setUntoggle] = useState(false);

  const toggleHandler = () => {
    setUntoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <ContaAtiva>{props}</ContaAtiva>
      <DivCentral >
        Saldo disponível{" "}
        <span>
          <IconeFilter src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo className="saldo">
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </DivCentral>

      <Botao onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
