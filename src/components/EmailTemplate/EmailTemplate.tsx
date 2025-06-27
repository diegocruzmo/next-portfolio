import React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => {
  return (
    <div>
      <h2>From: {email}</h2>
      <h3>Name: {name}</h3>
      <h3>Message: {message}</h3>
    </div>
  );
};
