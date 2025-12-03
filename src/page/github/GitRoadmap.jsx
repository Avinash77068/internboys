import React, { useState } from "react";
import {
  Info,
  BookOpen,
  Code,
  GitBranch,
  Users,
  Settings,
  Zap,
  Package,
  Shield,
} from "lucide-react";

const GitRoadmap = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const TopicBox = ({ title, highlighted = false, onClick }) => (
    <div
      onClick={() => {
        setSelectedTopic(title);
        if (onClick) onClick();
      }}
      className={`
        px-4 py-2 rounded border-2 cursor-pointer transition-all
        ${
          highlighted
            ? "bg-yellow-300 border-yellow-400 shadow-lg"
            : "bg-amber-50 border-amber-200 hover:bg-amber-100"
        }
      `}
    >
      <p className="text-sm font-medium text-gray-800 text-center">{title}</p>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Git and GitHub
              </h1>
              <p className="text-gray-600">
                Complete roadmap with interactive topics
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Visit the Beginner Version
              </button>
              <a
                href="https://roadmap.sh"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                roadmap.sh
              </a>
            </div>
          </div>
        </div>

        {/* Main Roadmap Container */}
        <div className="bg-white rounded-lg shadow-xl p-8 relative">
          <svg
            className="absolute inset-0 pointer-events-none w-full h-full"
            style={{ zIndex: 0 }}
          >
            {/* SVG connecting lines */}
            <line
              x1="15%"
              y1="10%"
              x2="25%"
              y2="15%"
              stroke="#CBD5E0"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="35%"
              y1="15%"
              x2="45%"
              y2="20%"
              stroke="#CBD5E0"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="55%"
              y1="20%"
              x2="65%"
              y2="25%"
              stroke="#CBD5E0"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="25%"
              y1="30%"
              x2="35%"
              y2="40%"
              stroke="#CBD5E0"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="45%"
              y1="40%"
              x2="55%"
              y2="50%"
              stroke="#CBD5E0"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="65%"
              y1="50%"
              x2="75%"
              y2="60%"
              stroke="#CBD5E0"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>

          {/* Content Grid */}
          <div className="relative z-10 space-y-12">
            {/* Row 1: Version Control + Basics */}
            <div className="grid grid-cols-4 gap-6">
              <div className="space-y-3">
                <div className="bg-yellow-300 border-2 border-yellow-400 rounded-lg p-4 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    What is Version Control?
                  </h3>
                  <div className="space-y-2">
                    <TopicBox title="Why use Version Control?" />
                    <TopicBox title="Git vs Other VCS" />
                    <TopicBox title="Installing Git Locally" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-yellow-300 border-2 border-yellow-400 rounded-lg p-4 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Learn the Basics
                  </h3>
                  <div className="space-y-2">
                    <TopicBox title="What is a Repository" />
                  </div>
                </div>
                <div className="space-y-2">
                  <TopicBox title="Cloning Repositories" />
                  <TopicBox title="Managing Remotes" />
                  <TopicBox title="Pushing / Pulling Changes" />
                  <TopicBox title="Fetch without Merge" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-yellow-300 border-2 border-yellow-400 rounded-lg p-4 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Basic Collaboration
                  </h3>
                  <div className="space-y-2">
                    <TopicBox title="Branching Basics" />
                    <TopicBox title="Creating Branch" />
                    <TopicBox title="Renaming Branch" />
                    <TopicBox title="Deleting Branch" />
                    <TopicBox title="Checkout Branch" />
                    <TopicBox title="Merging Basics" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-yellow-300 border-2 border-yellow-400 rounded-lg p-4 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    GitHub Essentials
                  </h3>
                  <div className="space-y-2">
                    <TopicBox title="Creating Account" />
                    <TopicBox title="GitHub Interface" />
                    <TopicBox title="Setting up Profile" />
                    <TopicBox title="Creating Repositories" />
                    <TopicBox title="Commit Messages" />
                    <TopicBox title="Branch Naming" />
                    <TopicBox title="PR Guidelines" />
                    <TopicBox title="Code Reviews" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Beginner Topics (Left Side) */}
            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-1 space-y-2">
                <TopicBox title="git init" highlighted />
                <TopicBox title="git config" />
                <TopicBox title="Local vs Global Config" />
                <TopicBox title="Repository Initialization" />
                <TopicBox title="Working Directory" />
                <TopicBox title="Staging Area" />
                <TopicBox title="Committing Changes" />
                <TopicBox title="Intro and Git Commands" />
                <TopicBox title=".gitignore" />
                <TopicBox title="Viewing Commit History" />
              </div>

              <div className="col-span-1 space-y-2">
                <TopicBox title="Git Remotes" highlighted />
                <div className="bg-yellow-300 border-2 border-yellow-400 rounded-lg p-3 shadow-lg">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">
                    Merge Strategies
                  </h4>
                  <div className="space-y-2">
                    <TopicBox title="Collaborators" />
                    <TopicBox title="Creating PR" />
                    <TopicBox title="PR from a Fork" />
                  </div>
                </div>
              </div>

              <div className="col-span-1 space-y-2">
                <div className="bg-yellow-300 border-2 border-yellow-400 rounded-lg p-3 shadow-lg">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">
                    Best Practices
                  </h4>
                  <div className="space-y-2">
                    <TopicBox title="Contribution Guidelines" />
                    <TopicBox title="Clean Git History" />
                  </div>
                </div>
                <TopicBox title="Collaboration on GitHub" highlighted />
              </div>

              <div className="col-span-1 space-y-2">
                <TopicBox title="Profile Machine" highlighted />
                <TopicBox title="Private vs Public" />
                <TopicBox title="Markdown" />
                <TopicBox title="Project Readme" />
                <TopicBox title="GitHub Wikis" />
                <TopicBox title="CITATION files" />
                <TopicBox title="Documentation" highlighted />
              </div>
            </div>

            {/* Row 3: Intermediate Topics */}
            <div className="grid grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="bg-yellow-300 border-2 border-yellow-400 rounded-lg p-3 shadow-lg">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">
                    Intermediate Git Topics
                  </h4>
                </div>
                <TopicBox title="Linear vs Non-Linear" />
                <TopicBox title="HEAD" />
                <TopicBox title="Detached HEAD" />
                <TopicBox title="git log options" />
              </div>

              <div className="space-y-2">
                <TopicBox title="History" highlighted />
                <div className="border-2 border-gray-300 rounded-lg p-3 bg-white">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">
                    Common Hooks
                  </h4>
                  <div className="space-y-1">
                    <TopicBox title="commit-msg" />
                    <TopicBox title="post-checkout" />
                    <TopicBox title="post-update" />
                    <TopicBox title="pre-commit" />
                    <TopicBox title="pre-push" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <TopicBox title="Viewing Diffs" highlighted />
                <TopicBox title="Between Commits" />
                <TopicBox title="Between Branches" />
                <TopicBox title="Staged Changes" />
                <TopicBox title="Unstaged Changes" />
              </div>

              <div className="space-y-2">
                <TopicBox title="Rewriting History" highlighted />
                <TopicBox title="git commit --amend" />
                <TopicBox title="git rebase" />
                <TopicBox title="git filter-branch" />
                <TopicBox title="git push --force" />
                <TopicBox title="Managing Tags" />
                <TopicBox title="Pushing Tags" />
                <TopicBox title="Checkout Tags" />
                <TopicBox title="GitHub Releases" />
              </div>
            </div>

            {/* Row 4: Workflow & Advanced */}
            <div className="grid grid-cols-4 gap-6">
              <div className="space-y-2">
                <TopicBox title="Submodules" highlighted />
                <div className="space-y-2 mt-4">
                  <TopicBox title="Git Patch" highlighted />
                  <TopicBox title="Git Hooks" highlighted />
                </div>
              </div>

              <div className="space-y-2">
                <TopicBox title="Tagging" highlighted />
                <div className="border-2 border-gray-300 rounded-lg p-3 bg-white mt-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">
                    What and Why?
                  </h4>
                  <TopicBox title="Client vs Server Hooks" />
                  <TopicBox title="Usecases" />
                </div>
              </div>

              <div className="space-y-2">
                <TopicBox title="GitHub Actions" highlighted />
                <div className="space-y-2 mt-4">
                  <TopicBox title="YAML Syntax" />
                  <TopicBox title="Workflow Triggers" />
                  <TopicBox title="Scheduled Workflows" />
                  <TopicBox title="Workflow Runners" />
                  <TopicBox title="Workflow Context" />
                  <TopicBox title="Secrets and Env Vars" />
                  <TopicBox title="Caching Dependencies" />
                </div>
              </div>

              <div className="space-y-2">
                <TopicBox title="GitHub Projects" highlighted />
                <TopicBox title="Project Planning" />
                <TopicBox title="Kanban Boards" />
                <TopicBox title="Roadmaps" />
                <TopicBox title="Automations" />
                <div className="mt-4">
                  <TopicBox title="Working in a Team" highlighted />
                  <TopicBox title="Collaborators / Members" />
                  <TopicBox title="GitHub Organizations" />
                  <TopicBox title="Teams within Organization" />
                </div>
              </div>
            </div>

            {/* Row 5: Advanced Topics & Tools */}
            <div className="grid grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="border-2 border-gray-300 rounded-lg p-3 bg-white">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">
                    Undoing Changes
                  </h4>
                  <div className="space-y-1">
                    <TopicBox title="git revert" />
                    <TopicBox title="git reset" />
                    <TopicBox title="git mixed" />
                  </div>
                </div>
                <div className="mt-4">
                  <TopicBox title="GitHub CLI" highlighted />
                </div>
              </div>

              <div className="space-y-2">
                <div className="border-2 border-gray-300 rounded-lg p-3 bg-white">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">
                    Installation and Setup
                  </h4>
                  <TopicBox title="Git Reflog" />
                  <TopicBox title="Git Bisect" />
                  <TopicBox title="Git Worktree" />
                  <TopicBox title="Git Attributes" />
                  <TopicBox title="Git LFS" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-yellow-300 border-2 border-yellow-400 rounded-lg p-3 shadow-lg">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Advanced Git Topics
                  </h4>
                </div>
                <TopicBox title="Repository management" />
                <TopicBox title="Issue Management" />
                <TopicBox title="Pull Requests" />
                <TopicBox title="Use in Automation" />
              </div>

              <div className="space-y-2">
                <div className="bg-yellow-300 border-2 border-yellow-400 rounded-lg p-3 shadow-lg">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    GitHub Developer Tools
                  </h4>
                  <div className="space-y-2">
                    <TopicBox title="REST API" />
                    <TopicBox title="GraphQL API" />
                    <TopicBox title="GitHub API" />
                    <TopicBox title="Webhooks" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 6: GitHub Features */}
            <div className="grid grid-cols-4 gap-6">
              <div className="space-y-2">
                <TopicBox title="Creating Apps" highlighted />
                <TopicBox title="GitHub Copilot" />
                <TopicBox title="GitHub Mobile" />
                <TopicBox title="GitHub Marketplace" />
                <TopicBox title="GitHub Education" />
                <TopicBox title="GitHub Security" />
                <TopicBox title="GitHub Sponsors" />
              </div>

              <div className="space-y-2">
                <TopicBox title="GitHub Gists" />
                <TopicBox title="GitHub Packages" />
                <TopicBox title="GitHub Codespaces" />
              </div>

              <div className="space-y-2">
                <TopicBox title="More GitHub Features" highlighted />
                <TopicBox title="GitHub Pages" />
                <TopicBox title="Custom Domains" />
                <TopicBox title="Static Site Generators" />
                <TopicBox title="Deploying Static Websites" />
              </div>

              <div className="space-y-2">
                <TopicBox title="Storing Artifacts" />
                <TopicBox title="Workflow Status" />
                <TopicBox title="Marketplace Actions" />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-4 gap-6 mt-8">
              <div className="space-y-2">
                <TopicBox title="Student Developer Pack" />
                <TopicBox title="GitHub Classroom" />
                <TopicBox title="Campus Program" />
              </div>

              <div className="col-span-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center">
                <p className="text-lg font-semibold mb-4">
                  Continue learning with following roadmaps
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Frontend
                  </button>
                  <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Backend
                  </button>
                  <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    DevOps
                  </button>
                  <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Full Stack
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Panel */}
      {selectedTopic && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-2xl p-6 max-w-md border-2 border-blue-500 z-50">
          <button
            onClick={() => setSelectedTopic(null)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg mb-2 text-gray-900">
            {selectedTopic}
          </h3>
          <p className="text-gray-600 text-sm">
            This is a topic in the Git and GitHub learning roadmap. Click on
            different topics to explore the complete learning path from basics
            to advanced concepts.
          </p>
        </div>
      )}
    </div>
  );
};

export default GitRoadmap;
