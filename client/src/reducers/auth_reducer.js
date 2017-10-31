import { 
  AUTH_USER,  
  UNAUTH_USER,
  AUTH_ERROR,
  PROTECTED_TEST 
} from '../actions/types';

const INITIAL_STATE = { error: '', message: '', content: '', user: {}, authenticated: false}

export default function (state = INITIAL_STATE, action) {  
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', message: '', user: action.user, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case PROTECTED_TEST:
      return { ...state, content: action.payload };
    default:
      return state;
  }
}