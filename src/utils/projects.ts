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

export const mainProjects: Project[] = [
  {
    name: "CrossCode",
    id: "crosscode",
    images: ["crosscode0.webp", "crosscode1.webp", "crosscode2.webp"],
    short: "An iOS IDE for windows and linux",
    long: "XCode is only available for mac, but I can't afford one. So I made my own. CrossCode aims to make developing native iOS apps easy on any platform. It is still very early in development but does have it's core functionality working.",
    pointsTitle: "Features",
    points: [
      "Multi-platform support (Windows, Linux, and maybe mac in the future)",
      "Supports logging in with your Apple ID to sign apps",
      "Lets you view and manage certificates and app IDs",
      "Supports building and installing apps on your device",
      "Custom sideloading library written in Rust (isideload)",
      "Supports the swift package manager",
      "Uses monaco editor for code editing",
      "SourceKit LSP integration for error reporting, autocomplete, etc",
      "View your iDevice's syslog for debugging",
      "Project templates",
      "Dark and light mode",
      "Much more!",
    ],
    techStack: [
      "Bun",
      "TypeScript",
      "React",
      "Vite",
      "Joy UI",
      "Rust",
      "Tauri",
      "Swift",
    ],
    links: [
      {
        label: "Download",
        url: "https://github.com/nab138/CrossCode/releases",
      },
      {
        label: "GitHub",
        url: "https://github.com/nab138/CrossCode",
      },
      {
        label: "isideload GitHub",
        url: "https://github.com/nab138/isideload",
      },
    ],
  },
  {
    name: "iloader",
    id: "iloader",
    short: "A user-friendly iOS sideloader",
    long: "Setting up SideStore on iOS is a pain. It involves different apps depending on your PCs OS, requires users to install a multitude of apps on their PC, and is very error prone. After making isideload for CrossCode, I decided to use it to make an easy-to-use iOS sideloader that's as streamlined as possible. (Credit to StephenDev0 for improving the UI and Transistor for making the icon)",
    pointsTitle: "Features",
    points: [
      "Automatically install SideStore & place pairing file",
      "Install any .IPA app",
      "Manage Certificates and App IDs",
      "Place pairing files into known apps that use them (e.g. SideStore, StikDebug)",
      "Easily save & switch between multiple Apple IDs",
    ],
    techStack: ["Bun", "TypeScript", "React", "Vite", "Rust", "Tauri"],
    images: ["iloader0.webp", "iloader1.webp", "iloader2.webp"],
    links: [
      {
        label: "Download",
        url: "https://github.com/nab138/iloader/releases",
      },
      {
        label: "GitHub",
        url: "https://github.com/nab138/iloader",
      },
      {
        label: "isideload GitHub",
        url: "https://github.com/nab138/isideload",
      },
      {
        label: "CrossCode",
        url: "/projects/crosscode",
      },
    ],
  },
  {
    name: "Oxplorer",
    short: "On-the-fly pathfinder for FRC robotics",
    long: "A versatile pathfinder for FRC robotics that enables real-time obstacle avoidance features and quick path generation.",
    pointsTitle: "Features",
    points: [
      "Obstacles loaded from a JSON file (or, experimentally, accepted in real-time)",
      "Uses A* search algorithm",
      "Uses bezier curves for smooth paths",
      "Fully configurable path constraints",
      "Supports modifiers for time or condition based obstacles",
      "Supports robots of any size",
      "Fast enough to be used in real-time (Able to run just fine during the 20ms FRC loop in a complex codebase)",
    ],
    techStack: ["Java", "Gradle", "WPILib"],
    images: ["oxplorer.webp", "oxplorer-banner.webp"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/FRCTeam3044/Oxplorer",
      },
      {
        label: "Wiki",
        url: "https://github.com/FRCTeam3044/Oxplorer/wiki",
      },
      {
        label: "Javadoc",
        url: "https://frcteam3044.github.io/Oxplorer/",
      },
      {
        label: "Discord",
        url: "https://discord.com/invite/ypRWZGnW66",
      },
    ],
    id: "oxplorer",
  },
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
    images: ["shrinkwrap.webp", "shrinkwrap2.webp", "shrinkwrap3.webp"],
    links: [
      {
        label: "Download",
        url: "https://github.com/nab138/shrinkwrap/releases",
      },
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
      "TypeScript",
      "React",
      "Express",
      "WebSockets",
      "Github Pages",
    ],
    images: [
      "javacourse0.webp",
      "javacourse2.webp",
      "javacourse1.webp",
      "javacourse3.webp",
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
      "My first commercial project",
    ],
    techStack: ["TypeScript", "React", "Next.js", "DenoKV", "Vercel"],
    images: [
      "freetime1.webp",
      "freetime2.webp",
      "freetime3.webp",
      "freetime4.webp",
      "freetime5.webp",
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://freetime.nabdev.me",
      },
      {
        label: "Github",
        url: "https://github.com/nab138/FreeTime",
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
    images: ["oxidation.webp"],
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
        label: "Example Codebase",
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
    images: ["oxconfig.webp"],
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
        label: "Example Codebase",
        url: "https://github.com/frcteam3044/2025swervebase",
      },
      {
        label: "Slideshow",
        url: "https://docs.google.com/presentation/d/1QuVK_aaOHk0eIedKAgRVHNj8FFaLIJ0PjUWnntIh-NE/",
      },
      {
        label: "Wiki",
        url: "https://github.com/FRCTeam3044/OxConfig/wiki",
      },
      {
        label: "Javadoc",
        url: "https://frcteam3044.github.io/OxConfig/",
      },
      {
        label: "Discord",
        url: "https://discord.com/invite/ypRWZGnW66",
      },
    ],
    id: "oxconfig",
  },
];

export const miniProjects: Project[] = [
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
    images: ["apple-music.webp"],
    links: [
      {
        label: "Live Demo",
        url: "https://music.nabdev.me",
      },
      {
        label: "GitHub",
        url: "https://github.com/nab138/apple-music",
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
      "programmar1.webp",
      "programmar2.webp",
      "programmar3.webp",
      "programmar4.webp",
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
      "gearglimpse1.webp",
      "gearglimpse2.webp",
      "gearglimpse3.webp",
      "gearglimpse4.webp",
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
  {
    name: "Portfolio",
    id: "portfolio",
    images: ["portfolio.webp", "portfolio2.webp"],
    short: "Website-ception!",
    long: "My attempt at a stylish portfolio website. I probably could've achieved a better result with existing templates, but I felt that as a developer, there was no option but to make my own.",
    links: [
      {
        label: "Live Demo (you are here!)",
        url: "https://nabdev.me",
      },
      {
        label: "GitHub",
        url: "https://github.com/nab138/nabdev",
      },
    ],
    points: [
      "Responsive design",
      "Completely custom design",
      "Puts projects front and center with images everywhere",
      "It's the site you're on right now!",
    ],
    pointsTitle: "Features",
    techStack: ["TypeScript", "React", "Vite"],
  },
  {
    name: "NetworkTablesSharp",
    id: "networktables-sharp",
    images: ["networktables-sharp.webp"],
    short: "A C# library for NetworkTables 4.0",
    long: "As far as I know, the first C# implementation of NetworkTables 4.0. It was originally made for unity but was later converted into a NuGet package for use in any .NET project.",
    links: [
      {
        label: "NuGet",
        url: "https://www.nuget.org/packages/NetworkTablesSharp",
      },
      {
        label: "GitHub",
        url: "https://github.com/nab138/NetworkTablesSharp",
      },
    ],
    techStack: ["C#"],
  },
];
