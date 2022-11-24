import fetchData from "./fetchData";

export default async function registerUser(userObj) {
  await fetchData("/users/create", "POST", userObj);
}
