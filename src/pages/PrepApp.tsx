import { useState } from "react";
import { problems } from "../data/problems";
import { filterProblems, getTopicsByRole } from "../utils/filters";

export default function PrepApp() {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const topics = selectedRole
    ? getTopicsByRole(problems, selectedRole)
    : [];

  const filteredProblems =
    selectedRole && selectedTopic
      ? filterProblems(problems, selectedRole, selectedTopic)
      : [];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Prep Dashboard</h1>

      {/* Role Selector */}
      <select
        className="bg-gray-900 border border-gray-700 p-2 rounded mr-4"
        value={selectedRole}
        onChange={e => {
          setSelectedRole(e.target.value);
          setSelectedTopic("");
        }}
      >
        <option value="">Select Role</option>
        <option value="SDE">SDE</option>
        <option value="Backend">Backend</option>
      </select>

      {/* Topic Selector */}
      <select
        className="bg-gray-900 border border-gray-700 p-2 rounded"
        value={selectedTopic}
        onChange={e => setSelectedTopic(e.target.value)}
        disabled={!selectedRole}
      >
        <option value="">Select Topic</option>
        {topics.map(topic => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>

      {/* Problems List */}
      <div className="mt-6 space-y-4">
        {filteredProblems.map(problem => (
          <div
            key={problem.id}
            className="p-4 bg-gray-900 rounded border border-gray-800"
          >
            <h3 className="font-semibold">{problem.title}</h3>
            <p className="text-gray-400 text-sm">
              {problem.topics.join(", ")} • {problem.difficulty}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
