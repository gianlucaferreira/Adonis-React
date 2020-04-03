import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export default function Collaborators() {
    const [collaborator, setCollaborator] = useState([]);

    // useEffect(() => {
    //     async function  listCollaborators() {
    //         const token = localStorage.getItem('token')

    //         const response = await api.get('/app', {
    //             headers: token, 
    //             params: token
    //         });

    //         return response.data;
    //     }
    //     listCollaborators()
    // }, [collaborator])

  return (
      <>
        <ul>
            <li>
                <strong>{collaborator.name}</strong>
                <span>{collaborator.email}</span>
            </li>
        </ul>
        <button className="detete">DELETAR</button>
    </>
  );
}
