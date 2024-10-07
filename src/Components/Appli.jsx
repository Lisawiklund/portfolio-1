import React from 'react';
import './Appli.css';  

const Appli = () => {
  const apps = [
    {
      title: "KlimatKoll App",
      description: "En app för att hålla koll på klimatpåverkan skapad med React.",
      link: "https://klimatkoll.github.io/KlimatKoll-App/",
      github: "https://github.com/klimatkoll/KlimatKoll-App",
      image: "/klimat-app.png"
    },
    {
      title: "Boka Hotell App",
      description: "En hotellbokningsapp skapad med React.",
      link: "https://lisawiklund.github.io/hotell-app-20244/",
      github: "https://github.com/lisawiklund/hotell-app-20244", 
      image: "/hotell-app.png"
    },
    {
      title: "Filmsökningsapp",
      description: "En app för att söka efter filmer och visa detaljer, byggd med React. Data hämtas från The Movie Database (TMDb) API.",
      link: "https://react-vwf7fw.stackblitz.io/",  
      github: "https://stackblitz.com/edit/react-vwf7fw?file=src%2FApp.js",  
      image: "/MovieSearch.png" 
    },
    {
      title: "Kursinformation",
      description: "Appen är byggd med HTML, CSS och JavaScript och använder fetch-API för att hämta kurs- och quizdata från en extern server.",
      extraDescription: [
        "Testa appen med följande inloggningsuppgifter:",
        "Användarnamn: silverbear462",
        "Lösenord: trinidad",

        "All data kan hittas här:",
         "https://webbred2.utb.hb.se/~fewe/api/api.php?data=students"
      ],
      link: "https://lisawiklund.github.io/kursinformation-app-/", 
      github: "https://github.com/Lisawiklund/kursinformation-app-",  
      image: "/Kursinformation.png" 
    }
  ];

  return (
    <div className="appli-container">
      <h1>Mina Appar</h1>
      <div className="projects-grid">
        {apps.map((app, index) => (
          <div className="project-card" key={index}>
            <img
              src={app.image}
              alt={app.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{app.title}</h3>
              <p>{app.description}</p>
              {/* Rendera flera rader av extraDescription om de finns */}
              {app.extraDescription && app.extraDescription.map((line, i) => (
                <p key={i}>
                  {/* Kontrollera om raden innehåller "Användarnamn" eller "Lösenord" för att fetstila */}
                  {line.includes("Användarnamn") ? (
                    <>Användarnamn: <strong>silverbear462</strong></>
                  ) : line.includes("Lösenord") ? (
                    <>Lösenord: <strong>trinidad</strong></>
                  ) : line.includes("https") ? (
                    <a href={line} target="_blank" rel="noopener noreferrer">{line}</a>
                  ) : (
                    line
                  )}
                </p>
              ))}
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
               Se live version
              </a>
              <a
                href={app.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link" 
              >
                Se koden i Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appli;
