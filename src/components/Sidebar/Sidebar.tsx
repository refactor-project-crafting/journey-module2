import { NavLink, useLocation } from "react-router";
import { useFlagsmith } from "flagsmith/react";
import useConsoleDebug from "../../debug/useConsoleDebug";
import { useAuth } from "../../auth/useAuth";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const flagsmith = useFlagsmith();
  const debug = useConsoleDebug();
  const { logout } = useAuth();

  const location = useLocation();

  const publishedProjectNumber = Number(flagsmith.getValue("project-number"));
  debug("Project publicado: ", publishedProjectNumber);

  if (publishedProjectNumber === 0) {
    logout();
    return;
  }

  const currentPath = location.pathname.replace(/\/$/, "");

  if (currentPath === "") {
    return;
  }

  const currentProjectNumber = +currentPath
    .split("/")[1]
    .replace("project", "");

  return (
    <aside className="main-sidebar">
      <strong>Módulo 2: Journey</strong>
      <nav className="main-navigation">
        <ul className={`${publishedProjectNumber > 1 ? "passed" : ""}`}>
          <li>
            <NavLink end to="/project1/">
              Proyecto 1: Text Analyzer
            </NavLink>
            <ul className={currentProjectNumber === 1 ? "open" : ""}>
              <li>
                <NavLink end to="/project1/requirements/">
                  Requirements
                </NavLink>
              </li>
              <li>
                <NavLink end to="/project1/tests/">
                  Tests
                </NavLink>
              </li>
              <li>
                <NavLink end to="/project1/product-backlog/">
                  Product backlog
                </NavLink>
              </li>
              <li>
                <NavLink end to="/project1/sprint1-backlog/">
                  Sprint 1 backlog
                </NavLink>
              </li>
              <li>
                <NavLink end to="/project1/sprint2-backlog/">
                  Sprint 2 backlog
                </NavLink>
              </li>
              <li>
                <NavLink end to="/project1/troubleshooting/">
                  Troubleshooting
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
