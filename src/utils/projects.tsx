import { shuffleArray } from "./utils";

export type Project = {
  name: string;
  short: string;
  long?: string;
  points?: string[];
  pointsTitle?: string;
  image: string;
  urls: {
    label: string;
    url: string;
  }[];
  id: string;
};

const projects: Project[] = [
  {
    name: "Shrinkwrap",
    short: "Multipurpose app for FRC robotics",
    image: "shrinkwrap.png",
    urls: [
      {
        label: "GitHub",
        url: "https://github.com/nab138/shrinkwrap",
      },
    ],
    id: "shrinkwrap",
  },
  {
    name: "Dawg",
    short: "What da dog doin?",
    image: "test.png",
    urls: [
      {
        label: "GitHub",
        url: "https://github.com/nab138/shrinkwrap",
      },
    ],
    id: "dawg",
  },
];

export default shuffleArray(projects);
