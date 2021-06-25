import React, {Component} from 'react';

// Components
import Header from '../components/Header'
import ButtonLink from "./ButtonLink";
import CardResponsible from "./CardResponsible";
import TagChart from "./TagChart";
import BilanProd from "./BilanProd";
import Footer from "./Footer";

// Style
import '../sass/style.scss';

// Img
import lightbulb from '../img/bulb.svg'
import sensibiliser from "../img/sensibiliser.svg";
import informer from "../img/informer.svg";
import transmettre from "../img/transmettre.svg";
import earth from "../img/earth.svg";
import TmpChart from "../img/tmpchart.svg"



const txtSensibiliser = 'Il est important de sensibiliser les personnes autour de soi concernant la consommation énergétique.';
const txtInformer = 'Certaines personnes sont sensibles mais ne se rendent pas compte de l’importance de leur consommation.';
const txtTransmettre = 'Les personnes peuvent transmettre leur savoir aux autres pour communiquer sur leur manière de consommer.';

const bilanTxt = "34% de la production aujourd'hui";
const bilanTxt2 = "Bilan CO2 : 2200 WW soit 5 allers-retours Paris-Marseille";

const imgSensibiliser = sensibiliser;
const imgInformer = informer;
const imgTransmettre = transmettre;

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="bulb-section">
          <div className="textContainer">
            <div className='textWrapper'>
              <h2>Teste ta <br/>consommation <br/>énergétique</h2>
              <p>Nombreux sont les individus qui ne sont pas conscients de leurs utilisation énérgétique</p>
              <ButtonLink txt="JE TESTE" />
            </div>
          </div>
          <div className="bulb-container">
            <img src={lightbulb} alt="lightbulb"/>
          </div>
        </section>
        <section id="responsible-section" className="container">
          <h2 className="roboto">ETRE RESPONSABLE</h2>
          <div className='card-container'>
            <CardResponsible title='SENSIBILISER' txt={txtSensibiliser} img={imgSensibiliser}/>
            <CardResponsible title='INFORMER' txt={txtInformer} img={imgInformer}/>
            <CardResponsible title='TRANSMETTTRE' txt={txtTransmettre} img={imgTransmettre}/>
          </div>
        </section>
        <section id="pourquoi-informer">
          <div className='grey-band'></div>
          <div className="flex container">
            <div className="txt-container">
              <h3 className="roboto">Pourquoi s'informer ?</h3>
              <p className="poppins">
                La consommation d’énergie est une des plus grandes préoccupations de notre environnement.
                la production d’électricité est responsable de 35% des émissions de co2 concernant l’activité humaine dans le monde.
                elle est en constante augmentation et peu de personnes s’en rendent compte. cela ne concerne pas seulement les grands industriels mais également
                chacun d’entre nous dans notre utilisation d’énergie au quotidien : le chauffage, l’éclairage, les déplacements, les recherches sur internet…vous
                pouvez découvrir en temps réel la consommation française d’électricité des énergies les plus utilisées.
              </p>
              <ButtonLink txt="EN SAVOIR PLUS"/>
            </div>
            <div className="img-container">
              <img src={earth} alt="image de la terre"/>
            </div>
          </div>
          <div className='grey-band'></div>
        </section>
        <section id="pourquoi-greeniser">
          <div className="container">
            <div className="title-container">
              <h3>Pourquoi Greeniser ?</h3>
              <p className="poppins">GREENISER a pour vocation de sensibiliser sur  la consommation énergétique chacun.</p>
            </div>
            <div className="txt-container">
              <p className="poppins">
                La consommation d’énergie est une des plus grandes préoccupations de notre environnement. La production d’électricité est responsable de 35% des
                émissions de CO2 concernant l’activité humaine dans le monde. Elle est en constante augmentation et peu de personnes s’en rendent compte.
                Cela ne concerne pas seulement les grands industriels mais également chacun d’entre nous dans notre utilisation d’énergie au quotidien : le chauffage,
                l’éclairage, les déplacements, les recherches sur Internet…
              </p>
              <p className="poppins">Vous pouvez découvrir en temps réel la consommation française d’électricité des énergies les plus utilisées.</p>
            </div>
          </div>
        </section>
        <section id="chart-section">
          <div className="container">
            <h3>La consommation d'électricité en France aujourd'hui</h3>
            <div className="container-tag1">
              <TagChart id="eolienne" txt="Eolienne" />
              <TagChart id="solaire" txt="Solaire" />
              <TagChart id="gaz" txt="Gaz" />
              <TagChart id="hydraulique" txt="Hydraulique" />
            </div>
            <div className="container-tag2">
              <TagChart id="nucléaire" txt="Nucléaire" />
              <TagChart id="charbon" txt="Charbon" />
              <TagChart id="fioul" txt="Fioul" />
            </div>
            <img src={TmpChart} alt="image temporaire du futur graphique"/>
            <div className="bilan-container">
              <BilanProd title="nucléaire" txt={bilanTxt} bilan={bilanTxt2} />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
