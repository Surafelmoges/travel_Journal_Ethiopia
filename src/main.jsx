import { createRoot } from "react-dom/client";
import App from './App.jsx'
import './App.css';


const container = createRoot(document.getElementById('root'))
container.render(
  <App />
)