import React from "react"
import { Container, Row, Card, Col } from 'react-bootstrap';
import { getHotel} from './HotelList';
import { useParams, Link } from 'react-router-dom'
import ButtonComponent from './Button';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdFamilyRestroom } from 'react-icons/md';
import { FaBus } from 'react-icons/fa';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import {MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';



export default function HotelDetails(props) {
   // Här hämtas hotelID från hotellist objektet med hjälp av useParams-hook och lagras
  const { hotelID } = useParams();

  //Här deklareras hotelInfo och lagrar information om hotelet i variabeln när komponenten körs
  const hotelInfo = getHotel(hotelID);

  // Om hotellinformationen av någon anledning inte finns, ska ett felmeddelande visas
  if (!hotelInfo) {
    return <div>Hotellet hittades inte.</div>;
  }
  // Här renderas detaljerna för det valda hotellet
  return ( <div> 
    <Link to="/">  {/* Här skapas en länk till startsidan i form av en tillbakaknapp */}
       <ButtonComponent text="Tillbaka" /> 
      </Link>
       {/* Här skapas en behållare med flex-layout med struktur som hämtas från react-bootstrap  */}
    <Container className="d-flex flex-row-reverse">
  
      <Row className="m-5 border p-5">
          {/* Här visas namn för hotellet */}
        <h1>{hotelInfo.name}</h1>
        {/*Här visas bilderna och styles*/}
        <Col style={{marginRight: "30px"}}>
   {/* Här visas bildkarusellen från tilägget 'mdb-react-ui-kit' */}
          <MDBCarousel showControls fade>
  <MDBCarouselItem
    className='w-100 d-block'
    itemId={1}
    src={hotelInfo.imgUrl} 
    alt='. ..'>
  </MDBCarouselItem>

  <MDBCarouselItem
    className='w-100 d-block'
    itemId={2}
    src={hotelInfo.imgUrl2}
    alt='...'>
  </MDBCarouselItem>

  <MDBCarouselItem
    className='w-100 d-block'
    itemId={3}
    src={hotelInfo.imgUrl3}
    alt='...'>
    
  </MDBCarouselItem>
</MDBCarousel>
<div style={{ width: "550px", margin: "10px"}}>
<p>  
 {/* Här visas hotellbeskrivning */}
          {hotelInfo.hotelDesc}
        </p>
        </div>
        </Col>

        <Col>
          <Card style={{ width: "450px", height: "540px", backgroundColor: "#DBF2FD", padding: "40px" }}>
            <Card.Body>
               {/* En ruta för faciliteter skapas och visar information om*/}
              <Card.Title>Faciliteter</Card.Title>
              <Card.Text>
                <ul style={{ listStyleType: 'none' }}>
                  <li><AiOutlineWifi size={24}/> Wi-fi</li>
                  <li><MdFamilyRestroom size={22}/> Familjevänligt</li>
                  <li><FaBus size={18}/> Flygtransport</li>
                  <li><GiForkKnifeSpoon size={20}/> Stort matutbud</li>
                </ul>
                <p>För dig med matallergi eller särskilda matpreferenser erbjuder vi flera alternativ:</p>
                <ul>
                  <li>Vegetarisk</li>
                  <li>Glutenfritt</li>
                  <li>Nötfri</li>
                  <li>Vegan</li>
                  <li>Laktosfritt</li>
                </ul>
                     {/* Här visas priset för ett hotell */}
                <h5>SEK {hotelInfo.price} per natt</h5>
              </Card.Text>
              {/*Här är en länk som skickar en till bokningssidan genom en boka knapp. Här renderas också knapp komponenten*/}
              <Link to="/booking" style={{ margin: "45px"}}>
               <ButtonComponent text="Boka" />
              </Link>
            </Card.Body>
          </Card>
        </Col>
      
      </Row>
    </Container>
 
  </div>
  
 
);

}

