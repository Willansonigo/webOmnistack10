import React from 'react';
// Toda vez que for trabalhar com HTML dentro do Javascrip precisa importar o "React"

function Header(props) { // Parâmetro "props" são todas as propriedades repassadas para esse componente.
    return <h1>{props.title}</h1> // É colocado entre os parâmetros para ele entender o "props" e não tudo como texto.
  }

export default Header;