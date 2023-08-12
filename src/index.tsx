import React from 'react';
import { createRoot } from 'react-dom/client';
import { GamePage } from './pages/game.page';

import './global.css';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(<GamePage />);
