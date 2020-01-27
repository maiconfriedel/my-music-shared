export function toggleLoggedUser(username, email) {
  return {
    type: "TOGGLE_LOGGED_USER",
    username,
    email
  };
}
