// Polyfill for react-native-safe-area-context
import React from 'react';

export const SafeAreaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const SafeAreaView: React.FC<{ 
  children: React.ReactNode;
  style?: any;
}> = ({ children, style }) => {
  return <div style={style}>{children}</div>;
};

export const useSafeAreaInsets = () => ({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});
