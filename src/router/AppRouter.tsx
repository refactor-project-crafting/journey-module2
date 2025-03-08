import { Navigate, Route, Routes } from "react-router";
import App from "@components/App/App";
import Project1Page from "@project1/pages/Project1Page/Project1Page";
import Project2Page from "../project2/pages/Project2Page/Project2Page";
import Project3Page from "../project3/pages/Project3Page/Project3Page";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/project1/" />} />
        <Route path="project1/:sectionId?" element={<Project1Page />} />
        <Route path="project2/:sectionId?" element={<Project2Page />} />
        <Route path="project3/:sectionId?" element={<Project3Page />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
