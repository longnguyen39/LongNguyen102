"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./my-apps.module.css";
import { AppleMac } from 'iconoir-react';
import { FaApple, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import AnimatedOnce from '@/components/AnimatedOnce';

export default function MyApps() {
  
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
        <FaGithub className="github" style={{ color: '#27ae60', fontSize: '1.0em' }} />
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

  // Mock data for apps
  const apps = [
    {
      title: "ChefBot (AI-powered Recipes)",
      icon: "/ChefBotIcon.png",
      screenshot: "/ChefBotScr.png",
      description: `Best AI Cooking assistant ChefBot is your AI cooking assistant who can help you with ideas and planning when you are stuck. Simply droping your available ingredients and ChefBot will do all the brainiac works for you. Powered by GPT-4, OpenAI's most advanced model, ChefBot is destined to generated the best recipes with clear instructions and plans.\n\nYou can modify any recipes, switching ingredients, and plan your cooking period however you want. Of course, you can save your favorite answer to History.\n\nYes, ChefBot is free and will remain so.`,
      techStack: ["Swift", "SwiftUI", "OpenAI GPT-4 API", "Firebase", "Figma", "Canva", "NoSQL Database"],
      appStoreLink: "https://apps.apple.com/us/app/chefbot-ai-powered-recipes/id6745570785",
      githubLink: "https://github.com/longnguyen39/ChefBot",
      publishedOn: "2025"
    },
    {
      title: "MulaMula",
      icon: "/MulaMulaIcon.png",
      screenshot: "/MulaMulaScr.png",
      description: `MulaMula is the best expense tracker app for college students who are concerned about current, daily, financial status rather than long-term trajectory.\n\nWe, as college students, pay more attention to daily and monthly expenses. MulaMula offers a great solution for students to keep track of their expenses and category, all with a beautiful, intuitive interface.`,
      techStack: ["Swift", "SwiftUI", "Canva", "OpenAi's ChatGPT", "Firebase", "Authentication", "NoSQL Database"],
      appStoreLink: "https://apps.apple.com/us/app/mulamula/id6479544775",
      githubLink: "https://github.com/longnguyen39",
      publishedOn: "2024"
    },
    {
      title: "Daily Boost!",
      icon: "/DailyBoostIcon.png",
      screenshot: "/DailyBoostScr.png",
      description: `Daily Boost! is an awesome app that sends you motivational quotes every day to boost your energy. Whether you are struggling to achieve your goals, or suffering through tough moments, Daily Boost! is here to supercharge your energy and push you to go past your limits.\n\nUnlike other motivational apps, Daily Boost! offers quotes from your favorite fictional characters, from Harry Potter to The Dark Knight (Batman). You can choose to only read non-fictional quotes, or only fictional quotes, and the best option: both.\n\nApp supports both dark mode and light mode with a stunning user interface design. Our 1.0 version may have some technical issues, please stay tuned for the next version with more awesome features.`,
      techStack: ["Swift", "SwiftUI", "Figma", "Canva", "OpenAi's ChatGPT", "Local Notifications", "Firebase", "Authentication", "NoSQL Database"],
      appStoreLink: "https://apps.apple.com/us/app/daily-boost/id6742382918",
      githubLink: "https://github.com/longnguyen39/DailyBoost",
      publishedOn: "2025"
    },
    {
      title: "GoodPlaces",
      icon: "/GoodPlacesIcon.png",
      screenshot: "/GoodPlacesScr.png",
      description: `This is the best app to save your favorite locations with just a simple click. With the priority on simplicity, we have made the user experience as smooth as possible: Just open the app, click a button, enter your title for the current location and it will be on your list.\n\nYou can go to the list of your saved locations and do anything with each, including editing, share, or delete it. Your saved locations will have the distance to your current location and the option to open on the Apple map. Additionally, you can share any of your saved locations throughout any app on your phone.\n\nWith a professionally designed login protocol, we can make sure that all of your information is safely saved in our database.`,
      techStack: ["Swift", "SwiftUI", "Figma", "Canva", "Firebase", "Authentication", "NoSQL Database"],
      appStoreLink: "https://apps.apple.com/us/app/goodplaces/id1569767603",
      githubLink: "https://github.com/longnguyen39/GoodPlaces",
      publishedOn: "2021"
    }
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <header className={styles.appsHeader}>
          <AnimatedOnce 
            className={styles.appsTitle}
            animation="slideUp"
            duration={0.5}
            delay={0}
            animateOnce={true}
          >
            My current apps on the App Store
          </AnimatedOnce>
          <AnimatedOnce 
            className={styles.appsIntro}
            animation="slideUp"
            duration={0.5}
            delay={0.1}
            animateOnce={true}
          >
            These are the iOS applications I&apos;ve developed and published on the Apple App Store. 
            Each app is crafted with attention to detail, focusing on intuitive user experience 
            and solving real-world problems for users.
          </AnimatedOnce>
        </header>

        {apps.map((app, index) => (
          <div 
            key={index} 
            id={app.title.split(' ')[0].toLowerCase()}
          >
            <AnimatedOnce
              animation="slideUp"
              duration={0.5}
              delay={index === 0 ? 0 : 0.1}
              animateOnce={true}
              className={`${styles.appSection} ${styles[`appSection${index + 1}`]}`}
            >
              <div className={styles.publishedOn}>Published in {app.publishedOn}</div>
              <div className={styles.appImagesCol}>
                <div className={styles.appIcon}>
                  <Image
                    src={app.icon}
                    alt={`${app.title} App Icon`}
                    width={100}
                    height={100}
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                </div>
                <div className={styles.appScreenshot}>
                  <Image
                    src={app.screenshot}
                    alt={`${app.title} Screenshot`}
                    width={250}
                    height={400}
                    style={{ 
                      objectFit: 'contain', 
                      width: '100%', 
                      height: 'auto'
                    }}
                  />
                </div>
              </div>
              <div className={styles.appDetailsCol}>
                <h2 className={styles.appTitle}>{app.title}</h2>
                <p className={styles.appDescription + ' ' + (app.description.includes('comprehensive fitness tracking app') ? styles.smallerDescription : '')}>{app.description}</p>
                <div className={styles.techStack}>
                  <h3 className={styles.techStackTitle}>Tech Stack:</h3>
                  <div className={styles.techStackList}>
                    {app.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techItem}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <a 
                    href={app.appStoreLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.appStoreBtn}
                  >
                    <FaApple /> App Store
                  </a>
                  {app.githubLink && (
                    <a 
                      href={app.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.githubBtn}
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </AnimatedOnce>
          </div>
        ))}
      </main>
      <footer className={styles.footer}>
        <span className={styles.footerText}>&copy; {new Date().getFullYear()} Long Nguyen</span>
        <FooterSocials />
      </footer>
    </div>
  );
}
