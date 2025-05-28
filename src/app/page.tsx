import Image from "next/image";
import styles from "./page.module.css";
import { MailSolid, Linkedin, Github } from 'iconoir-react';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.heroRow}>
          <div className={styles.heroSpacer}></div>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroImageCol}>
              <Image
                src="/profile.jpg"
                alt="Long Nguyen profile"
                width={220}
                height={220}
                className={styles.profileImage}
                priority
              />
              <div className={styles.contactLinks}>
                <a href="mailto:your.email@example.com" className={styles.contactLinkItem}><MailSolid /> Email</a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.contactLinkItem}><Linkedin /> LinkedIn</a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.contactLinkItem}><Github /> GitHub</a>
              </div>
            </div>
            <div className={styles.heroIntroCol}>
              <h1 className={styles.title}>Long Nguyen</h1>
              <h2 className={styles.subtitle}>iOS Developer</h2>
              <div className={styles.bio}>
                <ul className={styles.bioList}>
                  <li>
                    <strong>iOS Developer & App Creator:</strong> Crafting impactful iOS applications designed to enhance daily life. Proud to have <strong>4 apps</strong> live on the App Store!
                  </li>
                  <li>
                    <strong>AI Enthusiast:</strong> Deeply exploring how Artificial Intelligence can serve as a "bicycle for the mind," empowering us to innovate, think smarter, and improve our world.
                  </li>
                  <li>
                    <strong>Active Lifestyle:</strong> When I'm not coding, you'll often find me:
                    <ul className={styles.hobbyList}>
                      <li>Exploring scenic trails while hiking</li>
                      <li>Staying active and fit at the gym</li>
                      <li>Hitting the pavement for an energizing run</li>
                      <li>Enjoying a friendly game of Pickleball</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.links}>
                <a
                  className={styles.primaryBtn}
                  href="https://apps.apple.com/us/developer/long-nguyen/idYOUR_APPLE_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Apps on the App Store
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Long Nguyen. Built with Next.js.</span>
      </footer>
    </div>
  );
}
