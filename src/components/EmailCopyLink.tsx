"use client";

import React from "react";
import { MailSolid } from 'iconoir-react';

interface EmailCopyLinkProps {
  email: string;
  className?: string;
}

const EmailCopyLink: React.FC<EmailCopyLinkProps> = ({ email, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    alert("Email coppied to clipboard");
  };

  return (
    <a
      href="#"
      className={className}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <MailSolid style={{ color: '#e74c3c' }} /> {email}
    </a>
  );
};

export default EmailCopyLink;
