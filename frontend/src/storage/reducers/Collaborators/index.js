import { useState } from 'react';

const [collaborators, setCollaborators] = useState([]);

const initialState = {
    collaborators
};

function collaborators(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COLL':
            
            break;
    
        case 'RM_COLL' :
            break;
        
        default
    }
}