import { useEffect } from 'react'
import heroPhoto from './assets/israel-hero.jpg'
import aboutPhoto from './assets/israel-about.jpg'
import './App.css'

const experience = [
  {
    year: '2025 — Presente',
    role: 'Independent Consultant | Technology, Data & AI Transformation',
    company: 'By Human Vision · Independent Advisory',
    description:
      'Acompañamiento estratégico para líderes de tecnología y negocio en transformación digital, estrategia de datos, adopción de IA, modelos operativos y modernización de plataformas. Mi enfoque conecta arquitectura, datos, procesos y ejecución con resultados medibles de negocio.',
  },
  {
    year: '2024 — Presente',
    role: 'Director of Data, Analytics & AI',
    company: 'Mondelēz International',
    description:
      'Liderazgo de iniciativas de datos, analítica e inteligencia artificial para LATAM y Norteamérica, conectando estrategia, gobierno de datos, plataformas cloud y casos de uso con impacto comercial.',
  },
  {
    year: '2022 — 2024',
    role: 'Head of IT Application & Software Engineering',
    company: 'HSBC North America',
    description:
      'Dirección de operación tecnológica para aplicaciones críticas, dashboards ejecutivos, gestión de incidentes, SLAs y mejora continua en un entorno regional complejo.',
  },
  {
    year: '2020 — 2022',
    role: 'Head of IT USA & Mexico',
    company: 'SEG Automotive',
    description:
      'Transformación digital, automatización de procesos, operación ERP e iniciativas de Industry 4.0 para manufactura automotriz en México y Estados Unidos.',
  },
  {
    year: '2002 — 2020',
    role: 'Technology & IT Leadership Roles',
    company: 'Coca-Cola FEMSA, Kraft Foods, Daimler',
    description:
      'Gestión de proyectos, SAP, retail, supply chain, service delivery, plataformas corporativas y soluciones analíticas con impacto en eficiencia operativa.',
  },
]

const problems = [
  {
    title: 'Cuando tus datos no son confiables',
    description:
      'Diseño gobierno, arquitectura y modelos operativos de datos para que analítica e IA funcionen sobre información consistente, trazable y accionable.',
  },
  {
    title: 'Cuando tus aplicaciones, ERP y procesos no se hablan',
    description:
      'Conecto tecnología, aplicaciones empresariales, cloud, APIs y operación para reducir fricción entre IT y negocio.',
  },
  {
    title: 'Cuando necesitas escalar sin depender de héroes',
    description:
      'Construyo equipos, hubs tecnológicos y modelos operativos con KPIs, SLAs, ownership y mecanismos claros de ejecución.',
  },
  {
    title: 'Cuando IA suena a experimento, no a impacto',
    description:
      'Aterrizo iniciativas de IA en casos de uso concretos, adopción real, eficiencia, calidad, velocidad o reducción de riesgo.',
  },
]

const caseStudies = [
  {
    company: 'SEG Automotive',
    title: 'Manufacturing Analytics & Risk Reduction',
    problem: 'Rechazos en manufactura con exposición financiera relevante.',
    action:
      'Análisis de datos, procesos y causas raíz para mejorar visibilidad operativa y toma de decisiones.',
    result:
      'Reducción de riesgo operativo y soporte a iniciativas con impacto financiero significativo.',
  },
  {
    company: 'HSBC North America',
    title: 'Operational Intelligence for Critical Applications',
    problem:
      'Operación de aplicaciones críticas en un entorno regional, regulado y altamente sensible.',
    action:
      'Dashboards ejecutivos, gobierno operativo, SLAs, gestión de incidentes y mejora continua.',
    result:
      'Mayor confiabilidad, mejor tiempo de respuesta y reducción de defectos recurrentes.',
  },
  {
    company: 'Mondelēz International',
    title: 'AI-Driven Commercial Forecasting',
    problem:
      'Riesgo de desabasto y baja visibilidad anticipada para equipos comerciales y de operación.',
    action:
      'Conceptualización de soluciones de IA y analítica para anticipar clientes con riesgo de quedarse sin inventario.',
    result:
      'Mejor visibilidad para equipos comerciales, preventa y operación, conectando IA con decisiones de negocio.',
  },
]

const skills = [
  'Data Strategy',
  'Artificial Intelligence',
  'Analytics',
  'Cloud',
  'SAP',
  'Enterprise Applications',
  'Data Governance',
  'MLOps',
  'DataOps',
  'SRE',
  'ITIL',
  'Agile',
  'Executive Leadership',
  'Business Transformation',
]

function App() {
  useEffect(() => {
    document.title = 'By Human Vision | Israel Pérez García'
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <main className="site-shell">
      <nav className="navbar">
        <a href="#inicio" className="brand">
          <span className="brand-mark">BHV</span>
          <span>By Human Vision</span>
        </a>

        <div className="nav-links">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#trayectoria">Trayectoria</a>
          <a href="#casos">Casos</a>
          <a href="#problemas">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section id="inicio" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">
            Technology · Data & Engineering · AI & Human Insight
          </p>

          <h1>
            Transformar negocios con tecnología, datos e IA desde la estrategia
            hasta la ejecución.
          </h1>

          <p className="hero-description">
            Soy Israel Pérez García, líder senior en tecnología, datos,
            ingeniería e inteligencia artificial con más de 20 años de
            experiencia en CPG, banca, manufactura y automotriz. Conecto
            estrategia, arquitectura, plataformas digitales y visión humana para
            convertir transformación tecnológica en resultados medibles de
            negocio.
          </p>

          <div className="hero-actions">
            <a href="#casos" className="button primary">
              Ver casos
            </a>
            <a href="#contacto" className="button secondary">
              Contacto
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-frame">
            <img
              src={heroPhoto}
              alt="Israel Pérez García"
              className="hero-photo"
            />
          </div>

          <div className="hero-metrics">
            <div className="metric-card">
              <span>20+</span>
              <p>Años liderando tecnología, datos y transformación.</p>
            </div>

            <div className="metric-card">
              <span>54</span>
              <p>
                Personas en equipos regionales bajo modelos de operación
                crítica.
              </p>
            </div>

            <div className="metric-card">
              <span>LATAM / NA</span>
              <p>Experiencia en industrias globales y entornos multinacionales.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="section about-section">
        <div className="about-header">
          <div>
            <p className="section-kicker">Sobre mí</p>
            <h2>Ser el puente entre negocio y tecnología, con visión humana.</h2>
            <p className="brand-hashtag">#ByHumanVision</p>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Construí mi carrera desde la base técnica: infraestructura, SAP,
              aplicaciones empresariales, soporte, desarrollo, operación crítica
              y plataformas corporativas.
            </p>

            <p>
              Después evolucioné hacia liderazgo regional, transformación
              digital, Data & AI, gobierno de datos, modelos operativos y
              construcción de equipos.
            </p>

            <p>
              Mi fortaleza está en traducir ecosistemas tecnológicos complejos
              en capacidades que el negocio pueda adoptar, medir y escalar.
            </p>
          </div>

          <div className="about-photo-wrap">
            <img
              src={aboutPhoto}
              alt="Israel Pérez García"
              className="about-photo"
            />
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <div className="quote-card">
          <p>
            Entender el negocio y traducirlo en tecnología.
            <br />
            Conectar datos, IA y plataformas con el P&amp;L.
            <br />
            Hacer que la estrategia se convierta en ejecución.
          </p>
        </div>
      </section>

      <section id="trayectoria" className="section">
        <div className="section-heading">
          <p className="section-kicker">Trayectoria</p>
          <h2>
            Experiencia ejecutiva en Transformación Digital, Tecnología, datos e
            IA.
          </h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.role}`}>
              <span className="timeline-year">{item.year}</span>
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="casos" className="section dark-section">
        <div className="section-heading">
          <p className="section-kicker">Casos destacados</p>
          <h2>Problemas reales, ejecución tecnológica y resultados medibles.</h2>
        </div>

        <div className="cards-grid case-grid">
          {caseStudies.map((caseStudy) => (
            <article className="project-card case-card" key={caseStudy.title}>
              <p className="company">{caseStudy.company}</p>
              <h3>{caseStudy.title}</h3>

              <div className="case-line">
                <span>Problema</span>
                <p>{caseStudy.problem}</p>
              </div>

              <div className="case-line">
                <span>Acción</span>
                <p>{caseStudy.action}</p>
              </div>

              <div className="case-line">
                <span>Resultado</span>
                <p>{caseStudy.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="problemas" className="section">
        <div className="section-heading">
          <p className="section-kicker">Problemas que resuelvo</p>
          <h2>Consultoría y advisory para transformar con criterio ejecutivo.</h2>
        </div>

        <div className="problem-grid">
          {problems.map((problem) => (
            <article className="problem-card" key={problem.title}>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="formacion" className="section two-column">
        <div>
          <p className="section-kicker">Formación y capacidades</p>
          <h2>Aprendizaje continuo para liderar transformación real.</h2>
        </div>

        <div>
          <div className="education-card">
            <h3>Formación</h3>
            <p>
              Maestría en Data Analytics e Inteligencia Artificial. Formación y
              experiencia complementaria en gestión de proyectos, ITIL, Agile,
              cloud, analítica, operación tecnológica y liderazgo ejecutivo.
            </p>
          </div>

          <div className="skills-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <p className="section-kicker">Contacto</p>
        <h2>
          Construyamos capacidades tecnológicas que el negocio pueda adoptar,
          medir y escalar.
        </h2>
        <p>
          Disponible para conferencias, paneles ejecutivos, advisory y
          colaboración estratégica en tecnología, datos, inteligencia artificial y
          transformación digital.
        </p>

        <div className="contact-actions">
          <a className="button primary" href="mailto:israelpg80@gmail.com">
            Escribir correo
          </a>
          <a
            className="button secondary"
            href="https://www.linkedin.com/in/israelperezgarcia/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>© {currentYear} By Human Vision</span>
        <span>Technology · Data & AI · Human Insight</span>
      </footer>
    </main>
  )
}

export default App