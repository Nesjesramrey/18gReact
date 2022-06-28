export const getUsers = async () => {
  fetch("https://poised-shift-162315-default-rtdb.firebaseio.com/.json", {
    method: "GET",
    headers: {
      "Content-Type": "Application/JSON",
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};
