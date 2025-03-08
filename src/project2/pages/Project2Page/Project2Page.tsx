import { useParams } from "react-router";
import Project2Intro from "../../components/Project2Intro/Project2Intro";
import Project2Requirements from "../../components/Project2Requirements/Project2Requirements";

const Project2Page: React.FC = () => {
  const { sectionId } = useParams<{
    sectionId: Section;
  }>();

  type Section =
    | "requirements"
    | "product-backlog"
    | "sprint1-backlog"
    | "sprint2-backlog";

  if (!sectionId) {
    return <Project2Intro />;
  }

  if (sectionId === "requirements") {
    return <Project2Requirements />;
  }
};

export default Project2Page;
