export const roleGroups = [
  {
    name: "Team Owners",
    desc: "Owns team settings and permissions.",
    overview:
      "Responsible for overall team ownership, governance and access control.",
    responsibilities: [
      "Manage team settings",
      "Manage access",
      "Approve changes"
    ],
    permissions: [
      "Team Administration",
      "User Management",
      "Security Settings"
    ],
    recommendedFor: [
      "Engineering Manager",
      "Team Lead",
      "Scrum Master"
    ],
    users: ["John Smith", "Sarah Lee"]
  },

  {
    name: "Board Users",
    desc: "Works with boards and work items.",
    overview:
      "Provides access to boards, dashboards and work item management.",
    responsibilities: [
      "Update work items",
      "Track progress",
      "Participate in sprint planning"
    ],
    permissions: [
      "Boards",
      "Dashboards",
      "Work Items"
    ],
    recommendedFor: [
      "Developer",
      "Business Analyst",
      "QA"
    ],
    users: ["Mike Johnson", "Lisa Brown"]
  },

  {
    name: "Product Managers",
    desc: "Owns product backlog.",
    overview:
      "Responsible for feature prioritization and backlog ownership.",
    responsibilities: [
      "Prioritize backlog",
      "Define requirements",
      "Approve stories"
    ],
    permissions: [
      "Backlog Management",
      "Feature Planning"
    ],
    recommendedFor: [
      "Product Manager",
      "Product Owner"
    ],
    users: ["Mike Johnson"]
  },

  {
    name: "Prod Release Managers",
    desc: "Approves production deployments.",
    overview:
      "Responsible for validating and approving production releases.",
    responsibilities: [
      "Approve deployment",
      "Validate readiness",
      "Coordinate releases"
    ],
    permissions: [
      "Release Approvals",
      "Environment Access"
    ],
    recommendedFor: [
      "Release Manager",
      "Engineering Manager"
    ],
    users: []
  },

  {
    name: "Testers",
    desc: "Validates product quality.",
    overview:
      "Responsible for testing features and validating defects.",
    responsibilities: [
      "Execute tests",
      "Validate bugs",
      "Verify acceptance criteria"
    ],
    permissions: [
      "Test Plans",
      "Test Suites"
    ],
    recommendedFor: [
      "QA Engineer",
      "SDET"
    ],
    users: ["Emma Martin"]
  }
];
