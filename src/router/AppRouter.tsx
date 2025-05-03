import { Navigate, Route, Routes } from "react-router";
import App from "@components/App/App";
import Project1Page from "@project1/pages/Project1Page/Project1Page";
import Project2Page from "../project2/pages/Project2Page/Project2Page";
import Project3Page from "../project3/pages/Project3Page/Project3Page";
import Project4Page from "../project4/pages/Project4Page/Project4Page";
import Project5Page from "../project5/pages/Project5Page/Project5Page";
import Project6Page from "../project6/pages/Project6Page/Project6Page";
import Project7Page from "../project7/pages/Project7Page/Project7Page";
import Project8Page from "../project8/pages/Project8Page/Project8Page";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/project1/" />} />
        <Route path="project1/:sectionId?" element={<Project1Page />} />
        <Route path="project2/:sectionId?" element={<Project2Page />} />
        <Route path="project3/:sectionId?" element={<Project3Page />} />
        <Route path="project4/:sectionId?" element={<Project4Page />} />
        <Route path="project5/:sectionId?" element={<Project5Page />} />
        <Route path="project6/:sectionId?" element={<Project6Page />} />
        <Route path="project7/:sectionId?" element={<Project7Page />} />
        <Route path="project8/:sectionId?" element={<Project8Page />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
