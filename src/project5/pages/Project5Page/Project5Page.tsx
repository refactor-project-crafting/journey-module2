import { useParams } from "react-router";
import { useFlagsmith } from "flagsmith/react";
import Project5Intro from "../../components/Project5Intro/Project5Intro";
import Project5UserStories from "../../components/Project5UserStories/Project5UserStories";
import Project5Requirements from "../../components/Project5Requirements/Project5Requirements";
import Project5Backlog from "../../components/Project5Backlog/Project5Backlog";

const Project5Page: React.FC = () => {
  const { sectionId } = useParams<{
    sectionId: Section;
  }>();

  const flagsmith = useFlagsmith();

  const publishedProjectNumber = Number(flagsmith.getValue("project-number"));

  if (publishedProjectNumber < 5) {
    return null;
  }

  type Section = "user-stories" | "requirements" | "sprint-backlog";

  if (!sectionId) {
    return <Project5Intro />;
  }

  if (sectionId === "user-stories") {
    return <Project5UserStories />;
  }

  if (sectionId === "requirements") {
    return <Project5Requirements />;
  }

  if (sectionId === "sprint-backlog") {
    return <Project5Backlog />;
  }
};

export default Project5Page;
