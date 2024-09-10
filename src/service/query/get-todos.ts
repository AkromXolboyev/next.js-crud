"use server";
const url = process.env.APP_URL;

export interface dataType {
  title: string;
  description: string;
  id: number;
}

export const getData = async (): Promise<dataType[]> => {
  try {
    const res = await fetch(`${url}/todos`, { next: { tags: ["todos"] } });

    // Check if the response is successful
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    // Improved error handling
    const err = (error as Error).message;
    throw new Error(`Data fetch failed: ${err}`);
  }
};
