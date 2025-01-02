import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import card1 from "../assets/img/card1.jpg";
import card2 from "../assets/img/card2.jpg";
import card3 from "../assets/img/card3.jpg";
import card4 from "../assets/img/card4.jpg";
import skill1 from "../assets/img/skill1.jpg";
import skill2 from "../assets/img/skill2.jpg";
import skill3 from "../assets/img/skill3.jpg";
import parkingcompose from "../assets/img/parkingcompose.png";
import qrpc from "../assets/img/qrpc.jpg";
import flashsell from "../assets/img/flashsell.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

//项目1的图片
export const Projects = () => {
  const projects = [
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: card1,
    // },
    {
      title: "E-commerce Platform",
      description: "Frontend & Backend",
      imgUrl: card2,
    },
    {
      title: "Mobile App",
      description: "React Native Development",
      imgUrl: card3,
    },
    {
      title: "Cloud Integration",
      description: "AWS & DevOps",
      imgUrl: card4,
    },
  ];

  const projects2 = [
    {
      title: "E-commerce Platform",
      description: "Frontend & Backend",
      imgUrl: skill1,
    },
    {
      title: "Mobile App",
      description: "React Native Development",
      imgUrl: skill2,
    },
    {
      title: "Cloud Integration",
      description: "AWS & DevOps",
      imgUrl: skill3,
    },
  ];

  const projects3 = [
    {
      title: "E-commerce Platform",
      description: "Frontend & Backend",
      imgUrl: parkingcompose,
    },
    {
      title: "Mobile App",
      description: "React Native Development",
      imgUrl: qrpc,
    },
    {
      title: "Cloud Integration",
      description: "AWS & DevOps",
      imgUrl: flashsell,
    },
  ];




  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Work: Product List Microservice</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Work: Flash Sale Microservice</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Personal Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <div style={{ lineHeight: '1.8', color: '#e0e0e0', fontSize: '1rem' }}>
                          <h3 style={{ color: '#ffffff', fontWeight: 'bold' }}>Core Developer, Product List Microservice</h3>
                          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li>
                              <strong>Standardized item display logic</strong> by maintaining a microservice managing <strong>30+ interfaces</strong>, reducing system redundancy and ensuring consistency across business scenarios.
                            </li>
                            <li>
                              Designed dynamic business rules for filtering, pricing, and promotions, reducing manual configuration time from <strong>3 days to zero</strong> and significantly improving operational efficiency.
                            </li>
                            <li>
                              Optimized performance to handle peak <strong>QPS of 57,000</strong> with response times under <strong>120ms</strong>, ensuring high availability during critical operations.
                            </li>
                          </ul>
                        </div>
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <div style={{ lineHeight: '1.8', color: '#e0e0e0', fontSize: '1rem' }}>
                          <h3 style={{ color: '#ffffff', fontWeight: 'bold' }}>Core Developer, Flash Sale Microservice</h3>
                          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li>
                              <strong>Developed Redis-based static fallback mechanisms</strong> to prevent blank pages under <strong>high-concurrency</strong> scenarios, improving system reliability and delivering a seamless shopping experience.
                            </li>
                            <li>
                              Enhanced promotional strategies with <strong>A/B testing</strong>, configurable carousels, and countdown timers, increasing user engagement and providing actionable insights.
                            </li>
                            <li>
                              Integrated concurrent requests to downstream services and prioritized in-stock items with valid promotions, reducing user frustration and boosting sales efficiency.
                            </li>
                          </ul>
                        </div>
                        <Row>
                          {projects2.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div
                          style={{
                            lineHeight: "1.8",
                            color: "#e0e0e0",
                            fontSize: "1rem",
                          }}
                        >
                          <h3
                            style={{
                              color: "#ffffff",
                              fontWeight: "bold",
                              marginBottom: "1.5rem",
                            }}
                          >
                            Personal Projects
                          </h3>
                          <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                            <li>
                              <strong>Smart Parking System:</strong>{" "}
                              <a
                                href="https://github.com/CAS735-F24/group-project-t1"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#00aced" }}
                              >
                                GitHub Repository
                              </a>
                              <ul>
                                <li>
                                  Developed a smart parking system with digital
                                  permits, visitor parking using QR codes, and
                                  real-time tracking, enabling automated
                                  enforcement and operational analytics.
                                </li>
                                <li>
                                  Enhanced security and compliance through
                                  license plate scanning and automated fine
                                  management, improving system reliability and
                                  user experience.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>qRPC Framework:</strong>{" "}
                              <a
                                href="https://github.com/CodeinMac/qrpc"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#00aced" }}
                              >
                                GitHub Repository
                              </a>
                              <ul>
                                <li>
                                  Designed and implemented a high-performance
                                  RPC framework using Java and Etcd, with custom
                                  serialization and service discovery to enable
                                  scalable and efficient microservices
                                  communication.
                                </li>
                                <li>
                                  Developed retry mechanisms, load balancing,
                                  and error handling strategies, improving
                                  system reliability and robustness in
                                  distributed environments.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>E-commerce Flash Sale System:</strong>{" "}
                              <a
                                href="https://github.com/FangZiyang/Seckill-Developer-and-Maintainer-Mall"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#00aced" }}
                              >
                                GitHub Repository
                              </a>
                              <ul>
                                <li>
                                  Built a high-concurrency e-commerce flash
                                  sale system with scalable architecture, using
                                  Redis, Nginx, and RabbitMQ to manage traffic
                                  spikes.
                                </li>
                                <li>
                                  Designed distributed session management and
                                  inventory control mechanisms to ensure system
                                  integrity under heavy load.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <Row>
                          {projects3.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
