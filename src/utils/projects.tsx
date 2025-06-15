import { shuffleArray } from "./utils";

export type Project = {
  name: string;
  short: string;
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
    short: "Multipurpose app for FRC robotics software",
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
    name: "test",
    short: "Multipurpose test robotics software",
    image: "test.png",
    urls: [
      {
        label: "GitHub",
        url: "https://github.com/nab138/shrinkwrap",
      },
    ],
    id: "shrinkwrap",
  },
];

export default shuffleArray(projects);
