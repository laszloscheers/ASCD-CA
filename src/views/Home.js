import {Carousel, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Attractions from '../components/Attractions';
import "../App.css";

function Home() {
    return (
      <div>
        <div className="hero-block bg-white">
          <h1>Great Folks</h1><br/>
          <h3>Meet five historic Irish people every child should know about.</h3>
        </div>
        <Container fluid="md">
          <Carousel variant="dark">
          <Carousel.Item interval={4000}>
              <Link to="bram">
                <img
                className="d-block w-100"
                srcset="Bram-Stoker-mobile.jpeg 366w, Bram-Stoker-main.jpeg 1297w"
                alt="Bram Stoker"
                height="600"
                src="Bram-Stoker-main.jpeg"
                sizes="(max-width: 740px) 366px,1297px"
                />
                <Carousel.Caption className="carousel-teaxt">
                <h1>Bram Stoker (1847-1912)</h1>
                <p>Abraham, or Bram, Stoker is most famous for writing the Gothic horror novel Dracula. But did you know that he also wrote romance novels? Or that he was bedridden as a child?</p>
                </Carousel.Caption>
              </Link>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Link to="anne">
                <img
                className="d-block w-100"
                srcset="Anne-Bonny-mobile.jpeg 366w, Anne-Bonny-main.jpeg 1297w"
                alt="Anne Bonny"
                height="600"
                src="Anne-Bonny-main.jpeg"
                sizes="(max-width: 740px) 366px,1297px"
                />
                <Carousel.Caption className="carousel-teaxt">
                <h1>Anne Bonny (Circa 1698)</h1>
                <p>Anne Cormac, aka Anne Bonny, was a notoriously ruthless pirate who pillaged merchant ships in the Caribbean.</p>
                </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Link to="charles">
                <img
                className="d-block w-100"
                srcset="Sir-Charles-Parsons-mobile.jpeg 366w, Sir-Charles-Parsons-main.jpeg 1297w"
                alt="Sir Charles Parsons"
                height="600"
                src="Sir-Charles-Parsons-main.jpeg"
                sizes="(max-width: 740px) 366px,1297px"
                />
                <Carousel.Caption className="carousel-teaxt">
                <h1>Sir Charles Parsons (1854-1931)</h1>
                <p>Charles Parsons was the son of the peer of Offaly, the Earl of Rosse, who was a famous astronomer and builder of the "Leviathan", which was at that time, the largest telescope in the world. It can still be visited at their family home at Birr Castle.</p>
                </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
              <Link to="dame">
                  <img
                  className="d-block w-100"
                  srcset="Dame-Jocelyn-Bell-Burnell-mobile.jpeg 366w, Dame-Jocelyn-Bell-Burnell-main.jpeg 1297w"
                  alt="Dame Jocelyn Bell Burnell"
                  height="600"
                  src="Dame-Jocelyn-Bell-Burnell-main.jpeg"
                  sizes="(max-width: 740px) 366px,1297px"
                  />
                  <Carousel.Caption className="carousel-teaxt">
                  <h1>Dame Jocelyn Bell Burnell (1943-present)</h1>
                  <p>As an astrophysicist, Jocelyn Bell Burnell, is best known for her discovery of the first radio pulsars while still a student.</p>
                  </Carousel.Caption>
              </Link>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
              <Link to="ernest">
                  <img
                  className="d-block w-100"
                  srcset="Ernest-Shackleton-mobile.jpeg 366w, Ernest-Shackleton-main.jpeg 1297w"
                  alt="Ernest Shackleton"
                  height="600"
                  src="Ernest-Shackleton-main.jpeg"
                  sizes="(max-width: 740px) 366px,1297px"
                  />
                  <Carousel.Caption className="carousel-teaxt">
                  <h1>Ernest Shackleton (1874-1922)</h1>
                  <p>Born in Kildare and educated in London, Ernest Shackleton developed a passion for adventure by reading books as a child. At just 16, he became a ship’s apprentice and quickly rose through the ranks.</p>
                  </Carousel.Caption>
              </Link>
          </Carousel.Item>
          </Carousel>
        </Container>
        <br/>
        <Container id="more">
          <h1 className="white">Learn more about Irish history, find activities across Ireland.</h1><br/><br/>
          <Attractions />
        </Container>
      </div>
    );
  }
  
  export default Home;