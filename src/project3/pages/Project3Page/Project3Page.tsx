import { useParams } from "react-router";
import { useFlagsmith } from "flagsmith/react";
import Project3Intro from "../../components/Project3Intro/Project3Intro";
import Project3UserStories from "../../components/Project3UserStories/Project3UserStories";
import Project3ProductBacklog from "../../components/Project3ProductBacklog/Project3ProductBacklog";

const Project3Page: React.FC = () => {
  const { sectionId } = useParams<{
    sectionId: Section;
  }>();

  const flagsmith = useFlagsmith();

  const publishedProjectNumber = Number(flagsmith.getValue("project-number"));

  if (publishedProjectNumber < 3) {
    return null;
  }

  type Section = "user-stories" | "product-backlog";

  if (!sectionId) {
    return <Project3Intro />;
  }

  if (sectionId === "user-stories") {
    return <Project3UserStories />;
  }

  if (sectionId === "product-backlog") {
    return <Project3ProductBacklog />;
  }
};

export default Project3Page;
