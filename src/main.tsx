import { createRoot } from 'react-dom/client';
import '@/assets/global.css'
import '@/sass/app.scss'
import App from './App';
const container = document.getElementById('app');
const root = createRoot(container || document.body);
root.render(<App />);