import { FC, ReactElement, createContext, useState } from "react";
import { LangEnums } from "../utils/helpers";

interface LanguageProProps {
    children: ReactElement;
}

interface LanguageContextI {
    language: LangEnums | string;
    setLang: (newLang: LangEnums) => void;
}

export const LanguageContext = createContext<LanguageContextI>(
    {} as LanguageContextI
);

const LanguageProvider: FC<LanguageProProps> = ({ children }) => {
    const localLang = localStorage.getItem("language");
    const initialLanguage = localLang || LangEnums.UZ;
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
