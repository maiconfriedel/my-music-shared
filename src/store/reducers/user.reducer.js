import { toggleLoggedUser } from "../actions/user.actions";

const INITIAL_STATE = {
  loggedUser: {
    username: "",
    email: ""
  }
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_LOGGED_USER":
      return {
        ...state,
        loggedUser: {
          username: action.username,
          email: action.email
        }
      };

    default:
      return state;
  }
}
