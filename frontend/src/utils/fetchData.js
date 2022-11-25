const localhost = "http://localhost:5001";

export default async function fetchData(route, method, body) {
  let response = {};

  if (!body) {
    response = await fetch(localhost + route, { method: method });
  } else {
    response = await fetch(localhost + route, {
      method: method,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    });
  }

  const data = await response.json();
  return data;
}
