import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaUserTie } from "react-icons/fa"; // Icône pour COMPASS IT
import { SiMongodb } from "react-icons/si";
import { FaCity } from "react-icons/fa"; // Icône pour Municipality
import { FaClipboardList } from "react-icons/fa"; // Icône pour les projets académiques

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Expérience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <FaUserTie color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Intern, COMPASS IT</h2>
              <p className="text-sm leading-tight font-thin">
              Septembre 2023 - Octobre 2023
              </p>
              <ul className="text-sm p-2">
              <li>- Création d'un logo, d'une affiche publicitaire et d'une carte de visite pour une entreprise.</li>
              <li>- Développement d'un front-end pour une application web de prise de rendez-vous en ligne pour un vétérinaire.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          <FaCity color="#E50914" size={50} />
              <span className="text-white">
              <h2 className="leading-tight">Intern, Municipality  Hammam Sousse</h2>
              <p className="text-sm leading-tight font-thin">
              Juillet 2023 - Septembre 2023
              </p>
              <ul className="text-sm p-2">
              <li>- Maintenance du site web.</li>
              <li>- Gestion des réseaux sociaux.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaClipboardList color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Projet Académique, Gestion d'activité des entreprises</h2>
              <p className="text-sm leading-tight font-thin">
                Projet académique [Fin d'année] avec l'entreprise YOOREED
              </p>
              <ul className="text-sm p-2">
                <li>- Développement d'une application web pour la gestion des activités de l'entreprise backend et front end .</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaClipboardList color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Projet Académique, Foodis</h2>
              <p className="text-sm leading-tight font-thin">
              Projet académique [Projet de validation]
                            </p>
              <ul className="text-sm p-2">
                <li>- Développement d'un front-end pour un site web de restaurant traditionnel permettant de commander en ligne.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
