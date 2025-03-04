import { Navigate, Route, Routes } from "react-router";
import App from "@components/App/App";
import Project1Page from "@project1/pages/Project1Page/Project1Page";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/project1/" />} />
        <Route path="project1/:sectionId?" element={<Project1Page />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
