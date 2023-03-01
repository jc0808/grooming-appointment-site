// import logo from './logo.svg';
import './App.css';
import image1 from './dog-cat.jpeg';
import haircutImage from './HaircutPet.webp';
import bathImage from './bathHaircut.jpeg';
import grooming from './grooming.jpeg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button, Row, Container, Card, Form, DropdownButton, Image, Carousel, CarouselItem } from "react-bootstrap";
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


export default function App() {
  return (
    <div>

      <Container className=' d-flex justify-content-center align-items-center'>
        <h1>Welcome to Grooming</h1>

      </Container>
      <Container className=' justify-content-center align-items-center border border-info rounded-3 border-5 p-3'>

        <div className='d-flex flex-row-reverse'>

          <DropdownButton title="Account" >
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Pets</DropdownItem>
            <DropdownItem>Log Out</DropdownItem>
          </DropdownButton>

          <Button>Login</Button>
        </div>

        {/* <div className=' d-flex justify-content-center'>
          <Image src={image1} rounded className='img-thumbnail' style={{ width: 300, height: 200 }}></Image>
        </div> */}

        <div className='text-center'>
          <h2>Services Offered</h2>

          {/* <Carousel >
            <CarouselItem >
              <Image className='img-fluid' src={haircutImage} ></Image>
              <Carousel.Caption>
                <h3>Haircut</h3>
                <p>Hellofjigjghn</p>
              </Carousel.Caption>
            </CarouselItem>

            <CarouselItem>
              <Image className='img-fluid' src={bathImage} ></Image>
              <Carousel.Caption>
                <h3>Bath</h3>
                <p>Hellofjigjghn</p>
              </Carousel.Caption>
            </CarouselItem>

            <CarouselItem>
              <Image className='img-fluid' src={haircutImage} style={{ width: 300 }}></Image>
              <Image className='img-fluid' src={bathImage} style={{ width: 300 }}></Image>
              <Carousel.Caption>
                <h3>Bath and Haircut</h3>
                <p>Hellofjigjghn</p>
              </Carousel.Caption>
            </CarouselItem>

            <CarouselItem>
              <Image className='img-fluid' src={grooming} ></Image>
              <Carousel.Caption>
                <h3>Customized Packages</h3>
                <p>Hellofjigjghn</p>
              </Carousel.Caption>
            </CarouselItem>
          </Carousel> */}


          <div>
            <h3>Haircut</h3>
            <Image src={haircutImage} style={{ width: 300 }}></Image>

            <h3>Bath</h3>
            <Image src={bathImage} style={{ width: 300 }}></Image>

            <h3>Bath and Haircut</h3>
            <Image src={haircutImage} style={{ width: 300 }}></Image>
            <Image src={bathImage} style={{ width: 300 }}></Image>

            <h3>Customized Packages</h3>
            <Image src={grooming} style={{ width: 300 }}></Image>


          </div>





        </div>





        {/* <Row className='justify-content-center align-items-center'>
          <Col className='shadow'>

            <div>

            </div>

          </Col>
        </Row> */}

      </Container >
    </div >
  )
}


