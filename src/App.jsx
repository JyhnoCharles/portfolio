// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import Navbar from './assets/components/Navbar'
import Waves from './assets/components/waves'
import photo from './assets/IMG/photo.png'
import photo1 from './assets/IMG/Java1.png'
import photo2 from './assets/IMG/Java2.png'
import photo3 from './assets/IMG/Java3.png'
import web from './assets/IMG/web.png'
import game from './assets/IMG/game.png'
import game1 from './assets/IMG/game1.png'
import game2 from './assets/IMG/game2.png'
import path from './assets/IMG/path.png'
import path1 from './assets/IMG/path1.png'

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });
    reveals.forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const projectsData = [
    { title: 'Ticket Theater Manager', summary: 'With a team built and managed a ticketing system that handled seat reservations, user accounts, and payment tracking, focusing on reliability, edge-case handling, and smooth event operations.', 
      details: [
        'As part of an academic project, I designed and managed a theater ticket management system focused on reservations, seating organization, and basic payment tracking.',
        'I implemented core features such as seat availability checks, user account handling, and reservation creation and deletion while handling edge cases like conflicting reservations and invalid inputs.',
        'This project strengthened my problem-solving skills, reinforced clean code structure and debugging practices, and improved my ability to plan and iterate features from start to finish.'
      ],
      images: [photo1, photo2, photo3], },




    { title: 'Social media Manager', summary: 'Built my own social media management tools to learn how platform APIs and authentication work, gaining hands-on experience with OAuth, tokens, and real API limitations.', 
      details: [
        'I built a small social media management system to better understand how social platforms handle authentication and data access.',
        'I worked directly with social media APIs, implementing OAuth flows, managing access tokens, and handling permissions required to read and post data.',
        'I faced real-world challenges such as API limitations, rate limits, and changing documentation, which improved my ability to read technical docs, test approaches, and debug independently.'
      ],
      images: [] },




    { title: 'AI Pathfinding & Steering Behaviors System', summary: 'Developed a 2D pathfinding and movement system combining grid-based A* search with real-time steering behaviors (Seek, Flee, Arrive, Follow Path), producing smooth, physically-based character motion visualized through trajectory plots.', 
      details: [
        'Built a modular 2D navigation system that cleanly separates global planning from local motion control, allowing interchangeable planners (grid A*, Dijkstra, Theta*) and steering modules.',
        'Implemented A* with admissible heuristics (Manhattan, Euclidean) and optional tie-breakers for speed; added Theta* to produce shorter, smoother paths by enabling line-of-sight shortcuts when appropriate.',
        'Converted discrete paths into continuous motion using steering behaviors (Seek, Arrive, Obstacle Avoidance, Follow-Path) with lookahead, velocity clamping, acceleration limits, and orientation smoothing for natural movement.',
        'Instrumented simulations with per-timestep logs (position, velocity, acceleration, heading, behavior state) and realtime visualization overlays for paths, waypoints, and collision bounds to support debugging and parameter tuning.'
      ],
      images: [path, path1] },




    { title: 'Skeleton Siege', summary: 'Collaborated in a team to build a game in Unity using C#, contributing to gameplay systems, debugging, and integrating features within a shared codebase.', 
      details: [
        'Skeleton Siege was a collaborative game development project built in Unity using C#, where I worked as part of a team to design and implement core gameplay mechanics.',
        'I contributed to system logic, gameplay behavior, and debugging within a shared codebase, which strengthened my experience with version control and team collaboration.',
        'This project reinforced collaborative development practices and applied software engineering principles in an interactive application.'
      ],
      images: [game, game1, game2] },




     { title: 'Eglise Porte Etroite', summary: 'Designed and deployed a responsive church website with livestreams, donations, and admin tools to connect and support a growing community.',
       details: [
        'Designed and launched a church website to serve a community of 100+ members through livestream access, online donations, and centralized service information.',
        'Built a responsive, user-friendly interface using HTML, CSS, and JavaScript to improve accessibility and digital outreach.',
        'Developed an internal admin feature to support attendance tracking via a scanning workflow, improving record accuracy and reducing manual effort.'
       ],
       images: [web] },

  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  function openProject(i){ setSelectedProject(projectsData[i]); }
  function closeProject(){ setSelectedProject(null); }

  return (
    <main>
      <Waves />
      <Navbar />

      <section className={`header`}>
        <HeaderWithEffects photo={photo} />
      </section>

      <section id='about' className='about reveal'>
        <div className='about-box'>
          <h2>About Me</h2>
          <p>
            I’m a computer science developer focused on full-stack web development. I primarily work with React, HTML, CSS, and Vite, and I enjoy building clean, responsive applications while continuously improving my skills.
          </p>
          <p>
            I’m intentional about continuously improving my skills through building projects and interview-focused problem-solving. Outside of engineering, I’ve held leadership roles mentoring and organizing groups, which has strengthened my communication and teamwork skills.
          </p>
          <p>
            I’m excited to contribute to a dynamic team where I can grow as an engineer while making a meaningful impact with technology. If you’d like to connect, feel free to reach out via the contact form below!
          </p>
        </div>
      </section>

      <section id='projects' className='projects reveal'>
        <h2>Projects</h2>
        <div className='projects-grid'>
          {projectsData.map((p, i) => (
            <div key={i} className='project-card'>
              <div>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
              </div>
              <div style={{display:'flex', justifyContent:'flex-end', marginTop:'8px'}}>
                <button className='view-full' onClick={() => openProject(i)}>View full →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id='skills' className='skills reveal'>
        <h2>Skills</h2>
        <div className='skills-grid'>
          <div className='skills-top'>
            <div className='skill-column'>
              <h4>Front-end</h4>
              <ul>
                <li className='skill-pill color-1'>HTML/CSS</li>
                <li className='skill-pill color-3'>Vite</li>
              </ul>
            </div>
            <div className='skill-column'>
              <h4>Back-end</h4>
              <ul>
                <li className='skill-pill color-4'>Node.js</li>
                <li className='skill-pill color-5'>Express</li>
                <li className='skill-pill color-6'>REST APIs</li>
                <li className='skill-pill color-6'>OAuth</li>
                <li className='skill-pill color-11'>PostgreSQL</li>
                <li className='skill-pill color-12'>Supabase</li>
              </ul>
            </div>
            <div className='skill-column'>
              <h4>Tools</h4>
              <ul>
                <li className='skill-pill color-7'>Git</li>
                <li className='skill-pill color-8'>VSCode</li>
                <li className='skill-pill color-9'>npm</li>
                <li className='skill-pill color-10'>Vercel</li>
                <li className='skill-pill color-9'>Docker</li>
                <li className='skill-pill color-1'>Unity</li>
              </ul>
            </div>
            <div className='skill-column'>
              <h4>Frameworks</h4>
              <ul>
                <li className='skill-pill color-10'>React</li>
                <li className='skill-pill color-11'>Next.js</li>
                <li className='skill-pill color-12'>Tailwind</li>
              </ul>
            </div>
          </div>

          <div className='languages-bottom'>
            <div className='skill-column centered-languages'>
              <h4>Languages</h4>
              <ul>
                <li className='skill-pill color-1'>C++</li>
                <li className='skill-pill color-2'>Java</li>
                <li className='skill-pill color-3'>Python</li>
                <li className='skill-pill color-4'>Lua</li>
                <li className='skill-pill color-5'>C#</li>
                <li className='skill-pill color-6'>Matlab</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className='contact reveal'>
        <h2>Contact Me</h2>
      <form
  className="contact-form"
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot (bots fill it, humans won't)
    if (form.website.value) return;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch("https://formspree.io/f/XXXXXXX", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      form.reset();
      alert("Sent! ✅");
    } else {
      alert("Something went wrong. Try again.");
    }
  }}
>
  {/* Honeypot field (hidden) */}
  <input
    name="website"
    type="text"
    tabIndex="-1"
    autoComplete="off"
    style={{ position: "absolute", left: "-9999px" }}
  />

  <label>Name<input name="name" required /></label>
  <label>Email<input name="email" type="email" required /></label>
  <label>Message<textarea name="message" required /></label>
  <button type="submit" className="btn">Send</button>
</form>

      </section>

      {selectedProject && (
        <div className='modal-overlay' onClick={closeProject} role='dialog' aria-modal='true'>
          <div className='modal' onClick={(e)=>e.stopPropagation()}>
            <button className='modal-close' onClick={closeProject} aria-label='Close'>×</button>
            <h3>{selectedProject.title}</h3>
            {Array.isArray(selectedProject.details) ? (
              selectedProject.details.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))
            ) : (
              <p>{selectedProject.details}</p>
            )}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className='modal-images'>
                {selectedProject.images.slice(0,3).map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`${selectedProject.title} screenshot ${idx+1}`}
                    className='modal-image'
                    onClick={() => setLightboxSrc(src)}
                    style={{ cursor: 'zoom-in' }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {lightboxSrc && (
        <div className='lightbox-overlay' onClick={() => setLightboxSrc(null)} role='dialog' aria-modal='true'>
          <img src={lightboxSrc} alt='Enlarged screenshot' className='lightbox-image' />
        </div>
      )}

    </main>
  )
}

export default App


function HeaderWithEffects({ photo }){
  const fullGreeting = "Hello, I'm Jyhno Pierre Charles";
  const [greeting, setGreeting] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i >= fullGreeting.length) {
        clearInterval(timer);
        return;
      }
      const nextChar = fullGreeting[i];
      setGreeting((prev) => prev + nextChar);
      i += 1;
    }, 60);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const headerEl = document.querySelector('.header');
    if (!headerEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );
    observer.observe(headerEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`header-top ${scrolled ? 'scrolled' : ''}`}>
      <div className='header-text'>
        <h1 className='greeting'>{greeting}</h1>
        <p className='role'>Software Developer</p>
      </div>

      <img src={photo} srcSet={photo} className='photo' alt='Jyhno Pierre Charles' />

      <div className='socials'>
        <a href='http://www.linkedin.com/in/jyhnopierrecharles' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='social'>
          <svg className='social-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' role='img' aria-hidden='false'>
            <title>LinkedIn</title>
            <path fill='currentColor' d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.852-3.036-1.854 0-2.136 1.445-2.136 2.938v5.667H8.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.372-1.85 3.603 0 4.269 2.372 4.269 5.458v6.283zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.966 20.452H3.708V9h3.258v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.538C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.269V1.73C24 .774 23.2 0 22.225 0z'/>
          </svg>
        </a>
        <a href='https://github.com/JyhnoCharles' target='_blank' rel='noreferrer' aria-label='GitHub' className='social'>
          <svg className='social-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' role='img' aria-hidden='false'>
            <title>GitHub</title>
            <path fill='currentColor' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.911 1.23 3.221 0 4.61-2.807 5.625-5.48 5.92.43.372.81 1.102.81 2.222 0 1.606-.014 2.903-.014 3.297 0 .32.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/>
          </svg>
        </a>
      </div>
    </div>
  );
}
