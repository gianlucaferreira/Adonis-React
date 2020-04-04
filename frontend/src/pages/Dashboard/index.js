import React, { useState, useEffect } from 'react';

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
       name, value
    }, {
      headers: { "Authorization" : `Bearer ${token}` }
    })

    if (response.data) {
        window.alert(`${response.data.message}`)
    }

    setName('');
    setValue('');
  }

  const [collaborators, setCollaborator] = useState([]);

    useEffect(() => {
        async function listCollaborators() {
            const token = localStorage.getItem('token');

            const response = await api.get('/app', {
                headers: { "Authorization" : `Bearer ${token}` }
            });
            
            setCollaborator(response.data)
        } 
        listCollaborators()
    }, []);

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
        {collaborators.map(coll => (<Collaborators key={coll.id} name={coll.name} value={coll.value} id={coll.id} />))}
    </main>
  );
}
