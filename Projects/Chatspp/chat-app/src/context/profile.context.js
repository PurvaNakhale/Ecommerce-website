import React, { createContext, useContext, useState } from 'react';

const ProfileCentext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile] = useState(false);

  return (
    <ProfileCentext.Provider value={profile}>
      {children}
    </ProfileCentext.Provider>
  );
};

export const useProfile = () => useContext(ProfileCentext);
