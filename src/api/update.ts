export const updateApi = async (
  id: number,
  toDo: string,
  isDone: boolean
): Promise<any> => {
  try {
    const url = `http://localhost:3001/posts/${id}`;
    const urlOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: toDo, isDone }),
    };
    return await new Promise((resolve, reject) => {
      fetch(url, urlOptions)
        .then(async (data: any) => {
          const res = await data.json();
          resolve(res.id);
        })
        .catch((e) => {
          if (e) return reject(e);
        });
    });
  } catch (e) {
    if (e) return 0;
  }
  return 0;
};

export const isDoneUpdateApi = async (
  id: number,
  isDone: boolean,
  description: string
): Promise<boolean> => {
  try {
    const url = `http://localhost:3001/posts/${id}`;
    const urlOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone, description }),
    };

    await fetch(url, urlOptions).catch((e) => {
      if (e) return "error";
    });
  } catch (e) {
    if (e) return false;
  }
  return false;
};
