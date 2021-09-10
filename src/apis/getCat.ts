import { Cat } from "../domains/cat";

export const getCat = async (id: number) => {
  console.log({ id });
  const res = await fetch(`https://thatcopy.pw/catapi/restId/${id}`);
  if (!res.ok) {
    console.log({ res });
  }

  const data = await res.json();
  return new Cat(data);
  //  return new Cat();
};
