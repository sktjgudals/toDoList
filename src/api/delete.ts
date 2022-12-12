export const deleteApi = async (id: number): Promise<boolean> => {
  try {
    const url = `http://localhost:4000/to-do/${id}`;

    const urlOptions = {
      method: "DELETE",
    };
    const res = await fetch(url, urlOptions);
    const result = await res.json();
    if (result) return result;
    else return false;
  } catch (e) {
    if (e) return false;
  }
  return false;
};
