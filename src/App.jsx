import { useEffect, useState } from 'react'

const facts = [
  { value: '~8 yrs', label: 'building production software' },
  { value: '20–25%', label: 'faster financial microservices' },
  { value: '50+', label: 'programming teams mentored' },
]

const impact = [
  {
    context: 'Revyl',
    title: 'Applied AI product delivery',
    copy: 'Delivered end-to-end LLM-powered features spanning UI, APIs, orchestration, evaluation, and production safeguards.',
  },
  {
    context: 'Ablecoin Finance',
    title: 'Engineering leadership',
    copy: 'Led architecture decisions, code reviews, testing standards, and release execution for remote fintech delivery.',
  },
  {
    context: 'Across roles',
    title: 'Production ownership',
    copy: 'Owned features from design through release across full-stack services, CI/CD, observability, and production support.',
  },
  {
    context: 'AIB',
    title: '20–25% performance gain',
    copy: 'Accelerated real-time financial microservices through JVM tuning, cache optimization, and runtime analysis.',
  },
]

const experience = [
  {
    company: 'Revyl',
    short: 'Revyl',
    role: 'Full-Stack & Applied AI Engineer',
    focus: 'Applied AI product engineering',
    period: 'Feb 2025 — Jun 2026',
    years: '2025 — 2026',
    location: 'Remote · US',
    summary:
      'Owned full-stack AI product features from product and technical design through implementation, evaluation, release, and production support.',
    achievements: [
      'Built backend services and APIs connecting application workflows with LLM-powered capabilities, external tools, and structured data.',
      'Developed frontend workflows for AI-assisted features with clear user experience, predictable state, and reliable API integration.',
      'Designed evaluation and regression checks for AI outputs, covering edge cases, structured responses, fallback behavior, and shifts in model quality.',
      'Debugged issues spanning prompt and model behavior, backend logic, data flow, and frontend state using logs and reproducible cases.',
      'Contributed to architecture decisions and engineering standards for testing, observability, performance, and safe rollout of AI-enabled features.',
    ],
    stack: ['LLM integration', 'AI evaluation', 'Backend APIs', 'Frontend workflows', 'Observability'],
  },
  {
    company: 'Ablecoin Finance',
    short: 'Ablecoin Finance',
    role: 'Lead Software Engineer',
    focus: 'Fintech product delivery',
    period: 'Jun 2024 — Dec 2024',
    years: '2024',
    location: 'Remote · California, US',
    summary:
      'Led technical delivery for finance-focused product work, turning business requirements into architecture, implementation plans, and production releases.',
    achievements: [
      'Owned key decisions on service design, APIs, integration boundaries, and reliability while keeping the codebase practical to maintain and extend.',
      'Raised engineering quality through code reviews, mentoring, stronger testing practices, and clearer release standards, catching issues earlier.',
      'Worked directly with product and business stakeholders, resolved cross-system production issues, and kept execution aligned in a fully remote team.',
    ],
    stack: ['Technical leadership', 'Service design', 'API design', 'Code review', 'Mentoring'],
  },
  {
    company: 'Performance Software Corporation',
    short: 'Performance Software',
    role: 'Software Engineer',
    focus: 'Full-stack services & internal tooling',
    period: 'Sep 2021 — Apr 2024',
    years: '2021 — 2024',
    location: 'Mabalacat, Pampanga, PH',
    summary:
      'Took ownership of full-stack features and internal engineering tools from requirement breakdown through implementation, testing, release, and production follow-up.',
    achievements: [
      'Developed backend services and REST APIs with stable interfaces, maintainable code, and predictable behavior under real production workloads.',
      'Worked across Python, JavaScript/TypeScript, and modern frontend codebases, contributing to server-side components and user-facing workflows.',
      'Expanded unit and integration test coverage and took an active part in code reviews, reducing regressions and making changes safer to ship.',
      'Contributed to CI/CD and containerized development workflows so builds, tests, and deployments were consistent across environments.',
      'Diagnosed performance and reliability problems across components, tracing failures to root causes and shipping fixes that improved stability.',
    ],
    stack: ['Python', 'JavaScript / TypeScript', 'REST APIs', 'CI/CD', 'Containers', 'Testing'],
  },
  {
    company: 'AIB (Allied Irish Banks)',
    short: 'AIB',
    role: 'Software Engineer — R&D',
    focus: 'Financial systems',
    period: 'Oct 2018 — Jul 2021',
    years: '2018 — 2021',
    location: 'Dublin, Ireland',
    summary:
      'Developed and maintained backend components for real-time financial services supporting risk reporting, reconciliation, monitoring, and operational workflows.',
    achievements: [
      'Improved microservice performance by approximately 20–25% through JVM tuning, cache optimization, and targeted runtime analysis.',
      'Built Vue.js dashboards giving engineering and risk teams clearer visibility into financial activity, system behavior, and compliance information.',
      'Investigated production issues across application logic, JVM behavior, caching, and service dependencies.',
      'Translated risk and business requirements into reliable technical changes while protecting data correctness and service stability.',
      'Improved maintainability through refactoring, clearer diagnostics, and more structured testing around performance-sensitive logic.',
    ],
    stack: ['Java', 'JVM tuning', 'Caching', 'Microservices', 'Vue.js', 'Financial systems'],
  },
]

const expertise = [
  {
    number: '01',
    title: 'Applied AI & evaluation',
    copy: 'Evaluating model outputs and AI-generated code for correctness, robustness, and maintainability, backed by rubrics, automated evals, and regression checks.',
    tools: 'AI evaluation · Rubric design · Automated evals · Edge-case analysis',
  },
  {
    number: '02',
    title: 'LLM & AI systems',
    copy: 'Integrating model capabilities into real products with retrieval, structured outputs, and tool use.',
    tools: 'RAG · Embeddings · Vector search · Tool calling · Agentic workflows',
  },
  {
    number: '03',
    title: 'Full-stack engineering',
    copy: 'Production UI workflows, dashboards, and internal tools with reliable frontend–backend integration.',
    tools: 'React · Redux · Vue.js · Angular · TypeScript',
  },
  {
    number: '04',
    title: 'Backend & distributed systems',
    copy: 'Microservices, API design, caching, and asynchronous workflows built for service reliability and predictable behavior under load.',
    tools: 'Python · Java · Go · Rust · REST APIs',
  },
  {
    number: '05',
    title: 'Cloud, platform & reliability',
    copy: 'Deployment automation, CI/CD, and observability that make software safer to ship and easier to operate.',
    tools: 'AWS · GCP · Kubernetes · Docker · Terraform',
  },
  {
    number: '06',
    title: 'Performance & financial systems',
    copy: 'Profiling and runtime tuning for throughput and latency, grounded in risk reporting and reconciliation work.',
    tools: 'JVM tuning · Profiling · Caching · Data pipelines',
  },
]

const principles = [
  {
    title: 'Own it end to end',
    copy: 'Architecture, implementation, testing, CI/CD, observability, release, and production support are one continuous responsibility.',
  },
  {
    title: 'Evaluate, don’t assume',
    copy: 'AI features deserve the same rigor as any production system: edge cases, structured outputs, fallbacks, and regression checks.',
  },
  {
    title: 'Debug across boundaries',
    copy: 'Failures cross prompts, model behavior, APIs, data flows, and frontend state. Logs and reproducible cases find the real root cause.',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  )
}

function ThemeIcon({ theme }) {
  return theme === 'dark' ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.4 15.6A9 9 0 1 1 8.4 3.6a7 7 0 0 0 12 12Z" />
    </svg>
  )
}

function SystemMap() {
  return (
    <div className="system-map" aria-label="Conceptual diagram of an AI feature delivery pipeline">
      <div className="map-topline">
        <span>applied ai · delivery pipeline</span>
        <span className="live-indicator"><i /> evaluated</span>
      </div>
      <svg viewBox="0 0 620 470" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="lineGradient" x1="0" x2="1">
            <stop offset="0" stopColor="var(--accent)" stopOpacity=".15" />
            <stop offset=".5" stopColor="var(--accent)" stopOpacity=".9" />
            <stop offset="1" stopColor="var(--accent-2)" stopOpacity=".35" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g className="map-grid">
          {Array.from({ length: 9 }).map((_, index) => (
            <line key={`v-${index}`} x1={42 + index * 68} y1="28" x2={42 + index * 68} y2="440" />
          ))}
          {Array.from({ length: 7 }).map((_, index) => (
            <line key={`h-${index}`} x1="30" y1={40 + index * 66} x2="590" y2={40 + index * 66} />
          ))}
        </g>
        <g className="connections" fill="none">
          <path d="M93 102 C180 102 178 219 272 219 S370 125 460 125" />
          <path d="M92 353 C172 353 180 270 272 270 S380 360 524 360" />
          <path d="M272 219 L272 270" />
          <path d="M460 125 C520 125 520 226 524 360" />
          <path d="M93 102 C70 186 67 271 92 353" />
        </g>
        <g className="nodes">
          <g transform="translate(93 102)"><circle r="29" /><circle className="pulse" r="39" /><text y="5">UI</text></g>
          <g transform="translate(272 219)"><circle className="core" r="42" /><circle className="pulse pulse-delay" r="54" /><text y="5">LLM</text></g>
          <g transform="translate(460 125)"><circle r="29" /><text y="5">EVAL</text></g>
          <g transform="translate(92 353)"><circle r="29" /><text y="5">API</text></g>
          <g transform="translate(272 270)"><circle r="18" /><text y="4">RAG</text></g>
          <g transform="translate(524 360)"><circle r="29" /><text y="5">PROD</text></g>
        </g>
        <g className="packet" filter="url(#glow)"><circle r="5"><animateMotion dur="4s" repeatCount="indefinite" path="M93 102 C180 102 178 219 272 219 S370 125 460 125" /></circle></g>
      </svg>
      <div className="map-stats">
        <span><b>Build</b> UI · APIs · orchestration</span>
        <span><b>Evaluate</b> regression checks</span>
        <span><b>Operate</b> CI/CD + observability</span>
      </div>
    </div>
  )
}

function App() {
  const [activeExperience, setActiveExperience] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const currentExperience = experience[activeExperience]
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Robert Ramos home">
          <span className="brand-mark">RR</span>
          <span className="brand-name">Robert Ramos</span>
        </a>

        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Primary navigation">
          <a href="#impact" onClick={closeMenu}>Impact</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#background" onClick={closeMenu}>Background</a>
          <a className="nav-contact" href="mailto:roberamos1525@gmail.com" onClick={closeMenu}>Get in touch</a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <ThemeIcon theme={theme} />
          </button>
          <button
            className={`menu-button ${menuOpen ? 'is-open' : ''}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section" id="top">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow"><span /> Software Engineer · Full-Stack &amp; Applied AI</div>
            <h1>Dependable software, from fintech systems to <em>applied AI.</em></h1>
            <p className="hero-lead">
              Nearly eight years building and operating production software across fintech, full-stack product development, distributed systems, cloud platforms, and LLM-powered products. I own features from architecture through release and production support.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">View experience <ArrowIcon /></a>
              <a className="button button-secondary" href="/Robert_Ramos_CV.pdf" download>Download CV</a>
            </div>
            <dl className="hero-facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.value}</dt>
                  <dd>{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero-visual" data-reveal>
            <SystemMap />
          </div>
        </section>

        <section className="impact section" id="impact" aria-labelledby="impact-heading">
          <div className="section-intro" data-reveal>
            <p className="section-kicker">Selected impact</p>
            <h2 id="impact-heading">Results across AI, fintech, and banking.</h2>
            <p>Delivery, leadership, ownership, and performance work from roles in applied AI, fintech product engineering, and real-time financial systems.</p>
          </div>
          <div className="impact-grid">
            {impact.map((item, index) => (
              <article className="impact-card" data-reveal key={item.title} style={{ '--delay': `${index * 70}ms` }}>
                <span className="impact-context">{item.context}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="statement section" data-reveal>
          <p>I do my best work where product, infrastructure, and AI meet: when a problem spans prompts, APIs, data flows, and frontend state, and the fix has to be found, verified, and shipped safely.</p>
        </section>

        <section className="experience section" id="experience" aria-labelledby="experience-heading">
          <div className="section-intro compact" data-reveal>
            <p className="section-kicker">Experience</p>
            <h2 id="experience-heading">Nearly eight years in production.</h2>
          </div>

          <div className="experience-panel" data-reveal>
            <div className="experience-tabs" role="tablist" aria-label="Companies">
              {experience.map((item, index) => (
                <button
                  key={item.short}
                  type="button"
                  role="tab"
                  aria-selected={activeExperience === index}
                  className={activeExperience === index ? 'is-active' : ''}
                  onClick={() => setActiveExperience(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    {item.short}
                    <small>{item.years}</small>
                  </div>
                </button>
              ))}
            </div>

            <article className="experience-detail" key={currentExperience.short} role="tabpanel">
              <div className="experience-heading">
                <div>
                  <p className="experience-company">{currentExperience.company}</p>
                  <h3>{currentExperience.role}</h3>
                  <p className="experience-focus">{currentExperience.focus}</p>
                </div>
                <div className="experience-meta">
                  <span>{currentExperience.period}</span>
                  <span>{currentExperience.location}</span>
                </div>
              </div>
              <p className="experience-summary">{currentExperience.summary}</p>
              <ul>
                {currentExperience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
              </ul>
              <div className="tag-list">
                {currentExperience.stack.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          </div>
        </section>

        <section className="expertise section" id="expertise" aria-labelledby="expertise-heading">
          <div className="section-intro" data-reveal>
            <p className="section-kicker">Expertise</p>
            <h2 id="expertise-heading">Depth across the stack.</h2>
            <p>From LLM integration and AI evaluation to backend services, cloud platforms, and the interfaces people use every day.</p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <article className={`expertise-card expertise-${index + 1}`} key={item.title} data-reveal style={{ '--delay': `${(index % 3) * 70}ms` }}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <small>{item.tools}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="principles section" aria-labelledby="principles-heading">
          <div className="section-intro compact" data-reveal>
            <p className="section-kicker">Engineering approach</p>
            <h2 id="principles-heading">Rigor at every layer.</h2>
          </div>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <article key={principle.title} data-reveal style={{ '--delay': `${index * 80}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="background section" id="background" aria-labelledby="background-heading">
          <div className="section-intro compact" data-reveal>
            <p className="section-kicker">Background</p>
            <h2 id="background-heading">Engineering grounded in rigorous problem solving.</h2>
          </div>
          <div className="background-grid">
            <article className="education-card" data-reveal>
              <p className="card-label">Education</p>
              <div className="degree">
                <span>MSc</span>
                <div><h3>Computer Science</h3><p>University College Dublin · 2017 — 2018</p></div>
              </div>
              <div className="degree">
                <span>BSc</span>
                <div><h3>Computer Science</h3><p>University College Dublin · 2013 — 2017</p></div>
              </div>
            </article>
            <article className="community-card" data-reveal>
              <p className="card-label">Publications & competitive programming</p>
              <h3>Algorithms are still part of the work.</h3>
              <p>Published work includes <cite>JUnit 5: Injection Enabled Tests</cite> and <cite>Design Patterns: Event Bus</cite>.</p>
              <p>ACM ICPC and MCPC coach and committee member who has mentored more than 50 competitive programming teams, and a judge for regional ACM programming competitions.</p>
            </article>
          </div>
        </section>

        <section className="contact section" id="contact" data-reveal>
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Let’s build something dependable.</h2>
          </div>
          <div className="contact-copy">
            <p>Interested in applied AI, full-stack product engineering, or AI training and evaluation work? I’d be glad to connect. Based in Mabalacat City, Pampanga, Philippines.</p>
            <div className="contact-links">
              <a href="mailto:roberamos1525@gmail.com">roberamos1525@gmail.com <ArrowIcon /></a>
              <a href="https://www.linkedin.com/in/robert-ramos-6507973b5" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
              <a href="/Robert_Ramos_CV.pdf" download>Download CV <ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">RR</span><span>Robert Ramos</span></a>
        <p>Software Engineer · Full-Stack &amp; Applied AI · AI Training &amp; Evaluation</p>
        <a href="#top" className="back-to-top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
