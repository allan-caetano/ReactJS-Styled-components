import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "../Components/UI/temas";
import Cabecalho from "../Components/Cabecalho";
import Container from "../Components/Container";
import { GlobalStyle } from '../Components/GlobalStyle';
import { BtnTema } from "../Components/UI";
import Switcher from "../Components/Switcher";

function App() {
const [tema, setTema] = useState(true)

const toggle = ()=>{
  setTema((tema)=> !tema)
}

  return (
    <ThemeProvider theme={tema? temaClaro: temaEscuro}>
      < GlobalStyle />
      <BtnTema onClick={toggle}>
        <Switcher tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>


  );
}

export default App;
