import React, { useEffect, useState } from 'react';
import { apiProvider } from '../api/apiProvider';
import Input from './Input';
import Select from './Select';
import FadeIn from 'react-fade-in';
import AnimateHeight from 'react-animate-height';

/**
 * API return format
 */
type apiResults = {
  occupations: string[];
  states: stateOption[];
};
type stateOption = {
  name: string;
  abbreviation: string;
};

/**
 * React component that displays a form
 */
const Form: React.FC = () => {
  // API loading
  const [loading, setLoading] = useState<boolean>(true);

  // Form inputs
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [occupation, setOccupation] = useState<string>('');
  const [state, setState] = useState<string>('');

  // Select options
  const [occupations, setOccupations] = useState<string[]>([]);
  const [states, setStates] = useState<stateOption[]>([]);

  // Form posted
  const [success, setSuccess] = useState<boolean>(false);

  // API errors
  const [getError, setGetError] = useState<boolean>(false);
  const [postError, setPostError] = useState<boolean>(false);

  useEffect(() => {
    // Get occupation and state options from API
    apiProvider
      .getAll('form')
      .then(res => {
        const response = res as apiResults;
        setOccupations(response.occupations);
        setOccupation(response.occupations[0]); // Default occupation
        setStates(response.states);
        setState(response.states[0].abbreviation); // Default state
        setLoading(false);
      })
      .catch(() => {
        setGetError(true);
      });
  }, []);

  // Form submission function
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent page reload
    const data = {
      name,
      email,
      password,
      occupation,
      state
    };
    // Post data
    apiProvider
      .post('form', data)
      .then((res: any) => {
        res.status === 200 ? setSuccess(true) : setPostError(true);
      })
      .catch(() => {
        setPostError(true);
      });
  }

  return (
    <div>
      {/* Show error message if error with API */}
      {getError && (
        <p className='text-center text-darkpurple text-lg'>
          Error retreiving form :(
        </p>
      )}
      {/* Show form if API is successful */}
      {loading ? null : (
        <div>
          {/* Fade out animation component */}
          <AnimateHeight height={success ? 0 : 'auto'} duration={400}>
            <h2
              className={`text-center text-3xl font-extrabold text-darkpurple ${
                success && 'fade-out'
              }`}
            >
              Create User
            </h2>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
              <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
                <form className='mb-0 space-y-6' onSubmit={handleSubmit}>
                  <Input
                    label='Full Name'
                    value={name}
                    setValue={setName}
                    type='text'
                  />
                  <Input
                    label='Email'
                    value={email}
                    setValue={setEmail}
                    type='email'
                  />
                  <Input
                    label='Password'
                    value={password}
                    setValue={setPassword}
                    type='password'
                  />
                  <Select
                    label='Occupation'
                    value={occupation}
                    setValue={setOccupation}
                    options={occupations}
                  />
                  <Select
                    label='State'
                    value={state}
                    setValue={setState}
                    options={states.map(s => s.name)}
                    keys={states.map(s => s.abbreviation)}
                  />
                  <button type='submit' className='submit'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </AnimateHeight>
          {/* Show error message is form was not submitted successfully */}
          {postError && (
            <FadeIn delay={300} transitionDuration={600}>
              <div className='text-center'>
                <p className='text-darkpurple'>Error submitting form :(</p>
              </div>
            </FadeIn>
          )}
          {/* Show successful form submission message if submitted */}
          {success && (
            <FadeIn delay={300} transitionDuration={600}>
              <div className='text-center'>
                <p className='text-darkpurple justify-center'>
                  Welcome {name}, {occupation}.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
