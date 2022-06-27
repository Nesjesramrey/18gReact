export const getCharacters = async () => {
  var page = Math.floor(Math.random() * (35 + 1 - 1) + 1);
  console.log(page);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data = await response.json();
  return data;
};
