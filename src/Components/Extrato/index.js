import React from "react";
import { Box, Botao } from "../UI";
import { extratoLista } from "../../info";
import { Lista } from "./item";
import saude from '../../assets/images/saude.svg'
import alimentacao from '../../assets/images/alimentacao.svg'
import utilidades  from '../../assets/images/utilidades.svg'
import transporte  from '../../assets/images/transporte.svg'
import outros  from '../../assets/images/outros.svg'
import styled from 'styled-components';

const Icones = styled.img`
    width: 25px;
    position: relative;
    margin-left:20px ;
    bottom: -15px;
`

export const Iconex = (tipo)=>{
    if(tipo === 'Saude'){
      return  <Icones src={saude}/>
    }if(tipo === "Restaurante"){
      return  <Icones src={alimentacao}/>
    }if(tipo === 'Utilidades'){
        return <Icones src={utilidades}/>
    }if(tipo === 'Transporte'){
        return <Icones src={transporte}/>
    }else{
        return <Icones src={outros} />
    }

}

export const Extrato = () => {

    return (
        <Box>
            {extratoLista.updates.map(itens => {
                return (
                    <>
                       {Iconex(itens.type)}
                        <Lista
                            key={itens.id}
                            lista={itens.type}
                            preco={itens.value}
                            data={itens.date}
                            from={itens.from}
                        />
                    </>
                )
            })}
            <Botao>Veja Mais</Botao>
        </Box>
    )

}