import React, { useState } from 'react';

import api from '../../services/api';
import Collaborators from '../../components/Collaborators';

import './style.css';

export default function Dashboard() {

  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();

    const token = localStorage.getItem('token');

    const response = await api.post('/app' ,  {
      token, name, value
    })

    if (response.data) {
        window.alert(`${response.data.message}`)
    }

    setName('');
    setValue('');
  }

  return (
    <main>
      <section className="content">
        <h1>CADASTRE <em>COLABORADORES</em></h1>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="collaborator">NOME DO COLABORADOR*</label>
            <label htmlFor="value">VALOR QUE PODE SER DOADO</label>
            <input 
              type="text" 
              placeholder="COLABORADOR"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input  
              type="text" 
              placeholder="QUANTO PODE DOAR" 
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </div>
          <button type="submit">CADASTRAR COLABORADOR</button>
        </form>
      </section>

      <aside>
          <Collaborators />
      </aside>      
    </main>
  );
}
