import { useState } from "react";
import { roleGroups } from "./roles";
import "./RoleAssignments.css";

export default function RoleAssignments() {
  const [roles, setRoles] = useState(roleGroups);
  const [openRoles, setOpenRoles] = useState(["Team Owners"]);
  const [selectedRole, setSelectedRole] = useState(null);

  const toggleRole = (name) => {
    setOpenRoles((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]
    );
  };

  const collapseAll = () => setOpenRoles([]);
  const expandAll = () => setOpenRoles(roles.map((r) => r.name));

  return (
    <div className="page">
      <header className="header">
        <h1>ADO Team Onboarding</h1>
        <p>Step 2 of 3 - Role Assignments</p>
      </header>

      <div className="summary">
        <div className="summaryCard">
          <h2>{roles.reduce((sum, r) => sum + r.users.length, 0)}</h2>
          <p>Assigned Users</p>
        </div>

        <div className="summaryCard">
          <h2>{roles.filter((r) => r.users.length > 0).length} / {roles.length}</h2>
          <p>Roles Configured</p>
        </div>

        <button onClick={openRoles.length ? collapseAll : expandAll}>
          {openRoles.length ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className="layout">
        <main className="roles">
          {roles.map((role) => {
            const isOpen = openRoles.includes(role.name);

            return (
              <div className="roleCard" key={role.name}>
                <div className="roleHeader" onClick={() => toggleRole(role.name)}>
                  <span>{isOpen ? "⌄" : "›"}</span>
                  <strong>{role.name}</strong>
                  <p>{role.desc}</p>

                  <button
                    className="infoBtn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRole(role);
                    }}
                  >
                    ⓘ
                  </button>

                  <span>{role.users.length} Users</span>
                </div>

                {isOpen && (
                  <div className="roleBody">
                    <input placeholder="Search user..." />

                    {role.users.map((user) => (
                      <div className="chip" key={user}>
                        {user} <button>×</button>
                      </div>
                    ))}

                    <button className="addBtn">+ Add User</button>
                  </div>
                )}
              </div>
            );
          })}
        </main>

        {selectedRole && (
          <aside className="infoPanel">
            <button className="closeBtn" onClick={() => setSelectedRole(null)}>
              ×
            </button>

            <h2>Role Information</h2>
            <h3>{selectedRole.name}</h3>
            <p>{selectedRole.overview}</p>

            <h4>Responsibilities</h4>
            <ul>
              <li>Manage assigned access</li>
              <li>Support team governance</li>
              <li>Review role permissions</li>
            </ul>

            <h4>Recommended For</h4>
            <div className="tags">
              <span>Team Lead</span>
              <span>Manager</span>
              <span>Owner</span>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
