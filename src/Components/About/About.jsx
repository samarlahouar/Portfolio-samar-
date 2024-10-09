import React from "react";
import AboutImg from "../../assets/2.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">À propos</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
        <img
  className="md:h-80"
  src={AboutImg}
  alt="About img"
  style={{
    marginRight: '134px',
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    borderBottomRightRadius: '50px',
    borderBottomLeftRadius: '50px',
  }}
/>

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Développeuse  front-end
                </h1>
                <p className="text-sm md:text-md leading-tight">
                J'ai développé des interfaces utilisateur interactives avec ReactJS, HTML et CSS. Je possède des connaissances solides dans ces langages, me permettant de créer des applications web dynamiques et responsives.

                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Développeuse  de base de données
                </h1>
                <p className="text-sm md:text-md leading-tight">
                J'ai de l'expérience dans l'utilisation de MongoDB pour la gestion et la manipulation des données, ce qui me permet de créer des bases de données performantes et évolutives pour mes applications.

                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Développeuse  back-end
                </h1>
                <p className="text-sm md:text-md leading-tight">
                En tant que Développeuse  backend, j'ai travaillé avec Node.js, Express.js et JavaScript pour créer des API robustes et sécurisées, facilitant la communication entre le frontend et le backend de mes applications.

                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
