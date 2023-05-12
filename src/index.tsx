import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { KarzinkaContext } from "./context/karzinkaContext";
import LanguageProvider from "./context/languageContext";
import UserProvider from "./context/userContext";
import App from "./App";
import "./assets/style/main.scss";

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
