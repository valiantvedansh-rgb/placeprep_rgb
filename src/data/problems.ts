// src/data/problems.ts

export type Difficulty = "Easy" | "Medium" | "Hard";

export interface YoutubeResource {
  title: string;
  url: string;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;

  // working order support
  roles: string[];      // Job Role
  topics: string[];     // Topics under role
  companies: string[];  // Company tags (last filter)

  leetcodeUrl: string;
  youtube: YoutubeResource[];
}

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    roles: ["SDE", "Backend"],
    topics: ["Arrays", "Hash Map"],
    companies: ["Amazon", "Google", "Microsoft"],
    leetcodeUrl: "https://leetcode.com/problems/two-sum/",
    youtube: [
      {
        title: "NeetCode",
        url: "https://youtu.be/KLlXCFG5TnA",
      },
      {
        title: "Take U Forward",
        url: "https://youtu.be/UXDSeD9mN-k",
      },
    ],
  },

  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    roles: ["SDE", "Backend"],
    topics: ["Stack", "String"],
    companies: ["Amazon", "Google", "Meta"],
    leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
    youtube: [
      {
        title: "NeetCode",
        url: "https://youtu.be/WTzjTskDFMg",
      },
      {
        title: "Take U Forward",
        url: "https://youtu.be/wkDfsKijrZ8",
      },
    ],
  },
];
