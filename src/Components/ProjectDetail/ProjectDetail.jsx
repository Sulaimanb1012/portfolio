import { useParams, useNavigate } from "react-router-dom";
import Services_Data from "../../assets/services_data";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = Services_Data.find(p => p.s_no.toString() === id);
  if (!project) return <p>Project niet gevonden.</p>;

  return (
    <div className="mywork">
      {/* Terug naar Services-lijst */}
      <button className="back-button" onClick={() => navigate("/")}>
        &larr; Terug naar projecten
      </button>

      <div className="mywork-title">
        <h1>{project.s_name}</h1>
      </div>

      <div className="mywork-container">
        <img src={project.s_img} alt={project.s_name} />
      </div>

      <div className="mywork-description">
        <p>{project.s_desc}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;

