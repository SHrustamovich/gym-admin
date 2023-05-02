import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./context/languageContext";
import "./assets/style/main.scss";
import UserProvider from "./context/userContext";
import { KarzinkaContext } from "./context/karzinkaContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <UserProvider>
            <LanguageProvider>
                <KarzinkaContext>
                <App />
                </KarzinkaContext>
            </LanguageProvider>
        </UserProvider>
    </BrowserRouter>
);

// hi
