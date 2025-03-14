import { useParams } from "react-router";
import { useFlagsmith } from "flagsmith/react";
import Project3Intro from "../../components/Project3Intro/Project3Intro";
import Project3UserStories from "../../components/Project3UserStories/Project3UserStories";
import Project3ProductBacklog from "../../components/Project3ProductBacklog/Project3ProductBacklog";
import Project3Sprint1Backlog from "../../components/Project3Sprint1Backlog/Project3Sprint1Backlog";
import Project3Requirements from "../../components/Project3Requirements/Project3Requirements";

const Project3Page: React.FC = () => {
  const { sectionId } = useParams<{
    sectionId: Section;
  }>();

  const flagsmith = useFlagsmith();

  const publishedProjectNumber = Number(flagsmith.getValue("project-number"));

  if (publishedProjectNumber < 3) {
    return null;
  }

  type Section =
    | "user-stories"
    | "product-backlog"
    | "sprint-1-backlog"
    | "requirements";

  if (!sectionId) {
    return <Project3Intro />;
  }

  if (sectionId === "user-stories") {
    return <Project3UserStories />;
  }

  if (sectionId === "product-backlog") {
    return <Project3ProductBacklog />;
  }

  if (sectionId === "sprint-1-backlog") {
    return <Project3Sprint1Backlog />;
  }

  if (sectionId === "requirements") {
    return <Project3Requirements />;
  }
};

export default Project3Page;
