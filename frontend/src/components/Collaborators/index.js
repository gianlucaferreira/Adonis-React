import React from 'react';

import '../Collaborators/style.css';

import api from '../../services/api';

export default function Collaborators({ id, name, value }) {


    async function handleDelete(id) {
        await api.delete(`/app/${id}`);
    }

  return ( 
      <>
        <aside>
            <ul>
                <li>
                    <strong>{name}</strong>
                    <span>{value}</span> 
                </li>
            </ul>
            <button onClick={() => handleDelete(id)}>DELETAR</button>
        </aside> 
    </>
  );
}
