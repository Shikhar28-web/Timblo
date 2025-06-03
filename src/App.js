import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';


import './HomePage.css';
import './Testimonials.css';
import './Footer.css';

const Testimonials = () => {
  const testimonials = [
    { name: "Alex M.", quote: "Swapping my graphic design skills for Spanish lessons was the best decision!" },
    { name: "Priya S.", quote: "I learned coding while teaching someone guitar. Win-win!" },
    { name: "Omar L.", quote: "Great community and super easy to connect with people." },
    { name: "Jamie T.", quote: "I taught yoga while learning Photoshop – highly recommend!" },
    { name: "Sara K.", quote: "Met so many talented people here, and learned a ton." },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-container">
        {testimonials.map((user, i) => (
          <div className="testimonial-card" key={i}>
            <p>"{user.quote}"</p>
            <h4>- {user.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Create your profile",
      description:
        "Tell us what you want to learn and what you can teach. It only takes a few minutes to start.",
      img: "./profile.jpg",
    },
    {
      title: "Get matched instantly",
      description:
        "Our real-time AI connects you with skill partners who complete your learning journey.",
      img: "./match.jpg",
    },
    {
      title: "Book and learn",
      description:
        "Schedule sessions, chat instantly, and start learning or teaching from day one.",
      img: "./nook.jpg",
    },
  ];

  return (
    <section className="how-it-works">
      <h1>A learning experience </h1>
      <h2>built around you.</h2>
      <br/>
      <div className="how-cards">
        {steps.map((step, i) => (
          <div className="how-card" key={i}>
            <img src={step.img} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer reveal">
      <div className="footer-grid">
        <div className="footer-section brand-section">
          <h3 className="footer-logo">TIMBLO</h3>
          <p>Empowering knowledge exchange through skill sharing.</p>
          
        </div>
        
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><a href="/"><i className="fa-solid fa-angle-right"></i> Home</a></li>
            <li><a href="skillmatches.html"><i className="fa-solid fa-angle-right"></i> Skills</a></li>
            <li><a href="/testimonials"><i className="fa-solid fa-angle-right"></i> Success Stories</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/help"><i className="fa-solid fa-angle-right"></i> Help Center</a></li>
            <li><a href="/terms"><i className="fa-solid fa-angle-right"></i> Terms</a></li>
            <li><a href="/privacy"><i className="fa-solid fa-angle-right"></i> Privacy</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="/" target="_blank" rel="noopener noreferrer"><img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbf0a2f2b67e3b3ba079c_Twitter%20Icon.svg" alt="Twitter" /></a>
            <a href="/" target="_blank" rel="noopener noreferrer"><img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbfe70fcf5a0514c5b1da_Instagram%20Icon.svg" alt="Instagram" /></a>
            <a href="/" target="_blank" rel="noopener noreferrer"><img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbe42e1e6034fdaba46f6_Facebook%20Icon.svg" alt="Facebook" /></a>
            <a href="/" target="_blank" rel="noopener noreferrer"><img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dc0002f2b676eb4ba0869_LinkedIn%20Icon.svg" alt="LinkedIn" /></a>
          </div>
        </div>

        
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          © 2024 TIMBLO. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

const SkillMatches = () => {
  useEffect(() => {
    window.location.href = '/skillmatches.html';
  }, []);
  return null;
};

const AboutUs = () => {
  useEffect(() => {
    window.location.href = '/about.html';
  }, []);
  return null;
};

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="Logo.png" alt="TIMBLO Logo" width='300px' onClick={() => navigate('/')} style={{ cursor: 'pointer' }}/>
      </div>
      <div className="nav-links">
        <Link to="/skills"><i className="fa-solid fa-graduation-cap"></i> Skills</Link>
        <Link to="/about"><i className="fa-solid fa-users"></i> About Us</Link>
        
        <button className="sign-in" onClick={() => window.location.href = '/signin.html'}>
          <i className="fa-solid fa-right-to-bracket"></i> Sign In
        </button>  
   
        <button className="sign-up" onClick={() => window.location.href = '/signup.html'}>
          <i className="fa-solid fa-user-plus"></i> Sign Up
        </button>
      </div>
    </nav>
  );
};

const HomePage = () => {
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    // Mouse movement effect for cards
    const cards = document.querySelectorAll('.how-card');
    
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      
      // 3D rotation effect
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (card) => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });

    const updateScrollProgress = () => {
      if (!scrollIndicatorRef.current) return;
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      
      const progress = (scrolled / (documentHeight - windowHeight)) * 100;
      scrollIndicatorRef.current.style.transform = `scaleY(${progress}%)`;
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    // Cleanup
    return () => {
      observer.disconnect();
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="homepage">
      <Navigation />

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-progress" ref={scrollIndicatorRef}></div>
      </div>

      {/* Hero Section */}
      <section className="hero reveal">
        <h1 className="hero-heading">
          Got skills? Need skills? <br />
          Let's swap them <br />
          with<br/></h1>
         <h1 className="hero1"> TIMBLO
        </h1>

        <div className="hero-buttons">
          <button className="swap-btn" onClick={() => window.location.href = '/swap.html'}>
            <i className="fa-solid fa-arrows-rotate"></i> Swap Now
          </button>

          <button className="explore-btn" onClick={() => window.location.href = '/skillmatches.html'}>
            <i className="fa-solid fa-compass"></i> Explore Skills
          </button>
        </div>

        <p className="hero-subtext">
          Join our community of learners and teachers
        </p>
      </section>

      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillMatches />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
