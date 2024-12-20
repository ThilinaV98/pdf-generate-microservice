import React from 'react';
import Header from './partials/header';
import Footer from './partials/footer';
import Content from './partials/content';

const BaseTemplate = ({ title, body, date }: { title: string; body: string; date: string }) => {
  return (
    <html>
    <head>
      <title>{title}</title>
    </head>
    <body>
    <Header title={title} />
    <Content body={body} />
    <Footer date={date} />
    </body>
    </html>
  );
};

export default BaseTemplate;
