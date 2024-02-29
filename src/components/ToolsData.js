import html from "../assets/html.png";

const toolData = [
  {
    img: html,
    name: "HTML",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    name: "CSS",
  },
  {
    img: "https://banner2.cleanpng.com/20180411/cvq/kisspng-javascript-html-computer-software-web-browser-watermark-5acdbd54ac19f7.4484983215234327887049.jpg",
    name: "Javascript",
  },
  {
    img: "data:image/png;base64,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",
    name: "Bootstrap",
  },
  {
    img: "data:image/png;base64,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",
    name: "React.js",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&usqp=CAU",
    name: "Tailwind CSS",
  },
  {
    img: "data:image/png;base64,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",
    name: "Material UI",
  },
];
export default toolData;
