export const addApi = async (
  toDo: string,
  isDone: boolean
): Promise<number> => {
  try {
    const url = `http://localhost:4000/to-do/`;
    const urlOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: toDo, isDone }),
    };
    const res = await fetch(url, urlOptions);
    const result = await res.json();
    if (result) return result.id;
    else return -1;
  } catch (e) {
    if (e) return -1;
  }
  return -1;
};
