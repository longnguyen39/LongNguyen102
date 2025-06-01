"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { AppleMac, Github } from 'iconoir-react';
import styles from '@/app/page.module.css';

interface AppCardProps {
  title: string;
  image: string;
  description: string;
  githubLink: string;
  appStoreLink: string;
  appId: string;
}

export default function AppCard({ 
  title, 
  image, 
  description, 
  githubLink, 
  appStoreLink,
  appId
}: AppCardProps) {
  const router = useRouter();
  
  const handleCardClick = () => {
    router.push(`/my-apps#${appId}`);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card navigation when clicking links
  };
  
  return (
    <div 
      className={`${styles.appCard} ${styles.clickableCard}`} 
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`View details about ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      <div className={styles.appImageContainer}>
        <Image
          src={image}
          alt={`${title} App Screenshot`}
          width={300}
          height={200}
          className={styles.appImage}
          priority
        />
      </div>
      <h3>{title}</h3>
      <p className={styles.appDescription}>
        {description}
      </p>
      <div className={styles.appCardIcons} onClick={handleLinkClick}>
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Github color="black" />
        </a>
        <a 
          href={appStoreLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <AppleMac color="black" />
        </a>
      </div>
    </div>
  );
}
