const generateConfig = (body) => {
  return {
    method: "PATCH",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(body),
  };
};

export const editUser = async (body) => {
  const requestConfig = generateConfig(body);
  const response = await fetch(
    `https://kodemia-18g-default-rtdb.firebaseio.com/-N5hJEPDls2mSuA3bSsD.json`,
    requestConfig
  );
  const data = await response.json();
  return data;
};

export const retrieve = async (id) => {
  const response = await fetch(
    `https://kodemia-18g-default-rtdb.firebaseio.com/${id}.json`
  );
  const data = await response.json();
  return data;
};
