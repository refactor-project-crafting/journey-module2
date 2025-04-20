import { useParams } from "react-router";
import { useFlagsmith } from "flagsmith/react";
import Project7Intro from "../../components/Project7Intro/Project7Intro";
import Project7UserStories from "../../components/Project7UserStories/Project7UserStories";
import Project7Requirements from "../../components/Project7Requirements/Project7Requirements";
import Project7Backlog from "../../components/Project7Backlog/Project7Backlog";

const Project7Page: React.FC = () => {
  const { sectionId } = useParams<{
    sectionId: Section;
  }>();

  const flagsmith = useFlagsmith();

  const publishedProjectNumber = Number(flagsmith.getValue("project-number"));

  if (publishedProjectNumber < 7) {
    return null;
  }

  type Section = "user-stories" | "requirements" | "sprint-backlog";

  if (!sectionId) {
    return <Project7Intro />;
  }

  if (sectionId === "user-stories") {
    return <Project7UserStories />;
  }

  if (sectionId === "requirements") {
    return <Project7Requirements />;
  }

  if (sectionId === "sprint-backlog") {
    return <Project7Backlog />;
  }
};

export default Project7Page;
