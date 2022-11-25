import fetchData from "./fetchData";

export default async function registerUser(userObj) {
  try {
    await fetchData("/users/create", "POST", userObj);
  } catch (e) {
    console.log(e);
  }
}
