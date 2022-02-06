const data = [
  {
    link: "https://www.youtube.com/embed/XZ5Uv4JKTU4?rel=0",
    title: "monkey flip",
  },
  {
    link: "https://www.youtube.com/embed/b8PxzPxI8Os",
    title: "¡Hasta la próxima!",
  },
  {
    link: "https://www.youtube.com/embed/61hqRtsIXDM",
    title: "Nosotros somos el primer país de Chile",
  },
];

export default function () {
  return data[getIndex(data.length - 1)];
}

/**
 * max index from the array
 * @param {number} maxIndex
 */
const getIndex = (maxIndex) => {
  return Math.round(Math.random() * maxIndex);
};
