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
    { title: 'Ticket Theater Manager', summary: 'Manages season ticket operations by overseeing reservations, coordinating seating availability, ', details: 'Manages season ticket operations by overseeing reservations, coordinating seating availability, handling customer accounts, and ensuring a smooth experience for recurring patrons.' },
    { title: 'Social media Manager', summary: 'Multiple NetSuite API integrations.', details: 'Designed and implemented NetSuite SOAP/REST integrations to sync orders, inventory and invoices across systems.' },
    { title: 'Path-Following/Steering Simulation', summary: 'VoIP switchboard solution', details: 'Built a hosted Asterisk-based switchboard with multi-tenant routing, monitoring and failover.' },
    { title: 'Skeleton Siege', summary: 'Car aggregation platform', details: 'Co-founded and built an aggregator site to help buyers compare dealers and offers.' },
    { title: 'Eglise Porte Etroite', summary: 'Short summary for project five.', details: 'Long form details for project five go here.' },

  ];

  const [selectedProject, setSelectedProject] = useState(null);
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
            I’m a software engineer with a Computer Science background and hands-on experience building real-world applications. I enjoy working across the stack, from developing clean user interfaces to strengthening my C++ and systems-level fundamentals where performance and memory management matter.
          </p>
          <p>
            I’m intentional about continuously improving my skills through building projects and interview-focused problem solving. Outside of engineering, I’ve held leadership roles mentoring and organizing groups, which has strengthened my communication and teamwork skills.
          </p>
          <p>
            I’m excited to contribute to a dynamic team where I can grow as an engineer while delivering meaningful impact through technology. If you’d like to connect, feel free to reach out via the contact form below!
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
          <div className='skill-column'>
            <h4>Front-end</h4>
            <ul>
              <li className='skill-pill color-1'>HTML/CSS</li>
              <li className='skill-pill color-2'>React</li>
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
          <div className='skill-column'>
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
      </section>

      <section id='contact' className='contact reveal'>
        <h2>Contact Me</h2>
        <form className='contact-form' onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const email = form.email.value;
          const message = form.message.value;
          const mailto = `mailto:you@example.com?subject=${encodeURIComponent('Portfolio contact from ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>')}`;
          window.location.href = mailto;
        }}>
          <label>Name<input name='name' required/></label>
          <label>Email<input name='email' type='email' required/></label>
          <label>Message<textarea name='message' required/></label>
          <button type='submit' className='btn'>Send Email</button>
        </form>
      </section>

      {selectedProject && (
        <div className='modal-overlay' onClick={closeProject} role='dialog' aria-modal='true'>
          <div className='modal' onClick={(e)=>e.stopPropagation()}>
            <button className='modal-close' onClick={closeProject} aria-label='Close'>×</button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
          </div>
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
        <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='social'>
          <svg className='social-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' role='img' aria-hidden='false'>
            <title>LinkedIn</title>
            <path fill='currentColor' d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.852-3.036-1.854 0-2.136 1.445-2.136 2.938v5.667H8.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.372-1.85 3.603 0 4.269 2.372 4.269 5.458v6.283zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.966 20.452H3.708V9h3.258v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.538C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.269V1.73C24 .774 23.2 0 22.225 0z'/>
          </svg>
        </a>
        <a href='https://github.com/' target='_blank' rel='noreferrer' aria-label='GitHub' className='social'>
          <svg className='social-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' role='img' aria-hidden='false'>
            <title>GitHub</title>
            <path fill='currentColor' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.911 1.23 3.221 0 4.61-2.807 5.625-5.48 5.92.43.372.81 1.102.81 2.222 0 1.606-.014 2.903-.014 3.297 0 .32.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/>
          </svg>
        </a>
      </div>
    </div>
  );
}
