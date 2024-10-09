import React, { useState, useRef } from "react";
import avatarImg from "../../assets/1.png";
import TextChange from "../TextChange";
import emailjs from '@emailjs/browser';
import { TextField, Button, styled } from '@mui/material';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour la popup

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm('service_3r7w5kt', 'template_5oc69kc', form.current, 'g--va6tvgTvTVWnfH')
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Email sent successfully thank you i will conatct you soon !');
            handleClosePopup(); // Ferme la popup après l'envoi
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    };

    return (
      <form ref={form} onSubmit={sendEmail} 
      
        style={{ display: 'flex', flexDirection: 'column' }}
        sx={{
          form: { 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          },
          inputField: { marginBottom: '1rem', display: 'flex' },
          submitButton: { marginTop: '1rem' },
        }}>
<h3 style={{
    marginBottom: '1rem',
    textAlign: 'center',
    color: 'rgb(0, 0, 0)',
    fontWeight: '800', // Changement ici
    width: '337px',
    maxWidth: '337px',
    fontSize: '19px', // Changement ici
    paddingTop: '0px',
    marginTop: '-50px'
}}>  
        Envoie-moi un message si tu as besoin de moi
        </h3>
        <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Votre nom"
            variant="outlined"
            type="text"
            name="user_name"
            required
            sx={{ marginRight: '1rem' }} // Spacing between fields
          />
          <TextField
            label=" Votre email "
            variant="outlined"
            type="email"
            name="user_email"
            required
          />
        </div>
        <TextField
          label="Envoie-moi un message "
          variant="outlined"
          multiline
          rows={4}
          name="message"
          required
          sx={{ marginBottom: '1rem' }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ alignSelf: 'flex-end' }}
        >
          Envoyer
        </Button>
        <Button
            variant="outlined"
            color="secondary"
            onClick={handleClosePopup}
            style={{
              width: '103px',
              maxWidth: '103px',
              paddingTop: '6px',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingBottom: '6px',
              marginTop: '-35px',
              color: 'rgb(235, 71, 74)',
              borderColor: 'rgb(250, 15, 27)',
              boxShadow: 'rgb(255, 0, 0) 0px 0px 0px'
            }}
          >
            Annuler
          </Button>
      </form>
    );
  };

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
        Bienvenue dans mon portfolio ! Je suis diplômé en informatique et passionné par le développement web et le graphisme.
        J'ai des compétences en programmation, design et création de logos et d'affiches promotionnelles.
        </p>
        <button
          className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={handleOpenPopup}
        >
          Contactez-moi
        </button>
        <button
          className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => window.location.href = 'https://www.figma.com/proto/ASofpGXGRWmalDHoScOsQ1/portfolio-samar?t=Bl7NYGeceTrRzmSk-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2'} 
          style={{ marginLeft: '24px' }} // Correction ici
        >
Consultez mon portfolio Figma
        </button>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
              <h2 className="text-lg font-bold mb-4">Contactez-moi</h2>
              <EmailForm />
            </div>
          </div>
        )}
      </div>
      <div>
      <img
  className=""
  src={avatarImg}
  alt="Avatar"
  style={{ width: '471px', maxWidth: '471px', marginLeft: '2px', marginRight: '78px', borderTopLeftRadius: '148px', borderTopRightRadius: '148px', borderBottomRightRadius: '148px', borderBottomLeftRadius: '148px' }}
/>
      </div>
    </div>
  );
};

export default Home;
