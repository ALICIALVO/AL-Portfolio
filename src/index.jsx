import * as ReactDOMClient from "react-dom/client";
import App from './App';
import { GlobalStyles } from './styles/globalStyles';
import { ThemeContextProvider } from './context/ThemeContext';

const container = document.getElementById('root'); 
const root = ReactDOMClient.createRoot(container);
root.render(
    <>
      <ThemeContextProvider>
    <GlobalStyles />
      <App />
      </ThemeContextProvider>
    </>

);
