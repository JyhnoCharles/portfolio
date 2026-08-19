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
// import game from './assets/IMG/game.png'
// import game1 from './assets/IMG/game1.png'
// import game2 from './assets/IMG/game2.png'
import path from './assets/IMG/path.png'
import path1 from './assets/IMG/path1.png'
import picture1 from './assets/img/AI.png'
import picture2 from './assets/img/picture2.png'
import picture3 from './assets/img/picture3.png'
import map1 from './assets/img/map1.png'
import map2 from './assets/img/Map2.png'
import map3 from './assets/img/Map3.png'

// Main App component
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

  // Project data with details and images for the modal
  const projectsData = [

      { title: 'NBA Origins MAP', summary: 'An interactive map visualizing NBA players by birthplace, built on a fully serverless AWS architecture to demonstrate end-to-end cloud deployment.', 
      link: 'https://nbamapped.com/',
      details: [
        'I designed and built an interactive map using MapLibre GL JS that visualizes NBA players by birthplace, with a detail panel, search autocomplete, and filtering to explore players by team, position, and origin.',
        'built a serverless backend on AWS using Lambda, API Gateway, DynamoDB, and S3 to store and serve player data, giving me hands-on experience building and deploying cloud applications.',
        'I configured CloudFront, Route 53, and ACM to host the app on a custom domain with HTTPS, handling SSL certificates, caching, and DNS from start to finish.',
      ],
      images: [map1, map2, map3] },


    { title: 'Ticket Theater Manager', summary: 'For my capstone project, With a team built a ticketing system that handled seat reservations, user accounts, and payment tracking, focusing on reliability, edge-case handling, and smooth event operations.', 

      details: [
        'Collaborated with a team on an academic theater ticket management system, working in Agile sprints with a shared ticketing board to plan, assign, and track tasks from backlog to completion.',
        'Implemented core features including seat availability checks, user account handling, and reservation creation/deletion, while handling edge cases like conflicting reservations and invalid input.',
        'Gained firsthand experience with Agile workflows, sprint planning, and ticket-based task tracking.',
      ],
      images: [photo1, photo2, photo3], },




    { title: 'Social media Manager', summary: 'Explored social platform APIs by building a small tool to authenticate via OAuth and pull live data from Twitter/X, learning how token-based auth, rate limits, and real-world API constraints work.', 
      github: 'https://github.com/JyhnoCharles',
      details: [
        'I built a small social media management system to better understand how social platforms handle authentication and data access.',
        'I worked directly with social media APIs, implementing OAuth flows, managing access tokens, and handling permissions required to read and post data.',
        
      ],
      images: [] },




    { title: 'AI Pathfinding & Steering Behaviors System', summary: 'Developed a 2D pathfinding and movement system combining grid-based A* search with real-time steering behaviors, producing smooth, physically-based character motion visualized through trajectory plots.', 
      github: 'https://github.com/JyhnoCharles',
      details: [
        'Built a Python simulation of autonomous path-following, where a virtual agent follows a path by predicting a target point ahead of it rather than just steering toward the next waypoint.',
        'Implemented a look-ahead algorithm that finds a point a set distance along the path and steers toward it, producing smooth, natural-looking movement instead of sharp turns.',
        'Tuned the look-ahead distance and steering response to balance responsiveness with smoothness, so the agent follows curves and turns without overshooting or jittering.',
      ],

      images: [path, path1] },




    // { title: 'Skeleton Siege', summary: 'Collaborated with a team to build a game in Unity using C#, contributing to gameplay systems, debugging, and integrating features within a shared codebase.', 
    //   github: 'https://github.com/JyhnoCharles',
    //   details: [
    //     'Skeleton Siege was a collaborative game development project built in Unity using C#, where I worked as part of a team to design and implement core gameplay mechanics.',
    //     'I contributed to system logic, UI, and debugging within a shared codebase, which strengthened my experience with version control and team collaboration.',
    //     'This project reinforced collaborative development practices and applied software engineering principles in an interactive application.'
    //   ],
    //   images: [game, game1, game2] },




     { title: 'Eglise Porte Etroite', summary: 'Designed and deployed a responsive church website with livestreams, donations, and admin tools to connect and support a growing community.',
       link: 'https://www.egliseporteetroite.org',
       details: [
        'Designed and deployed a responsive church website serving a congregation of 150-200 members, integrating livestreams, donations, and community outreach features',
        'Built a serverless contact pipeline using AWS Lambda, API Gateway, and SES to capture and store visitor submissions in DynamoDB, enabling direct communication between members and leadership.',
        'Developed an internal admin feature to support attendance tracking via a scanning workflow, improving record accuracy and reducing manual effort.'
       ],
       images: [web] },

    { title: 'Unity ML Racing Agent', summary: 'Built a reinforcement learning agent for a Unity racing environment using Unity ML-Agents to learn lane-keeping, overtaking, and reward shaping.',
      github: 'https://github.com/JyhnoCharles/unity-ml-racing-agent',
      video: 'https://youtu.be/BwBkFZGSubQ',
      details: [
          'I built a small tool to learn how social platforms handle authentication and data access, focusing on Twitter/X as a case study.',
          'I implemented OAuth flows from scratch, managing access tokens and permissions to authenticate requests and pull live data from the platform.',
          'I navigated real-world constraints like rate limits, inconsistent documentation, and shifting API behavior, which sharpened my ability to read technical docs, test assumptions, and debug independently.'
        ],
      images: [picture1, picture2, picture3]
    },

  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [currentPicture, setCurrentPicture] = useState(0);
  function openProject(i){
    setSelectedProject(projectsData[i]);
    setCurrentPicture(0);
  }
  function closeProject(){
    setSelectedProject(null);
    setCurrentPicture(0);
  }

  function handleClick(direction){
    setCurrentPicture((pictureIndex) => {
      const lastPicture = selectedProject.images.length - 1;
      if (direction === 'next') return Math.min(pictureIndex + 1, lastPicture);
      return Math.max(pictureIndex - 1, 0);
    });
  }






  // Main render

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
            I’m a computer science graduate focused on fullstack development, with hands on experience across React, Node.js, and AWS, I enjoy building clean, responsive applications while continuously improving my skills.
          </p>
          <p>
            Im intentional about growth and building projects to level up my skills as an engineer. Outside of engineering I've held leadership roles, mentoring and organizing youth groups which strengthened my communication and collaboration skills.
          </p>
          <p>
            I'm looking to join a team where I can keep growing as an engineer. If you’d like to connect, feel free to reach out via linkedin or <a style={{textDecoration: 'underline', fontWeight: 'normal', color: "white"}} href="mailto:JyhnoCharles@gmail.com">email</a>, or explore my projects below.
          </p>
        </div>
      </section>
















        {/* // Projects section with modal details and lightbox for images */}

      <section id='projects' className='projects reveal'>
        <h2>Projects</h2>
        <div className='projects-grid'>
          {projectsData.map((p, i) => (
            <div key={i} className='project-card'>
              <div>
                <div className='project-header' style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  {/* <a href={p.github || 'https://github.com/JyhnoCharles'} target='_blank' rel='noreferrer' className='project-github' aria-label={`${p.title} GitHub`}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='false'>
                      <path fill='currentColor' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.911 1.23 3.221 0 4.61-2.807 5.625-5.48 5.92.43.372.81 1.102.81 2.222 0 1.606-.014 2.903-.014 3.297 0 .32.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/>
                    </svg>
                  </a> */}
                  <h3 style={{margin:0, flex:1}}>{p.title}</h3>
                </div>
                <p>{p.summary}</p>
              </div>
              <div style={{display:'flex', justifyContent:'flex-end', marginTop:'8px'}}>
                <button className='view-full' onClick={() => openProject(i) }>View full →</button>
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
                <li className='skill-pill color-12'>Supabase</li>
              </ul>
            </div>
            <div className='skill-column'>
              <h4>Frameworks & Libraries</h4>
              <ul>
                <li className='skill-pill color-10'>React</li>
                <li className='skill-pill color-11'>Next.js</li>
                <li className='skill-pill color-12'>Tailwind</li>
                <li className='skill-pill color-9'>PyTorch</li>
                <li className='skill-pill color-8'>ML-Agents</li>

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

      <section>
          <h2> Certifications </h2>
                      {/* Certifications */}
            <hr style={{ border: 'none', borderTop: '1px solid #222', margin: '40px 0' }} />
            <a href='https://www.credly.com/badges/b67d3968-fe34-45d5-942c-60c65893e400/public_url' target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'inherit' }} aria-label='AWS Certified Cloud Practitioner Certification'>
            <div className="cert-area">
              <p className="cert-section-title"></p>
              <div className="cert-card">

                <div className="cert-badge">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                    <path d="M20 6L8 13V27L20 34L32 27V13L20 6Z" fill="#232" stroke="#3a6a3a" strokeWidth="1.5" />
                    <path d="M14 20L18 24L26 16" stroke="#6dbf6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="cert-info">
                  <span className="cert-name">AWS Certified Cloud Practitioner</span>
                  <span className="cert-issuer">Amazon Web Services</span>
                  <span className="cert-pill">Certified</span>
                </div>

              </div>
            </div>

            </a>




      </section>
















      {/* </section> */}

      {selectedProject && (
        
        <div className='modal-overlay' onClick={closeProject} role='dialog' aria-modal='true'>
          <div className='modal' onClick={(e)=>e.stopPropagation()}>
            <button className='modal-close' onClick={closeProject} aria-label='Close'>×</button>
            <h3>{selectedProject.title}</h3>
            {selectedProject.link && (
              <a href={selectedProject.link} target='_blank' rel='noreferrer' aria-label={`${selectedProject.title} Link`} style={{display:'inline-flex', alignItems:'center', gap:'8px', background:'#ffb07c', color:'#000000', padding:'6px 10px', borderRadius:'6px', marginTop:'8px', textDecoration:'none'}}>
                <span>Open Project</span>
              </a>
            )}
            {selectedProject.video && (
              <a href={selectedProject.video} target='_blank' rel='noreferrer' aria-label={`${selectedProject.title} Video`} style={{display:'inline-flex', alignItems:'center', gap:'8px', background:'#FF0000', color:'#fff', padding:'6px 10px', borderRadius:'6px', marginTop:'8px', textDecoration:'none'}}>
                <svg width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='false' focusable='false'>
                  <path fill='#fff' d='M10 8.64v6.72L15.27 12 10 8.64z'/>
                  <path fill='#fff' d='M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C16.9 2.5 12 2.5 12 2.5s-4.9 0-8.5.4c-.5 0-1.4 0-2.1 1C.7 4.6.5 6.2.5 6.2S0 8.3 0 10.5v3C0 16 0.5 18 0.5 18s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.8.4 7.8.4s4.9 0 8.5-.4c.5 0 1.4 0 2.1-1 .6-.7.8-2.3.8-2.3s.5-2.1.5-4.3v-3c0-2.2-.5-4.3-.5-4.3z' opacity='0.0'/>
                </svg>
                <span>Watch Video</span>
              </a>
            )}
            {Array.isArray(selectedProject.details) ? (
              selectedProject.details.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))
            ) : (
              <p>{selectedProject.details}</p>
            )}

            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className='modal-image-viewport'>
                <div
                  className='modal-images'
                  style={{ '--picture-offset': currentPicture }}
                >
                  {selectedProject.images.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                      className='modal-image'
                      onClick={() => setLightboxSrc(src)}
                      style={{ cursor: 'zoom-in' }}
                    />
                  ))}
                </div>
                <div className='button-container'>
                  <button
                    id='previous'
                    onClick={() => handleClick('previous')}
                    disabled={currentPicture === 0}
                    aria-label='Previous project image'
                  >
                    &lt;
                  </button>
                  <button
                    id='next'
                    onClick={() => handleClick('next')}
                    disabled={currentPicture === selectedProject.images.length - 1}
                    aria-label='Next project image'
                  >
                    &gt;
                  </button>
                </div>
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

// button slider




 
 

  
  

  



{/* Header component with effects */}
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
