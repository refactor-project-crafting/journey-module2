import { useParams } from "react-router";
import { useFlagsmith } from "flagsmith/react";
import Project4Intro from "../../components/Project4Intro/Project4Intro";
import Project4UserStories from "../../components/Project4UserStories/Project4UserStories";
import Project4UI from "../../components/Project4UI/Project4UI";
import Project4Requirements from "../../components/Project4Requirements/Project4Requirements";
import Project4ProductBacklog from "../../components/Project4ProductBacklog/Project4ProductBacklog";

const Project4Page: React.FC = () => {
  const { sectionId } = useParams<{
    sectionId: Section;
  }>();

  const flagsmith = useFlagsmith();

  const publishedProjectNumber = Number(flagsmith.getValue("project-number"));

  if (publishedProjectNumber < 4) {
    return null;
  }

  type Section = "user-stories" | "ui" | "requirements" | "product-backlog";

  if (!sectionId) {
    return <Project4Intro />;
  }

  if (sectionId === "user-stories") {
    return <Project4UserStories />;
  }

  if (sectionId === "ui") {
    return <Project4UI />;
  }

  if (sectionId === "requirements") {
    return <Project4Requirements />;
  }

  if (sectionId === "product-backlog") {
    return <Project4ProductBacklog />;
  }
};

export default Project4Page;
