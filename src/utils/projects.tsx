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
    techStack: ["Bun", "Vite", "Rust", "Tauri", "TypeScript", "React"],
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
    techStack: ["Java", "Gradle", "WPILib"],
    images: ["test.png"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/frcteam3044/oxplorer",
      },
    ],
    id: "oxplorer",
  },
  {
    name: "Java Course",
    short: "Virtual summer course to teach beginners Java",
    long: "A virtual online summer class taught by me to teach Java to beginners. The course is designed for anyone regardless of prior programming experience, and it covers the basics of Java programming, object-oriented programming concepts, and more. All course materials were created by me and a mentor of FRC Team 3044.",
    pointsTitle: "Course Highlights",
    points: [
      "Open to anyone, regardless of age or prior programming experience",
      "700+ Slides",
      "2, 1-hour virtual classes per week",
      "Live coding sessions on a custom-made web platform, allowing all students to attempt exercises and get feedback from teachers in real-time.",
      "Projects in context of FRC to end the course",
    ],
    techStack: [
      "Java",
      "Bun",
      "Vite",
      "Typescript",
      "React",
      "Render",
      "Github Pages",
    ],
    images: ["java-course.png"],
    links: [
      {
        label: "Live Coding Platform Github",
        url: "https://github.com/nab138/JavaCourseLive",
      },
      {
        label: "Slide Deck",
        url: "https://drive.google.com/drive/folders/1BdfddrYHADasaXvpEUSZ3RHU8LABwXNi",
      },
    ],
    id: "java-course",
  },
  {
    name: "FreeTime",
    short: "Cross-country race timer",
    long: "A web-based cross-country race timer application designed to help organizers manage and time races efficiently. It provides features for real-time results, timer collaboration, and more.",
    pointsTitle: "Features",
    points: [
      "Real-time race timing across multiple devices (separate people can mark finishers and record bib numbers)",
      "Real-time results display",
      "Import rosters from CSV files",
      "Results editor to fix mistakes",
      "Runs on cloud or raspberry pi",
    ],
    techStack: ["Typescript", "React", "Next.js", "DenoKV", "Vercel"],
    images: ["freetime.png"],
    links: [
      {
        label: "Github",
        url: "https://github.com/nab138/FreeTime",
      },
      {
        label: "Live Demo",
        url: "https://freetime.nabdev.me",
      },
    ],
    id: "freetime",
  },
  {
    name: "Oxidation",
    short: "A WIP state machine library for automated FRC robot control",
    long: "Oxidation provides a high level abstraction for robot logic, allowing complex sequences of actions to be written in a simple decorator-based syntax. It sits on top of existing commands and subsystems and provides a way to orchestrate them in a cohesive manner.",
    pointsTitle: "Features",
    points: [
      "Visual Debugging with Shrinkwrap",
      "Nested states that resolve recursively to ensure fast transitions",
      "Optional Quality-of-life features such as automatic driverstation mode transitions",
    ],
    techStack: ["Java", "Gradle", "WPILib"],
    images: ["oxidation.png"],
    links: [
      {
        label: "Github",
        url: "https://github.com/nab138/Oxidation",
      },
    ],
    id: "oxidation",
  },
];

export default shuffleArray(projects);
