import React from "react";
import ThemeOn from '../../assets/images/themeOn.svg'
import ThemeOff from '../../assets/images/themeOff.svg'
import {IconeFilter } from "../UI";

const btnClaro = <IconeFilter src={ThemeOn} alt="Tema Claro" />
const btnEscuro = <IconeFilter src={ThemeOff} alt="Tema Escuro" />

export default ({tema})=> (tema ? btnClaro: btnEscuro)