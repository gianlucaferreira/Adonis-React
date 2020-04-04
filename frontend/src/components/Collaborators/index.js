import React, { useEffect, useState } from 'react';

import '../Collaborators/style.css';

export default function Collaborators({ id, name, value }) {
    async function handleDelete(id) {
        
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
            <button className="detete" onClick={() => handleDelete(id)}>DELETAR</button>
        </aside> 
    </>
  );
}
