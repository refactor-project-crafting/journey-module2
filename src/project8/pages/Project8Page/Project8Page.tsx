import { useParams } from "react-router";
import { useFlagsmith } from "flagsmith/react";
import Project8Intro from "../../components/Project8Intro/Project8Intro";
import Project8UserStories from "../../components/Project8UserStories/Project8UserStories";
import Project8Requirements from "../../components/Project8Requirements/Project8Requirements";
import Project8Backlog from "../../components/Project8Deliverables/Project8Deliverables";

const Project8Page: React.FC = () => {
  const { sectionId } = useParams<{
    sectionId: Section;
  }>();

  const flagsmith = useFlagsmith();

  const publishedProjectNumber = Number(flagsmith.getValue("project-number"));

  if (publishedProjectNumber < 8) {
    return null;
  }

  type Section = "user-stories" | "requirements" | "deliverables";

  if (!sectionId) {
    return <Project8Intro />;
  }

  if (sectionId === "user-stories") {
    return <Project8UserStories />;
  }

  if (sectionId === "requirements") {
    return <Project8Requirements />;
  }

  if (sectionId === "deliverables") {
    return <Project8Backlog />;
  }
};

export default Project8Page;
