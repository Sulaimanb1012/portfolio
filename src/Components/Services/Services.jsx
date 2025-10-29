import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import Services_Data from "../../assets/services_data";
import ProjectCard from "../Project/ProjectCard";

const Services = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = Services_Data.filter((service) =>
    service.s_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>Mijn Projecten</h1>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Zoek een project..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="services-container">
        {filteredServices.map((service) => (
          <ProjectCard
            key={service.s_no}
            s_no={service.s_no}
            s_name={service.s_name}
            s_desc={service.s_desc}
            onReadMore={() => navigate(`/project/${service.s_no}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
