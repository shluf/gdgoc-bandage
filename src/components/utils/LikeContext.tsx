'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LikesContextType {
  likes: { [key: string]: boolean };
  likeCount: number;
  toggleLike: (productId: string) => void;
}

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<{ [key: string]: boolean }>({});

  const toggleLike = (productId: string) => {
    setLikes(prev => {
      const newLikes = { ...prev };
      newLikes[productId] = !prev[productId];
      return newLikes;
    });
  };

  const likeCount = Object.values(likes).filter(Boolean).length;

  return (
    <LikesContext.Provider value={{ likes, likeCount, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
}

export const useLikes = () => {
  const context = useContext(LikesContext);
  if (context === undefined) {
    throw new Error('useLikes must be used within a LikesProvider');
  }
  return context;
};