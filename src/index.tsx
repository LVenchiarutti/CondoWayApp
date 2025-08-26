import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRegistry } from 'react-native';
import App from '../App';

// Registra o app para react-native-web
AppRegistry.registerComponent('CondoWayApp', () => App);

// Inicia o app no DOM
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
