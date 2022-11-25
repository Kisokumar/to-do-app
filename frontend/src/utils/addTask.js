import fetchData from "./fetchData";

export default async function addTask(taskObj, username) {
  await fetchData(`/users/${username}/tasks/create`, "POST", taskObj);
}
