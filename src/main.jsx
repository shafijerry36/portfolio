import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const profile = {
  name: 'Mohammed Shafiullah',
  role: 'Senior Software Engineer',
  headline: 'Full Stack Developer | Java | React | Microservices | IAM',
  tagline:
    'Java Full Stack Developer with IAM experience across Okta, Microsoft Entra ID, OAuth2, OIDC, JWT, SAML and SailPoint IIQ.',
  location: 'India',
  email: 'shafiullah584@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/mohammed-shafiullah-a10554244/',
  github: 'https://github.com/your-github-username',
  resume: 'Mohammed Shafiullah EY resume.pdf',
};

const Icon = ({ children }) => (
  <span className="icon" aria-hidden="true">
    {children}
  </span>
);

const skills = [
  {
    title: 'Backend Engineering',
    icon: '⌘',
    items: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Microservices',
      'Spring Security',
      'Thymeleaf',
      'OpenHTMLToPDF',
    ],
  },
  {
    title: 'Frontend Engineering',
    icon: '◎',
    items: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Responsive UI',
      'Component Design',
      'Modern Web UI',
    ],
  },
  {
    title: 'Identity & Security',
    icon: '◈',
    items: [
      'OAuth2',
      'OIDC',
      'JWT',
      'SAML',
      'Okta',
      'Microsoft Entra ID',
      'SailPoint IIQ',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    items: [
      'GCP',
      'AWS Basics',
      'Git',
      'GitHub',
      'CI/CD Basics',
      'Cloud Deployment',
    ],
  },
  {
    title: 'Data & Integration',
    icon: '▣',
    items: [
      'SQL',
      'MySQL',
      'Kafka',
      'Event Driven Design',
      'PDF Generation',
      'API Integration',
    ],
  },
  {
    title: 'Architecture',
    icon: '△',
    items: [
      'Scalable Systems',
      'Modernization',
      'Design Patterns',
      'Clean Code',
      'System Integration',
    ],
  },
];

const projects = [
  {
    title: 'Ford Motor Credit Company - Invoice PDF Modernization',
    type: 'Client Project',
    stack: [
      'Java',
      'Spring Boot',
      'Thymeleaf',
      'OpenHTMLToPDF',
      'GCP',
      'PDF Rendering',
    ],
    tone: 'red',
    description:
      'Modernized invoice PDF generation by moving to dynamic server-side HTML templates and reliable PDF rendering for business invoice workflows.',
    highlights: [
      'Designed invoice templates using Thymeleaf for dynamic business data binding.',
      'Integrated OpenHTMLToPDF to generate consistent, printable and business-ready invoices.',
      'Separated template layout, data mapping and PDF generation logic for better maintainability.',
      'Worked with Java-based services and GCP-oriented deployment flow for enterprise delivery.',
    ],
  },
  {
    title: 'Construction ERP Platform',
    type: 'Full Stack Product Development',
    stack: [
      'Java',
      'Spring Boot',
      'Microservices',
      'React',
      'REST APIs',
      'SQL',
    ],
    tone: 'blue',
    description:
      'Developed a construction-domain ERP platform covering end-to-end workflows for construction operations and business users.',
    highlights: [
      'Developed 12 microservices from scratch using Java and Spring Boot.',
      'Integrated backend services with a modern React frontend for operational users.',
      'Implemented modules for construction workflows, resources, approvals and project operations.',
      'Focused on scalable API design, clean service boundaries and maintainable full-stack delivery.',
    ],
  },
  {
    title: 'Secure API & IAM Integration Practice',
    type: 'Security Focused Engineering',
    stack: [
      'Spring Security',
      'OAuth2',
      'OIDC',
      'JWT',
      'Okta',
      'Entra ID',
    ],
    tone: 'green',
    description:
      'Built secure API patterns around authentication, authorization and identity-aware access for enterprise applications.',
    highlights: [
      'Worked with OAuth2/OIDC login flows, token handling and protected API access patterns.',
      'Designed role and group based authorization concepts using JWT claims.',
      'Explored application onboarding patterns with Okta and Microsoft Entra ID.',
      'Focused on enterprise identity scenarios such as SSO, claims and secure integration.',
    ],
  },
  {
    title: 'Event Driven Microservice Design',
    type: 'Architecture Practice',
    stack: [
      'Kafka',
      'Spring Boot',
      'Microservices',
      'Outbox Pattern',
      'REST APIs',
    ],
    tone: 'purple',
    description:
      'Designed reliable service communication patterns using asynchronous messaging and event-driven architecture concepts.',
    highlights: [
      'Created producer-consumer flows for service-to-service communication.',
      'Used Kafka concepts to reduce tight coupling between backend services.',
      'Studied transactional outbox pattern for reliable event publishing.',
      'Focused on scalable architecture patterns used in high-traffic applications.',
    ],
  },
];

const experience = [
  '4 years of experience as a Full Stack Developer and Senior Software Engineer.',
  'Strong backend experience with Java, Spring Boot, REST APIs and microservices.',
  'Frontend experience using React, JavaScript, HTML and CSS for modern user interfaces.',
  'Hands-on exposure to OAuth2, JWT, SAML, Okta, Microsoft Entra ID and SailPoint IIQ concepts.',
  'Worked on application modernization, PDF generation, cloud deployment flow and enterprise integrations.',
];

function App() {
  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <a className="brand" href="#home">
          MS
        </a>

        <div className="navLinks">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section hero">
        <div className="heroBg"></div>

        <div className="heroCopy reveal">
          <span className="eyebrow">
            Full Stack / Backend / IAM focused profile
          </span>

          <h1>{profile.name}</h1>

          <h2>{profile.role}</h2>

          <p className="headline">{profile.headline}</p>

          <p className="tagline">{profile.tagline}</p>

          <div className="actions">
            <a
              className="btn primary"
              href={profile.resume}
              download
            >
              <Icon>⬇</Icon>
              Download Resume
            </a>

            <a className="btn ghost" href="#projects">
              <Icon>↗</Icon>
              View Projects
            </a>
          </div>

          <div className="stats">
            <div>
              <strong>4+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>12</strong>
              <span>Microservices Built</span>
            </div>

            <div>
              <strong>Full Stack</strong>
              <span>Java + React</span>
            </div>
          </div>
        </div>

        <div className="profileCard reveal delay1">
          <div className="posterGlow"></div>

       <img
  src="/profile.jpeg"
  alt="Mohammed Shafiullah"
/>

          <h3>Senior Software Engineer</h3>

          <p>Java • React • Microservices • IAM • Cloud</p>
        </div>
      </section>

      {/* Companies Section */}
      <section className="section clients reveal">
        <p className="sectionLabel">
          Current Organization & Companies Worked With
        </p>

        <h2>
          EY as current organization, with client and product experience
          across Ford, Project On Track and MGM.
        </h2>

        <div className="logoRail">
          <div className="logoCard eyLogo">
            <div className="eySpark"></div>

            <span>EY</span>
            <small>Current Organization</small>
          </div>

          <div className="logoCard fordLogo">
            <div className="carRoad">
              <div className="car">🚙</div>
            </div>

            <span>Ford</span>
            <small>Worked With</small>
          </div>

          <div className="logoCard potLogo">
            <div className="constructionAnim">
              <div className="crane">⌐</div>
              <div className="block block1"></div>
              <div className="block block2"></div>
              <div className="block block3"></div>
            </div>

            <span>POT</span>
            <small>Project On Track</small>
          </div>

          <div className="logoCard mgmLogo">
            <div className="movieAnim">
              <div className="filmStrip"></div>
              <div className="spotlight"></div>
            </div>

            <span>MGM</span>
            <small>Worked With</small>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about reveal">
        <p className="sectionLabel">About</p>

        <h2>
          Java Full Stack Developer with IAM, Okta and Microsoft Entra ID
          focus.
        </h2>

        <p>
          I am a Senior Software Engineer with 4 years of experience in Java
          Full Stack Development and Identity & Access Management. My core
          experience includes Java, Spring Boot, Microservices, REST APIs and
          React, along with secure application integration using OAuth2, OIDC,
          JWT, SAML, Okta, Microsoft Entra ID and SailPoint IIQ concepts. I
          position myself as a Java engineer with strong IAM exposure, focused
          on building secure enterprise applications, modernizing business
          workflows and integrating identity-driven authentication and
          authorization solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section reveal">
        <p className="sectionLabel">Skills</p>

        <h2>Technical Stack</h2>

        <div className="skillGrid">
          {skills.map((group) => (
            <article className="skillCard" key={group.title}>
              <Icon>{group.icon}</Icon>

              <h3>{group.title}</h3>

              <div className="chips">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section reveal">
        <p className="sectionLabel">Selected Work</p>

        <h2>Project Showcase</h2>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className={`projectPoster ${project.tone}`}>
                <span className="posterIcon">▰</span>

                <span className="projectType">
                  {project.type}
                </span>
              </div>

              <div className="projectBody">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience reveal">
        <p className="sectionLabel">Experience</p>

        <h2>What I bring to a team</h2>

        <div className="timeline">
          {experience.map((item, index) => (
            <div className="timelineItem" key={item}>
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact reveal">
        <p className="sectionLabel">Contact</p>

        <h2>Let’s build secure, scalable software.</h2>

        <p>
          Open to full stack development, backend engineering and IAM-focused
          software engineering opportunities.
        </p>

        <div className="actions center">
          <a
            className="btn primary"
            href={`mailto:${profile.email}`}
          >
            <Icon>✉</Icon>
            Email Me
          </a>

          <a
            className="btn ghost"
            href={profile.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <Icon>in</Icon>
            LinkedIn
          </a>

          <a
            className="btn ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon>⌘</Icon>
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
