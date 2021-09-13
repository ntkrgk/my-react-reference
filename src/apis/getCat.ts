import { Cat } from "../domains/cat";

export const getCat = async (id: number) => {
  const res = await fetch(`https://thatcopy.pw/catapi/restId/${id}`);
  if (!res.ok) {
    throw Error();
  }

  const data = await res.json();
  return new Cat(data);
};
