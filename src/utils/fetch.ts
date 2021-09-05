import fetch from "isomorphic-fetch";

const fetcher = async <R>(url: string, options?: RequestInit): Promise<R> => {
  const res = await fetch(url, options);
  try {
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(`Error while fetching data from ${url}`, error);
    throw error;
  }
};

export default fetcher;
