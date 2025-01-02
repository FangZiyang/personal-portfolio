// 引入必要的模块和资源
import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

// 定义 Skills 组件
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              {/* 标题 */}
              <h2>Skills</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                {/* 编程技能 */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '1rem',
                    background: '#2b2b2b',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <strong
                    style={{
                      marginBottom: '0.5rem',
                      fontSize: '1.2rem',
                      color: '#ffffff',
                      width: '100%',
                    }}
                  >
                    Programming & Frameworks:
                  </strong>
                  <p style={{ margin: 0, color: '#e0e0e0', width: '100%' }}>
                    Java, Spring Boot, SSM framework, Spring Framework, React.js
                  </p>
                </div>

                {/* 中间件和数据库 */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '1rem',
                    background: '#2b2b2b',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <strong
                    style={{
                      marginBottom: '0.5rem',
                      fontSize: '1.2rem',
                      color: '#ffffff',
                      width: '100%',
                    }}
                  >
                    Middleware & Databases:
                  </strong>
                  <p style={{ margin: 0, color: '#e0e0e0', width: '100%' }}>
                    Redis, RabbitMQ, Kafka, MySQL, NoSQL
                  </p>
                </div>

                {/* 架构和工具 */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '1rem',
                    background: '#2b2b2b',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <strong
                    style={{
                      marginBottom: '0.5rem',
                      fontSize: '1.2rem',
                      color: '#ffffff',
                      width: '100%',
                    }}
                  >
                    Architectures & Tools:
                  </strong>
                  <p style={{ margin: 0, color: '#e0e0e0', width: '100%' }}>
                    Microservices, RPC, REST APIs, Full-Stack Development, Unit Testing, Git
                  </p>
                </div>
              </div>

              {/* Carousel 轮播组件 */}
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Database Management</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Backend Optimization</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Middleware Integration</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
