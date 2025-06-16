import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiSwift,
  SiKotlin,
  SiRust,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiGit,
  SiGithubactions,
  SiTauri,
  SiGradle,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { type IconType } from "react-icons";

const techIconMap: { [key: string]: IconType } = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  java: FaJava,
  nextjs: SiNextdotjs,
  "next.js": SiNextdotjs,
  python: SiPython,
  swift: SiSwift,
  kotlin: SiKotlin,
  rust: SiRust,
  html: SiHtml5,
  html5: SiHtml5,
  css: SiCss3,
  css3: SiCss3,
  react: SiReact,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  git: SiGit,
  githubactions: SiGithubactions,
  "github actions": SiGithubactions,
  tauri: SiTauri,
  gradle: SiGradle,
};

export default function TechIcon({
  tech,
  size = 24,
}: {
  tech: string;
  size?: number;
}) {
  const IconComponent = techIconMap[tech.toLowerCase()];
  if (!IconComponent) {
    return null;
  }
  return (
    <div className="tech-icon" title={tech}>
      <IconComponent size={size} />
    </div>
  );
}
