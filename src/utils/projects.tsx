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

export const mainProjects: Project[] = shuffleArray([
  {
    name: "Shrinkwrap",
    short: "Multipurpose app for FRC robotics",
    long: "Shrinkwrap is a cross-platform diagnostic, configuration, and tuning utility for FRC robotics. While it provides a few generic features, it contains mostly specialized tools for specific softwares.",
    points: [
      "Supports Windows, macOS, Linux, iOS, and Android",
      "Fully configurable and exportable docking layout",
      "Connect to a robot in real time or load a log file",
      "Visualize data on a 2D or 3D field",
      "Tune OxConfig parameters and controllers live",
      "Visualize Oxidation state machine",
      "Much more!",
    ],
    pointsTitle: "Features",
    techStack: ["Bun", "Vite", "Rust", "Tauri", "TypeScript", "React"],
    images: ["shrinkwrap.png", "shrinkwrap2.png", "shrinkwrap3.png"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nab138/shrinkwrap",
      },
      {
        label: "OxConfig",
        url: "/projects/oxconfig",
      },
      {
        label: "Oxidation",
        url: "/projects/oxidation",
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
    images: ["oxplorer.png", "oxplorer-banner.png"],
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
    long: "A virtual online summer class taught by me to teach Java to beginners. The course is designed for anyone regardless of prior programming experience, and it covers the basics of Java programming, object-oriented programming concepts, and more. (Note: The CAD Course featured in the poster was inspired by this course, but was not created by me.)",
    pointsTitle: "Course Highlights",
    points: [
      "Open to anyone for free, regardless of age or prior programming experience",
      "700+ Slides",
      "2, 1-hour virtual classes per week",
      "Live coding sessions on a custom-made web platform, allowing all students to attempt exercises and get feedback from teachers in real-time.",
      "Projects in context of FRC to end the course",
      "Live Office hours for students to ask questions",
      "All course materials were created by me and a mentor of FRC Team 3044",
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
    images: [
      "javacourse0.png",
      "javacourse2.png",
      "javacourse1.png",
      "javacourse3.png",
    ],
    links: [
      {
        label: "Live Coding Github",
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
      "Used to time the 2024 Malta Trail Race",
    ],
    techStack: ["Typescript", "React", "Next.js", "DenoKV", "Vercel"],
    images: [
      "freetime1.png",
      "freetime2.png",
      "freetime3.png",
      "freetime4.png",
      "freetime5.png",
    ],
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
      {
        label: "Shrinkwrap",
        url: "/projects/shrinkwrap",
      },
      {
        label: "2025 3044 Robot Code (Fully automated w/ Oxidation)",
        url: "https://github.com/frcteam3044/2025swervebase",
      },
    ],
    id: "oxidation",
  },
  {
    name: "OxConfig",
    short: "Real-time configuration and tuning for FRC robots",
    long: "OxConfig is a real-time configuration and tuning utility for FRC robots. It allows users to configure and tune various parameters of their robot in real-time without having to redeploy code.",
    pointsTitle: "Features",
    points: [
      "Cross-platform editing with Shrinkwrap",
      "Supports configurable classes for tuning controllers, subsystems, and more",
      "Real-time updates without even having to disable the robot",
      "Pre-configured modes to quickly get your robot ready for competition, presentations, etc.",
    ],
    techStack: ["Java", "Gradle", "WPILib"],
    images: ["oxconfig.png"],
    links: [
      {
        label: "Github",
        url: "https://github.com/FRCTeam3044/OxConfig",
      },
      {
        label: "Shrinkwrap",
        url: "/projects/shrinkwrap",
      },
      {
        label: "2025 3044 Robot Code (Uses OxConfig)",
        url: "https://github.com/frcteam3044/2025swervebase",
      },
    ],
    id: "oxconfig",
  },
]);

export const miniProjects: Project[] = shuffleArray([
  {
    name: "Apple Music Frontend",
    short: "Alternative Apple Music web frontend",
    long: "The Apple Music web frontend is buggy, laggy, and missing some stuff. The same can be said for this frontend, but at least its my jank, not Apple's",
    points: [
      "Supports live lyrics powered by LRC LIB",
      "Uses MusicKit to access Apple Music API",
      "Incredibly basic functionality",
    ],
    pointsTitle: "Features",
    techStack: ["Bun", "Vite", "TypeScript", "React"],
    images: ["apple-music.png"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nab138/apple-music",
      },
      {
        label: "Live Demo",
        url: "https://music.nabdev.me",
      },
    ],

    id: "apple-music",
  },
  {
    name: "ProGrammar",
    short: "Duolingo-style programming language learning app",
    long: "Mobile app to learn programming languages in a Duolingo-style format. It provides interactive lessons, quizzes, and projects to help users learn programming languages effectively. The app itself is almost fully functional, just missing real content.",
    points: [
      "Data-driven courses",
      "Custom lesson builder app to create courses",
      "Interactive project-based learning framework",
    ],
    pointsTitle: "Features",
    techStack: ["Ionic", "Vite", "TypeScript", "React"],
    images: [
      "programmar1.png",
      "programmar2.png",
      "programmar3.png",
      "programmar4.png",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nab138/ProGrammar",
      },
    ],
    id: "programmar",
  },
  {
    name: "GearGlimpseRevolution",
    short: "FRC AR Tools for iOS!",
    long: "Connect to a real robot or a simulator and visualize the robot on an AR field.",
    points: [
      "Custom robot models",
      "Small-scale or life size field",
      "Transparent, translucent, or opaque robot",
      "WIP AprilTag Alignment to place AR robot on a real field (got detection working, but not alignment yet)",
    ],
    pointsTitle: "Features",
    techStack: ["Swift", "Theos"],
    images: [
      "gearglimpse1.png",
      "gearglimpse2.png",
      "gearglimpse3.png",
      "gearglimpse4.png",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nab138/GearGlimpseRevolution",
      },
      {
        label: "Altstore Source",
        url: "https://tinyurl.com/gearglimpsesource",
      },
    ],
    id: "gearglimpse",
  },
]);
