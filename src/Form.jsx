import React from 'react';

import { NavLink } from 'react-router-dom';
import './Form.scss';


export default function Product_form_create(props) {


  return (
    <div className="containerProdFormCreate">
      <h1>Completá con tus datos</h1>
      <form>
        <div className="cont-1">
          <label className="label">Nombre completo:</label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Nombre y Apellido"
          />

          <label className="label">Empresa:</label>
          <input
            type="text"
            name="Empresa"
            autoComplete="off"
            placeholder="Nombre de la empresa"

          
           
          />

          <label className="label">Teléfono:</label>
          <input
            type="number"
            min="1"
            max="99999"
            name="Telefono"
            autoComplete="off"
            placeholder="+54 00 000 000 000"

          />

          <label className="label">Zona:</label>
          <input
            type="text"
            name="Zona"
            autoComplete="off"
            placeholder="Selecciona la zona de tu campo"/>
          


      
          <label className="label">Email:</label>
          <input
            type="text"
            name="Email"
            autoComplete="off"
            placeholder="nombre@mail.com"

          
           
          />
          


          <label className="label">Que tipo de insumo estas buscando:</label>
          <input
            type="text"
            name="Insumo"
            autoComplete="off"
            placeholder=" Insumo..."

          
           
          />
                    <label className="label">Contanos algo que nos ayude a prepararte la mejor propuesta</label>
          <input
            type="text"
            name="Propuesta"
            autoComplete="off"
            placeholder="..."

          
           
          />


          <button type="submit">Enviar</button>
        </div>
      </form>

      <NavLink to="/user/info">
        <button>Volver</button>
      </NavLink>
    </div>
  );
}