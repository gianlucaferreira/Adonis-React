import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { logout, getToken } from '../../services/auth';
import Collaborators from '../../components/Collaborators';

import './style.css';

export default function Dashboard({ history }) {

  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();

    await api.post('/app' ,  {
       name, value
    })
    setName('');
    setValue('');
  }

  const [collaborators, setCollaborator] = useState([]);

    useEffect(() => {
        async function listCollaborators() {
            const response = await api.get('/app');
            
            setCollaborator(response.data)
        } 
        listCollaborators()
    }, [collaborators]);


      function leave() {
        const token = getToken();
  
        logout(token);

        history.push('/');
      }
    

  return (
    <main>
      <section className="content">
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

        <button className="logout" onClick={leave}>SAIR</button>
    </main>
  );
}
