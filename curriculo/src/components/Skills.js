import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../img/color-sharp2.png"

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Habilidades</h2>
                          <p>Atualmente estou cursando Ciências da Computação na Universidade Católica de Pernambuco e estou no 5º Período..<br></br> Tenho conhecimentos na parte de front-end e back-end.</p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                
                                  <h5>Java</h5>
                              </div>
                              <div className="item">
                                  
                                  <h5>JavaScript</h5>
                              </div>
                              <div className="item">
                                
                                  <h5>Python</h5>
                              </div>
                              <div className="item">
                                 
                                  <h5>Banco de dados (MySQL)</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
         
      </section>
    )
  }