import React from 'react';
import Form from './components/Form';
import FadeIn from 'react-fade-in';

const App: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col py-12 px-6 lg:px-8 justify-center'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md justify-center'>
        <FadeIn delay={10} transitionDuration={1000}>
          <Form />
        </FadeIn>
      </div>
    </div>
  );
};

export default App;
