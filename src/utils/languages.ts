const languages = [
  "TypeScript",
  "Java",
  "C#",
  "HTML",
  "React",
  "CSS",
  "Swift",
  "Rust",
  "Python",
  "Frontend",
  "Backend",
];

export default shuffleArray(languages);

export function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}
