import React from 'react';
import { Col, Row, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import ButtonComponent from './Button';
import Pagination from 'react-bootstrap/Pagination';

// En lista med alla hotell. Varje hotell är ett "objekt" med egenskaper som namn, betyg, pris, beskrivning, antal sängar, typ av rum, bilder, hotelID.
export const hotels = [{ 
      
  name: 'Family Comfort Hotel',
  rating: '4',
  price: '1382',
  hotelDesc: 'Hotellet Family Comfort är en pärla belägen i en av de mest pittoreska och eftertraktade destinationerna vid kusten. Med en strålande kombination av avslappnad lyx och enastående gästvänlighet erbjuder detta hotell en minnesvärd och avkopplande vistelse för alla sina gäster.',
  roomType: 'Familjerum',
  bedsAmount: '3',
  doubleBedsAmount: '1',
  singleBedsAmount: '2',
  imgUrl: 'https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=1060&t=st=1694783303~exp=1694783903~hmac=b5b9a34c2fb6f256d2d467e2db8bb213e4a17afb038d055d461a60c41440d07a',
  imgUrl2: 'https://cdn.pixabay.com/photo/2018/01/15/17/32/table-3084384_1280.jpg',
  imgUrl3: 'https://cdn.pixabay.com/photo/2018/08/06/19/49/design-3588214_1280.jpg',
  hotelID: 1,
  city: 'Málaga'

},
{ name: 'Sunshine Suite Hotel',
  rating: '3',
  price: '994',
  hotelDesc: 'Hotellet Sunshine Suites är en pärla belägen i en av de mest pittoreska och eftertraktade destinationerna vid kusten. Med en strålande kombination av avslappnad lyx och enastående gästvänlighet erbjuder detta hotell en minnesvärd och avkopplande vistelse för alla sina gäster.',
  roomType: 'Familjerum',
  bedsAmount: '4',
  doubleBedsAmount: '1',
  singleBedsAmount: '3',
  imgUrl: 'https://img.freepik.com/free-photo/huge-swimming-pool-near-hotel-resort-san-teodoro-sardinia_181624-9498.jpg?w=1060&t=st=1694783344~exp=1694783944~hmac=a9fd277d266c65f3cfbce93d7451b03df31a1a2ff69d9159f51b3898a5f65c3d',
  imgUrl2: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg',
  imgUrl3: 'https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
  hotelID: 2,
  city: 'Mallorca'
},
{ name: 'Family Resorts Hotel',
  rating: '4',
  price: '1717',
  hotelDesc: 'Hotellet Family Resorts är en pärla belägen i en av de mest pittoreska och eftertraktade destinationerna vid kusten. Med en strålande kombination av avslappnad lyx och enastående gästvänlighet erbjuder detta hotell en minnesvärd och avkopplande vistelse för alla sina gäster.',
  roomType: 'Familjerum',
  bedsAmount: '5',
  doubleBedsAmount: '2',
  singleBedsAmount: '3',
  imgUrl: 'https://img.freepik.com/free-photo/hammocks-umbrella-placed-near-large-pool_1203-192.jpg?w=1060&t=st=1694783934~exp=1694784534~hmac=03114c498e89f31d3dc290ef1e62b896e1728b2286ccb7509621a88aeeb519bf',
  imgUrl2: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg',
  imgUrl3: 'https://cdn.pixabay.com/photo/2018/01/06/18/40/relaxation-3065577_1280.jpg',
  hotelID: 3,
  city: 'Marbella'

},
{ name: 'Friends&Family Hotel',
  rating: '4',
  price: '1422',
  hotelDesc: 'Hotellet Friends&Family är en pärla belägen i en av de mest pittoreska och eftertraktade destinationerna vid kusten. Med en strålande kombination av avslappnad lyx och enastående gästvänlighet erbjuder detta hotell en minnesvärd och avkopplande vistelse för alla sina gäster.',
  roomType: 'Familjerum',
  bedsAmount: '4',
  doubleBedsAmount: '2',
  singleBedsAmount: '2',
  imgUrl: 'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?w=1060&t=st=1694784040~exp=1694784640~hmac=767395bc1c37bf0d59ab609952818289d28dd36071ea73d62626142633e07e05',
  imgUrl2: 'https://cdn.pixabay.com/photo/2015/09/21/09/53/villa-cortine-palace-949547_1280.jpg',
  imgUrl3: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=1060&t=st=1695241767~exp=1695242367~hmac=b07cf71c7033781cb7393c67de5f83eb28c0a6948c36b4b7be2550af21e01fb5',
  hotelID: 4,
  city: 'Alicante'

},
{ name: 'EcoOasis Suite Hotel',
  rating: '5',
  price: '2215',
  hotelDesc: 'Hotellet EcoOasis Suite är en pärla belägen i en av de mest pittoreska och eftertraktade destinationerna vid kusten. Med en strålande kombination av avslappnad lyx och enastående gästvänlighet erbjuder detta hotell en minnesvärd och avkopplande vistelse för alla sina gäster.',
  roomType: 'Familjerum',
  bedsAmount: '5',
  doubleBedsAmount: '1',
  singleBedsAmount: '4',
  imgUrl: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-paradise-destination-vacations-ge_1258-150769.jpg?w=1060&t=st=1694784103~exp=1694784703~hmac=ad212e83f9efe7117faf7871b07e9b8d725c97362139f6610e9dbae83967718e',
  imgUrl2: 'https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_1280.jpg',
  imgUrl3: 'https://images.pexels.com/photos/1520619/pexels-photo-1520619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  hotelID: 5,
  city: 'Valencia'

},

];
// Funktion som hjälpar att hitta hotell genom användning av find-funktion, där hotelID sökas och jämföras.
export function getHotel(hotelID) {
  return hotels.find((hotel) => hotel.hotelID === parseInt(hotelID));
}

// Komponent som visar en hotell lista. Med hjälp av "map"-funktionen gås igenom varje hotell och de renderas i en container med de olika egenskaper som namn, pris, antal stjärnor osv. 
// I varje hotell-ruta renderas också en knapp med hjälp av den återanvändbara knapp-komponent. 
// Genom Link-komponenten från React Router kopplas knappen så att den leder till den specifika sidan för ett specifikt hotell.


export default function HotelList(props) {
  return (
    <>
      {props.hotels.map((hotel) => (
        <Container className="d-flex flex-row-reverse" key={hotel.hotelID}>
          <Row className="m-1 border p-2">
            <Col sm="auto" className="p-1">
              <Link to={"/HotelDetails/" + hotel.hotelID}>
                <img className="p-2" alt="hotel picture" src={hotel.imgUrl} style={{ width: "250px" }} />
              </Link>
            </Col>
            <Col style={{ width: "850px" }}>
              <div className="h4 mb-1">{hotel.name}</div>
              <div className="h6 mb-1">{hotel.city}</div>
              <div className="font-weight-bold text-secondary mb-1">{hotel.rating} stjärnor <i className="bi bi-star"></i></div>
              <div className="h6 mb-1">{hotel.roomType}</div>
              <div className="mb-2" style={{ flex: "1 0 100px", overflow: "hidden" }}>{hotel.bedsAmount} sängar</div>
              <div className="mb-2" style={{ flex: "1 0 100px", overflow: "hidden" }}>Enkel: {hotel.singleBedsAmount} Dubbel: {hotel.doubleBedsAmount}</div>
            </Col>
            <Col className="d-flex align-items-end">
              <Link to={"/HotelDetails/" + hotel.hotelID}>
                <ButtonComponent text={`Från ${hotel.price} SEK`} />
              </Link>
            </Col>
          </Row>
        </Container>
      ))}

      <div className="pagination-container" style={{ marginLeft: "300px" }}>
        <Pagination>
          <Pagination.Prev />
          {/* Lägg till fler sidor här baserat på ditt behov */}
          <Pagination.Ellipsis />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Ellipsis />
          {/* ... */}
          <Pagination.Next />
        </Pagination>
      </div>
    </>
  );
}


