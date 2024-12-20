import React from 'react';

const Footer = ({ date }: { date: string }) => {
  return (
    <footer>
      <p>Generated on: {date}</p>
    </footer>
  );
};

export default Footer;
