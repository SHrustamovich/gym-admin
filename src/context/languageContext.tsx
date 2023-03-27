import { FC, ReactElement, createContext, useState, useEffect } from "react";
import { LangEnums } from "../utils/helpers";

interface LanguageProProps {
    children: ReactElement;
}

interface LanguageContext {
    language: LangEnums | string;
    setLang?: (a: LangEnums) => void;
}
const LanguageContextInitials = {
    language: LangEnums.UZ,
};
export const LanguageContext = createContext<LanguageContext>(
    LanguageContextInitials
);
const LanguageProvider: FC<LanguageProProps> = ({ children }) => {
    const localLang = localStorage.getItem("language");
    const initialLanguage = localLang || "uz";
    const [language, setLanguage] = useState(initialLanguage);

    function setLang(lang: LangEnums) {
        localStorage.setItem("language", lang);
        setLanguage(lang);
    }

    return (
        <LanguageContext.Provider value={{ language, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};
export default LanguageProvider;
