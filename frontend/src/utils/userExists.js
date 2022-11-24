import fetchData from "./fetchData";

export default async function userExists(user) {
  const response = await fetchData(`users/${user.username}`, "GET");
  if (response.password === user.password) return true;

  return false;
}
