import { useParams } from "react-router";
import { useFlagsmith } from "flagsmith/react";
import Project6Intro from "../../components/Project6Intro/Project6Intro";
import Project6UserStories from "../../components/Project6UserStories/Project6UserStories";
import Project6Requirements from "../../components/Project6Requirements/Project6Requirements";
import Project6Backlog from "../../components/Project6Backlog/Project6Backlog";

const Project6Page: React.FC = () => {
  const { sectionId } = useParams<{
    sectionId: Section;
  }>();

  const flagsmith = useFlagsmith();

  const publishedProjectNumber = Number(flagsmith.getValue("project-number"));

  if (publishedProjectNumber < 6) {
    return null;
  }

  type Section = "user-stories" | "requirements" | "sprint-backlog";

  if (!sectionId) {
    return <Project6Intro />;
  }

  if (sectionId === "user-stories") {
    return <Project6UserStories />;
  }

  if (sectionId === "requirements") {
    return <Project6Requirements />;
  }

  if (sectionId === "sprint-backlog") {
    return <Project6Backlog />;
  }
};

export default Project6Page;
