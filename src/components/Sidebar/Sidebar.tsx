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
        {publishedProjectNumber >= 2 && (
          <ul className={`${publishedProjectNumber > 2 ? "passed" : ""}`}>
            <li>
              <NavLink end to="/project2/">
                Proyecto 2: Music Oasis
              </NavLink>
              <ul className={currentProjectNumber === 2 ? "open" : ""}>
                <li>
                  <NavLink end to="/project2/requirements/">
                    Requirements
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/project2/user-stories">User Stories</NavLink>
                </li>
                <li>
                  <NavLink to="/project2/ui-design">UI Design</NavLink>
                </li>
                <li>
                  <NavLink to="/project2/product-backlog">
                    Product Backlog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/project2/sprint1-backlog">
                    Sprint 1 Backlog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/project2/sprint2-backlog">
                    Sprint 2 Backlog
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        )}
        {publishedProjectNumber >= 3 && (
          <ul className={`${publishedProjectNumber > 3 ? "passed" : ""}`}>
            <li>
              <NavLink end to="/project3/">
                Proyecto 3: Minesweeper
              </NavLink>
              <ul className={currentProjectNumber === 3 ? "open" : ""}>
                <li>
                  <NavLink end to="/project3/user-stories/">
                    User Stories
                  </NavLink>
                </li>
                <li>
                  <NavLink end to="/project3/product-backlog/">
                    Product Backlog
                  </NavLink>
                </li>
                <li>
                  <NavLink end to="/project3/sprint-1-backlog/">
                    Sprint 1 Backlog
                  </NavLink>
                </li>
                <li>
                  <NavLink end to="/project3/requirements/">
                    Requirements
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        )}
        {publishedProjectNumber >= 4 && (
          <ul className={`${publishedProjectNumber > 4 ? "passed" : ""}`}>
            <li>
              <NavLink end to="/project4/">
                Proyecto 4: Game of Thrones
              </NavLink>
              <ul className={currentProjectNumber === 4 ? "open" : ""}>
                <li>
                  <NavLink end to="/project4/user-stories/">
                    User Stories
                  </NavLink>
                </li>
                <li>
                  <NavLink end to="/project4/ui/">
                    UI
                  </NavLink>
                </li>
                <li>
                  <NavLink end to="/project4/requirements/">
                    Requirements
                  </NavLink>
                </li>
                <li>
                  <NavLink end to="/project4/product-backlog/">
                    Product Backlog
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
