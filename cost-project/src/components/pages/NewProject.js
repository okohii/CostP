import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";
import { useNavigate } from "react-router-dom";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    // Initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // redirect
        navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } })
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Novo Projeto</h1>
      <p>Crie seu projeto para adicionar serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
