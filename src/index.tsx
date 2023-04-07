import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./context/languageContext";
import "./assets/style/main.scss";
import UserProvider from "./context/userContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <UserProvider>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </UserProvider>
    </BrowserRouter>
);

// hi
