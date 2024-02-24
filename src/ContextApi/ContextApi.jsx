import React, { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setSubmissionStatus = (status) => {
    setIsSubmitted(status);
  };

  return (
    <ApiContext.Provider value={{ isSubmitted, setSubmissionStatus }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
