import React, { useState, useLayoutEffect } from 'react';


export default function Agendamento() {

  return (
    <>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2> Clique na imagem abaixo </h2>
          </header>
          <div className="table-wrapper">
           <a href="https://api.whatsapp.com/send?phone=5554996221164&text=Olá,%20gostaria%20de%20uma%20consulta"><img src={require('./whats.png') }  width="300" height="300"/></a>
          </div>
        </div>
      </section>
    </>
  );
      
}
