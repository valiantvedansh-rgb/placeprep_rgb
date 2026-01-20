import { Problem } from "../data/problems";

/*
  Job Role → Topics → Problems → Company
*/

// 1. Filter problems (final step)
export function filterProblems(
  problems: Problem[],
  role: string,
  topic: string,
  company?: string
): Problem[] {
  return problems.filter(p =>
    p.roles.includes(role) &&
    p.topics.includes(topic) &&
    (!company || p.companies.includes(company))
  );
}

// 2. Get topics available for a role
export function getTopicsByRole(
  problems: Problem[],
  role: string
): string[] {
  return Array.from(
    new Set(
      problems
        .filter(p => p.roles.includes(role))
        .flatMap(p => p.topics)
    )
  );
}

// 3. Get companies available for role + topic
export function getCompaniesByRoleAndTopic(
  problems: Problem[],
  role: string,
  topic: string
): string[] {
  return Array.from(
    new Set(
      problems
        .filter(
          p =>
            p.roles.includes(role) &&
            p.topics.includes(topic)
        )
        .flatMap(p => p.companies)
    )
  );
}
