const cache = new Map();

export const useFetchAsync = (url: string) => {
  const state = cache.get(url);
  switch (state?.status) {
    case undefined: {
      const promise = new Promise(async (resolve, reject) => {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            cache.set(url, {
              status: "ready",
              data,
            });
            resolve(url);
          })
          .catch((error) => {
            cache.set(url, {
              status: "error",
              error,
            });
            reject(error);
          });
      });
      cache.set(url, {
        status: "pending",
        promise,
      });
      throw promise;
    }
    case "pending":
      throw state.promise;
    case "ready":
      return state.data;
    case "error":
      return null;
  }
};
