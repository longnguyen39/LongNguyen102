"use client";

import Image from "next/image";
import styles from "../page.module.css"; // Reusing the same styles
import aboutStyles from "./about.module.css"; // Additional styles specific to about page
import { Github, AppleMac } from 'iconoir-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AnimatedOnce from '@/components/AnimatedOnce';

export default function About() {
  // Add scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(aboutStyles.visible);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
    
    // Observe all elements with the scrollFadeIn class
    document.querySelectorAll(`.${aboutStyles.scrollFadeIn}`).forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      // Clean up the observer when component unmounts
      document.querySelectorAll(`.${aboutStyles.scrollFadeIn}`).forEach(section => {
        // Only unobserve if section is still in the DOM and has a parentNode
        if (section && section.parentNode) {
          observer.unobserve(section);
        }
      });
      observer.disconnect();
    };
  }, []);
  // Footer social icons - for use at the bottom right (same as home page)
  const FooterSocials = () => (
    <div className={styles.footerSocials}>
      <a
        href="https://www.linkedin.com/in/long-nguyen-309092205"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerSocialLink}
      >
        <FaLinkedinIn className="linkedin" style={{ color: '#0077b5', fontSize: '1.5em' }} />
      </a>
      <a
        href="https://github.com/longnguyen39"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerSocialLink}
      >
        <Github className="github" style={{ color: '#27ae60', fontSize: '1.0em' }} />
      </a>
      <a
        href="https://apps.apple.com/us/developer/long-nguyen/id1519144221"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerSocialLink}
      >
        <AppleMac style={{ color: '#fff', fontSize: '1.0em' }} />
      </a>
    </div>
  );

  return (
    <div className={`${styles.page} aboutPage`}>
      <Navbar /> { }
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={`${styles.heroRow} ${aboutStyles.aboutHeroRow}`}>
          <div className={`${styles.heroSpacer} ${aboutStyles.heroSpacerOverride}`}></div>
          <div className={`${styles.heroContentWrapper} ${aboutStyles.aboutHeroContent}`}>
            <div className={aboutStyles.heroRowFlex}>
              <AnimatedOnce animation="slideUp" duration={0.5} delay={0} animateOnce={true}>
                <Image
                  src="/profile.jpg"
                  alt="Long Nguyen profile"
                  width={100}
                  height={100}
                  className={aboutStyles.heroProfileImage}
                  priority
                />
              </AnimatedOnce>
              <AnimatedOnce animation="slideUp" duration={0.5} delay={0} animateOnce={true}>
                <h1 className={aboutStyles.aboutTitle}>About Me</h1>
              </AnimatedOnce>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={aboutStyles.introSection}>
          <AnimatedOnce animation="slideUp" duration={0.5} delay={0} animateOnce={true}>
            <p className={aboutStyles.introText}>
              I'm a passionate iOS developer with over 5 years of experience creating intuitive and impactful mobile applications. My journey in software development has been driven by a desire to solve real-world problems through elegant code and thoughtful design. I dream to work in a tech company, whether it be a startup or a large company. With a strong foundation in Swift, SwiftUI and AI integration, I strive to build impactful applications that enhance life quality of people around me. When I'm not coding, you'll find me exploring hiking trails, playing pickleball, and continuously learning about tech and business.
            </p>
          </AnimatedOnce>
        </section>

        {/* iOS Experience Section */}
        <section className={`${aboutStyles.experienceSection} ${aboutStyles.scrollFadeIn}`}>
          <h2 className={aboutStyles.sectionTitle + ' ' + aboutStyles.sectionTitleLarge}>iOS Experience</h2>
          <div className={aboutStyles.experienceContent}>
            <div>
              <h3 className={aboutStyles.experienceCardTitle + ' ' + aboutStyles.leftAlign}>App Development Journey</h3>
              <p>
                I've been developing iOS applications since the Corona Virus pandemic, focusing on creating intuitive and impactful user experiences. My journey began with Swift and UIKit. Then, I started to learn SwiftUI and embrace the latest iOS frameworks and design patterns. My expertise includes:
              </p>
              <ul className={aboutStyles.skillsList}>
                <li>Swift & SwiftUI for modern, declarative interfaces</li>
                <li>UIKit for robust application architecture</li>
                <li>Firebase for database and authentication</li>
                <li>Canva and Figma for UI/UX design</li>
                <li>Push Notifications and background processing</li>
              </ul>
              <div className={aboutStyles.buttonContainer}>
                <a 
                  href="https://github.com/longnguyen39" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={aboutStyles.githubButton}
                >
                  <Github style={{ marginRight: '10px' }} /> View My Github
                </a>
              </div>
            </div>
            <div>
              <h3 className={aboutStyles.experienceCardTitle}>App Store Success</h3>
              <p>
                Currently, I have 4 apps on the App Store, each solving unique problems and receiving positive user feedback. Initially, I build apps for my personal use. Then, I started to build apps for my friends and family. Note that I use my apps everyday and constantly improve them. Notable achievements:
              </p>
              <ul className={aboutStyles.achievementsList}>
                <li>Maintained a 4.7+ star average rating</li>
                <li>Constantly shipping updates to my apps</li>
                <li>Built a loyal user base with high retention rates</li>
                <li>All apps are free to download</li>
                <li>Fast response to user feedback</li>
              </ul>
              <div className={aboutStyles.buttonContainer}>
                <a 
                  href="https://apps.apple.com/us/developer/long-nguyen/id1519144221" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={aboutStyles.appStoreButton}
                >
                  <AppleMac style={{ marginRight: '10px' }} /> View My Apps on App Store
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Experience Section */}
        <section className={`${aboutStyles.experienceSection} ${aboutStyles.scrollFadeIn}`}>
          <h2 className={aboutStyles.sectionTitle + ' ' + aboutStyles.sectionTitleLarge}>AI Experience</h2>
          <div className={aboutStyles.experienceContent}>
            <div>
              <h3 className={aboutStyles.experienceCardTitle}>AI Integration</h3>
              <p>
              Since ChatGPT's groundbreaking launch, I've been captivated by AI's transformative potential and have made it an integral part of my daily workflow. From accelerating development cycles and enhancing code quality to conducting comprehensive market research and competitive analysis, AI tools have become my secret weapon for building innovative solutions. Key areas of focus:
              </p>  
              <ul className={aboutStyles.skillsList}>
                <li>Code generation: for faster development cycles and enhanced code quality</li>
                <li>Image generation: for entertainment and experimentation</li>
                <li>Personalization: Recommendation systems for personalized user experiences</li>
                <li>Market research: anticipate user needs and market trends to drive product decisions and user engagement</li>
              </ul>
            </div>
            <div>
              <h3 className={aboutStyles.experienceCardTitle}>AI Models Research</h3>
              <p>
                I'm constantly expanding my knowledge in the AI field, staying updated with the latest research and technologies. I believe AI will fundamentally transform how we interact with software, and I'm excited to be part of this evolution. Recent explorations:
              </p>
              <ul className={aboutStyles.achievementsList}>
                <li>ChatGPT: best at creativity, slow at speed</li>
                <li>LLaMA: fast at speed, but not as creative</li>
                <li>Claude: best at writing, slow at speed</li>
                <li>Grok: great sources of information from X</li>
                <li>Gemini: Google but faster and more intuitive</li>
                <li>DeepSeek: cheap but fast, espicially for developers</li>
                <li>Perplexity: best for research with citations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className={`${aboutStyles.experienceSection} ${aboutStyles.scrollFadeIn}`}>
          <h2 className={aboutStyles.sectionTitle + ' ' + aboutStyles.sectionTitleLarge}>Hobbies</h2>
          <div className={aboutStyles.hobbiesContent}>
            <div>
              <h3 className={aboutStyles.experienceCardTitle}>Outdoor Activities</h3>
              <p>
                When I'm not coding, I love spending time outdoors. Hiking through scenic trails gives me the perfect balance to my tech-focused work life. I try to explore a new trail at least twice a month, finding that these experiences often spark creative solutions to coding challenges.
              </p>
              <p>
                I'm also an avid runner, participating in several half-marathon events annually. The discipline and endurance required for running directly translates to my approach to complex development projects.
              </p>
            </div>
            <div>
              <h3 className={aboutStyles.experienceCardTitle}>Fitness & Sports</h3>
              <p>
                Maintaining physical fitness is important to me. I have a regular gym routine that helps me stay energized and focused. Weight training and high-intensity interval workouts form the core of my fitness regimen.
              </p>
              <p>
                Recently, I've developed a passion for Pickleball – a fun, strategic sport that combines elements of tennis, badminton, and table tennis. It's become my favorite way to socialize while staying active.
              </p>
            </div>
            <div>
              <h3 className={aboutStyles.experienceCardTitle}>Continuous Learning</h3>
              <p>
                I consider learning itself a hobby. I'm constantly taking online courses, reading business books, and seeking new app ideas. This perpetual learning mindset keeps me at the cutting edge of technology.
              </p>
              <p>
                Beyond tech, I enjoy watching Disney movies and books on business, which often provide interesting perspectives that influence my approach to product development and innovation.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <span className={styles.footerText}>&copy; {new Date().getFullYear()} Long Nguyen</span>
        <FooterSocials />
      </footer>
    </div>
  );
}
