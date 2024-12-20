import React from 'react';

const Content = ({ body }: { body: string }) => {
  return (
    <main>
      <p>{body}</p>
    </main>
  );
};

export default Content;
