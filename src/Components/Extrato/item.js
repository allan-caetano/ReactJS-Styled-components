import React from "react";
import styled from 'styled-components';

export const Lista = ({ lista, preco, data, from }) => {

const ListaExtrato = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 5px;
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
    padding: 10px;
    color: ${({theme})=>theme.text};
`

const ListInterna = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
`
    return (
        <ListaExtrato>
            <h4>{lista}</h4>
            <ListInterna>
                <span>{preco} R$</span>
                <span>{from}</span>
                <span>{data}</span>
            </ListInterna>
        </ListaExtrato>
    )
}













