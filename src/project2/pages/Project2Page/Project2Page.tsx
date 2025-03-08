import { useParams } from "react-router";
import Project2Intro from "../../components/Project2Intro/Project2Intro";
import Project2Requirements from "../../components/Project2Requirements/Project2Requirements";
import Project2UserStories from "../../components/Project2UserStories/Project2UserStories";
import Project2ProductBacklog from "../../components/Project2ProductBacklog/Project2ProductBacklog";
import Project2Sprint1Backlog from "../../components/Project2Sprint1Backlog/Project2Sprint1Backlog";
import Project2Sprint2Backlog from "../../components/Project2Sprint2Backlog/Project2Sprint2Backlog";
import Project2UiDesign from "../../components/Project2UiDesign/Project2UiDesign";
import { useFlagsmith } from "flagsmith/react";

const Project2Page: React.FC = () => {
  const { sectionId } = useParams<{
    sectionId: Section;
  }>();

  const flagsmith = useFlagsmith();

  const publishedProjectNumber = Number(flagsmith.getValue("project-number"));

  if (publishedProjectNumber < 2) {
    return null;
  }

  type Section =
    | "requirements"
    | "user-stories"
    | "ui-design"
    | "product-backlog"
    | "sprint1-backlog"
    | "sprint2-backlog";

  if (!sectionId) {
    return <Project2Intro />;
  }

  if (sectionId === "requirements") {
    return <Project2Requirements />;
  }

  if (sectionId === "user-stories") {
    return <Project2UserStories />;
  }

  if (sectionId === "ui-design") {
    return <Project2UiDesign />;
  }

  if (sectionId === "product-backlog") {
    return <Project2ProductBacklog />;
  }

  if (sectionId === "sprint1-backlog") {
    return <Project2Sprint1Backlog />;
  }

  if (sectionId === "sprint2-backlog") {
    return <Project2Sprint2Backlog />;
  }
};

export default Project2Page;
