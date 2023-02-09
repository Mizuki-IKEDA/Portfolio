import axios from 'axios';
import { FETCH_PROJECTS } from '../actions/projects';

const ajax = (store) => (next) => (action) => {
    if (action.type === FETCH_PROJECTS) {
      axios.get('http://localhost:3001/projects')
        .then((response) => {
          // en cas de réussite de la requête
          console.log((response.data));
        })
        .catch((error) => {
          // en cas d’échec de la requête
          console.log(error);
          alert('Erreur de chargement, veuillez réessayer');
        });
    }
    next(action);
  };
  
export default ajax;