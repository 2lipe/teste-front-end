/** Libs para uso de funções avançadas do JS em navegadores antigos */
import 'regenerator-runtime/runtime';
import 'core-js';

/** Styles */
import './styles/sass/main.scss';

/** Scripts */
import GetUsers from './js/get-users';
import Authentication from './js/authentication';

const auth = new Authentication();
const getUsers = new GetUsers();

auth.init();
getUsers.init();
