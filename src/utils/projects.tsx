import { shuffleArray } from "./utils";

export type Project = {
  name: string;
  short: string;
  long?: string;
  points?: string[];
  pointsTitle?: string;
  techStack?: string[];
  images: string[];
  links?: {
    label: string;
    url: string;
  }[];
  id: string;
};

const projects: Project[] = [
  {
    name: "Shrinkwrap",
    short: "Multipurpose app for FRC robotics",
    long: "Shrinkwrap is a cross-platform diagnostic, configuration, and tuning utility for FRC robotics. While it provides a few generic features, it contains mostly specialized tools for specific softwares.",
    points: [
      "Supports windows, macos, linux, ios, and android",
      "Fully configurable and exportable docking layout",
      "Connect to a robot in real time or load a log file",
      "Visualize data on a 2D or 3D field",
      "Tune OxConfig parameters and controllers live",
      "Visualize Oxidation state machine",
      "Much more!",
    ],
    pointsTitle: "Features",
    techStack: ["Rust", "Tauri", "TypeScript", "React"],
    images: ["shrinkwrap.png"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nab138/shrinkwrap",
      },
    ],

    id: "shrinkwrap",
  },
  {
    name: "Oxplorer",
    short: "On-the-fly pathfinder for FRC robotics",
    long: "A versatile pathfinder for FRC robotics that enables real-time obstacle avoidance features and quick path generation.",
    pointsTitle: "Features",
    points: [
      "Uses A* search algorithm",
      "Fully configurable path constraints",
      "Supports modifiers for time or condition based obstacles",
      "Supports robots of any size",
    ],
    techStack: ["Java", "Gradle"],
    images: ["test.png"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/frcteam3044/oxplorer",
      },
    ],
    id: "oxplorer",
  },
];

export default shuffleArray(projects);
