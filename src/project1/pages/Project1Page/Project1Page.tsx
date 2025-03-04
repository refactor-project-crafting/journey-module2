import { useParams } from "react-router";
import Project1Intro from "@project1/components/Project1Intro/Project1Intro";
import Project1Requirements from "../../components/Project1Requirements/Project1Requirements";
import Project1Tests from "../../components/Project1Tests/Project1Tests";
import Project1ProductBacklog from "../../components/Project1ProductBacklog/Project1ProductBacklog";
import Project1Sprint1Backlog from "../../components/Project1Sprint1Backlog/Project1Sprint1Backlog";
import Project1Sprint2Backlog from "../../components/Project1Sprint2Backlog/Project1Sprint2Backlog";
import Project1Troubleshooting from "../../components/Project1Troubleshooting/Project1Troubleshooting";

const Project1Page: React.FC = () => {
  const { sectionId } = useParams<{
    sectionId: Section;
  }>();

  type Section =
    | "requirements"
    | "tests"
    | "product-backlog"
    | "sprint1-backlog"
    | "sprint2-backlog"
    | "troubleshooting";

  if (!sectionId) {
    return <Project1Intro />;
  }

  if (sectionId === "requirements") {
    return <Project1Requirements />;
  }

  if (sectionId === "tests") {
    return <Project1Tests />;
  }

  if (sectionId === "product-backlog") {
    return <Project1ProductBacklog />;
  }

  if (sectionId === "sprint1-backlog") {
    return <Project1Sprint1Backlog />;
  }

  if (sectionId === "sprint2-backlog") {
    return <Project1Sprint2Backlog />;
  }

  if (sectionId === "troubleshooting") {
    return <Project1Troubleshooting />;
  }
};

export default Project1Page;
