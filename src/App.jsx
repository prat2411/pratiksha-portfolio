import React from "react";

const profile = {
  name: "Pratiksha Wankhade",
  title: "AI/LLM Engineer | Software Developer",
  bio: "Final year B.Tech Electronics and Telecommunication student building production-style AI systems and full-stack web applications with React, Node.js, FastAPI, and modern LLM tooling.",
  email: "pratikshaw2411@gmail.com",
  phone: "+91 9764403605",
  location: "Amravati, India",
  github: "https://github.com/prat2411",
  linkedin: "https://www.linkedin.com/in/pratiksha-wankhade2425"
};

const aboutSkills = [
  "Python",
  "React",
  "Node.js",
  "TensorFlow",
  "LangChain",
  "LlamaIndex",
  "Groq",
  "FastAPI"
];

const projects = [
  {
    title: "FlightAI",
    stack: "React + Node + Express + MongoDB + FastAPI + Groq AI",
    description:
      "Full-stack airline booking platform with JWT authentication, flight search, booking management, and Groq-powered AI customer support chatbot.",
    link: "https://flightai-nine.vercel.app/",
    linkLabel: "Live Demo"
  },
  {
    title: "Multimodal Airline Customer Support Agent",
    stack: "LangChain + Function Calling + Gradio + Python",
    description:
      "Production-style multimodal support agent with tool calling for flight lookup, booking assistance, refund processing, and multi-turn context handling.",
    link: "https://github.com/prat2411?tab=repositories",
    linkLabel: "Project on GitHub"
  },
  {
    title: "RAG-Based Document Q&A System",
    stack: "LangChain + RAG + Vector DB + Python",
    description:
      "Enterprise-style knowledge worker that ingests documents, performs retrieval-augmented generation, and answers domain queries with grounded, low-hallucination responses.",
    link: "https://github.com/prat2411?tab=repositories",
    linkLabel: "Project on GitHub"
  }
];

const groupedSkills = {
  "AI/LLM": ["LangChain", "LlamaIndex", "RAG Pipelines", "Prompt Engineering", "LoRA/QLoRA", "Function Calling"],
  "Web Dev": ["React", "Node.js", "Express.js", "FastAPI", "REST APIs", "MongoDB", "JWT Auth"],
  ML: ["Python", "TensorFlow", "Scikit-learn", "PyTorch (Basic)", "Model Evaluation"],
  Tools: ["Git", "GitHub", "Docker", "AWS (EC2/S3/Lambda)", "Postman", "HuggingFace Spaces", "Gradio"]
};

function App() {
  return (
    <>
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="logo">
            PW
          </a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Portfolio 2026</p>
              <h1>{profile.name}</h1>
              <h2>{profile.title}</h2>
              <p className="lead">{profile.bio}</p>
              <div className="action-row">
                <a className="btn btn-primary" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
            <aside className="hero-card">
              <p className="card-label">Focus Areas</p>
              <ul>
                <li>LLM Application Engineering</li>
                <li>Full-Stack Web Development</li>
                <li>AI-Powered User Experiences</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h3>About</h3>
            <p className="section-text">
              I am a final year B.Tech Electronics and Telecommunication student focused on AI/LLM engineering and
              full-stack development. I build practical products such as RAG applications, function-calling agents,
              and end-to-end web platforms, and I enjoy turning complex ideas into deployable, user-centric solutions.
            </p>
            <div className="tag-wrap">
              {aboutSkills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h3>Projects</h3>
            <div className="card-grid projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="card project-card">
                  <p className="card-label">{project.stack}</p>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    {project.linkLabel}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h3>Skills</h3>
            <div className="card-grid skills-grid">
              {Object.entries(groupedSkills).map(([group, skillList]) => (
                <article key={group} className="card skill-card">
                  <h4>{group}</h4>
                  <ul>
                    {skillList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <h3>Education</h3>
            <article className="card edu-card">
              <h4>Government College of Engineering, Yavatmal</h4>
              <p>B.Tech in Electronics and Telecommunication Engineering</p>
              <p>Graduation Year: 2026</p>
              <p>CGPA: 7.5</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h3>Contact</h3>
            <div className="card contact-card">
              <p>
                Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
              <p>Phone: {profile.phone}</p>
              <p>Location: {profile.location}</p>
              <p>
                GitHub: <a href={profile.github}>{profile.github}</a>
              </p>
              <p>
                LinkedIn: <a href={profile.linkedin}>{profile.linkedin}</a>
              </p>
              <p>
                Projects: <a href="https://github.com/prat2411?tab=repositories">View all public repositories</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
