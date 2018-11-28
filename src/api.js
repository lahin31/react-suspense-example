import { delay } from "./delay";

export const wrestlers = [
  {
    id: 1,
    name: "John  Cena",
    country: "USA",
    img: "/cena.jpg"
  },
  {
    id: 2,
    name: "Brock Lesner",
    country: "USA",
    img: "/lesner.jpg"
  },
  {
    id: 3,
    name: "Chris Jericho",
    country: "Canada",
    img: "./Chris_Jericho_bio.jpg"
  }
];

export const fetchWrestler = async id => {
  await delay(5000);
  for (let w of wrestlers) {
    if (w.id === id) {
      return w;
    }
  }
};
