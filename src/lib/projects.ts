
/*
  {
    name: "",
    description: "",
    date: "",
    url: ""
  },
*/

const projects = [
  {
    name: "Color",
    description: "Color manager built for speed",
    date: "2024-03-13",
    url: "https://color.jeremyjaydan.com",
    image: "color.png"
  },
  {
    name: "Dismoji",
    description: "Create your own custom emojis!",
    date: "2019-12-28",
    url: "https://dismoji.me",
    image: "dismoji.png"
  },
  {
    name: "Notes (devtools)",
    description: "A chrome extension that adds a notes tab to your devtools",
    date: "2023-08-28",
    url: "https://chromewebstore.google.com/detail/notes-devtools/ibflpbiobknlkcjonecabnehipmdgdni",
    image: "notes-devtools.png"
  },
  {
    name: "Project Launcher",
    description: "A VSCode plugin to launch, search, and create new projects.",
    date: "2023-05-23",
    url: "https://marketplace.visualstudio.com/items?itemName=JeremyJaydan.project-launcher",
    image: "project-launcher-preview.png"
  },
  {
    name: "Brain",
    description: "Brainstorming tool built for speed",
    date: "2019-11-14",
    url: "https://brain.jeremyjaydan.com",
    image: "brain.png"
  },
  {
    name: "Code",
    description: "Code sandbox built for speed",
    date: "2019-11-21",
    url: "https://code.jeremyjaydan.com",
    image: "code.png"
  },
  {
    name: "Markmy",
    description: "A markdown editor built for speed",
    date: "2019-03-23",
    url: "https://markmy.dev",
    image: "md.png"
  },
  {
    name: "apple-pages-tailwind",
    description: "An apple CLR file based on tailwindcss colors",
    date: "2022-08-27",
    url: "https://github.com/JeremyJaydan/apple-pages-tailwind",
    image: "apple-pages-tailwind.png"
  },
  {
    name: "for-next",
    description: "A for loop iterator JS library",
    date: "2019-06-23",
    url: "https://www.npmjs.com/package/for-next",
    image: "for-next.png"
  },
  {
    name: "programming-challenges",
    description: "Spin the wheel of 100+ programming challenges",
    date: "2019-07-07",
    url: "https://programming-challenges.jeremyjaydan.dev",
    image: "programming-challenges.png"
  },
  {
    name: "a DataTable",
    description: "web concept",
    date: "2019-04-25",
    url: "https://codepen.io/JeremyJaydan/details/zXMJdb",
    image: "a-data-table.png"
  },
  {
    name: "Variable Editor",
    description: "web concept",
    date: "2019-04-25",
    url: "https://codepen.io/JeremyJaydan/details/PgyOmP",
    image: "variable-editor.png"
  },
  {
    name: "some select elements",
    description: "web concept",
    date: "2019-04-22",
    url: "https://codepen.io/JeremyJaydan/details/WWKjwQ",
    image: "some-select-elements.png"
  },
  {
    name: "Black hole",
    description: "web canvas experiment",
    date: "2018-09-10",
    url: "https://codepen.io/JeremyJaydan/details/KxQgKw",
    image: "black-hole.png"
  },
  {
    name: "Slingshot",
    description: "web canvas experiment",
    date: "2018-09-10",
    url: "https://codepen.io/JeremyJaydan/details/yxvLNw",
    image: "slingshot.png"
  },
  {
    name: "Blue Burst",
    description: "web canvas experiment",
    date: "2018-09-11",
    url: "https://codepen.io/JeremyJaydan/details/rZdmaY",
    image: "blue-burst.png"
  },
  {
    name: "Circular Motion",
    description: "web canvas experiment",
    date: "2018",
    url: "https://jsfiddle.net/JeremyJaydan/Lupkmymy/",
    image: "circular-motion.png"
  },
  {
    name: "Animated Circles",
    description: "web canvas experiment",
    date: "2018",
    url: "https://jsfiddle.net/JeremyJaydan/qudd6xop/",
    image: "animated-circles.png"
  },
  {
    name: "Some ol' buttons from early days",
    description: "web concept",
    date: "2017-11-27",
    url: "https://codepen.io/JeremyJaydan/details/XzPXap",
    image: "some-ol-buttons-from-early-days.png"
  },
]

export default projects;

export function getProjectsSortedByDate() {
  return [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));
}
