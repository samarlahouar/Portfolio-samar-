import React from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../../assets/Capture d'écran 2024-05-27 161711.png"; 
import img2 from "../../assets/dash.png"; // Importez votre autre image
import img3 from "../../assets/vet.png"; // Importez votre autre image
import img4 from "../../assets/emp.png"; // Importez votre autre image




const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projets</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Site web pour l'entreprise de gestion des activités des entreprises "
          main="Ce site est destiné aux visiteurs pour découvrir l'emplacement, les contacts,envoyer émail pour la socité .. ainsi qu'aux employés qui peuvent accéder à leur compte et
          Outils utiliser :  Reactjs , Css ,Bootstrap , javaScript , nodeJS , mongo DB "
          link="https://github.com/samarlahouar/frontend-de-l-application-v2"
          image={img1} // Passez l'image ici
        />
        <ProjectCard
          title="Dashboard Admin "
          main="Dans cette dashbord l'admin gére les activités de l'entreprise les Outils utiliser :  Reactjs , Css ,Bootstrap , javaScript , nodeJS , mongo DB  "
          link="https://github.com/samarlahouar/dashboard-admin-v2"
          image={img2} // Passez l'image ici
          
        />
        <ProjectCard
          title="Site web vétérinaire "
          main=" Développement le front-end d'une site web vétérinaire pour prise de
rendez-vous en ligne , les Outils utiliser : HTML , Css , javaScript"
link="https://github.com/samarlahouar/v-terinaire-v2-"
image={img3} // Passez l'image ici


        />
          <ProjectCard
          title="Dashborad employée  "
          main="Dans ce tableau de bord, l'employé peut toujours être à la une s'il y a une réunion ou un événement. De plus, il peut prendre des rendez-vous en ligne ou envoyer une réclamation au directeur s'il le souhaite , les Outils utiliser :  Reactjs , Css ,Bootstrap , javaScript , nodeJS , mongo DB."
link="https://github.com/samarlahouar/dashboard-employe-v2"
image={img4} // Passez l'image ici


        />
      </div>
    </div>
  );
};

export default Projects;
