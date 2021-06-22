import firebase from 'firebase/app';

// firebase recomenda realizar a importação de cada serviço utilizado (firebase)
import 'firebase/auth';
import 'firebase/database';


// Configuração de Variáveis Ambiente, .env.local => esse arquivo não sobe no github
// no arquivo .env.local está todas as configurações da API, aqui estamos apenas referenciando elas.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);


// facilitar o acesso aos recursos, ao invés de sempre chamar as funções, 
// atribuir as funções a uma const, no caso auth e database
const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };