import { products } from "../../lib/products";
export const showcaseStories = [
  ...products.slice(0, 3),
  {
    ...products[3],
    color: "dark",
    line: "Go lighter. Go further.",
    tag: "For work in motion",
  },
  {
    ...products[1],
    color: "light",
    line: "Your studio. Anywhere.",
    tag: "For the next big idea",
  },
];
export const openLaptop =
  "https://dlcdnwebimgs.asus.com/gain/28DF74D8-0E5F-4563-A209-42AD90293A6E/w1000/h732";
