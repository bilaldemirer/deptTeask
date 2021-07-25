import axios from 'axios';

export default function getCase() {
  return axios.get('http://localhost:3000/cases');
}
