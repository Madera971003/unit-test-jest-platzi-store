const getData = (api) => {
  return fetch(api)
    .then(Response => Response.json())
    .then(response => response)
    .catch(error => error);
};

export default getData;
