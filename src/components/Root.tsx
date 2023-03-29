import React from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import { Avatarca, LogOut, ParametrIcon } from "../assets/icons/icons";
import { LogoIcon } from "../assets/icons/logo";
import useLanguage from "../hooks/useLanguage";
import { sideBarData } from "../utils/data";
import { SelectLang } from "./LangSelect/LangSelect";

export const Root = () => {
    const translate = useLanguage();

    return (
        <div className='root'>
            <div className='menu'>
                <div>
                    <div className='menu__logo'>
                        <LogoIcon />
                    </div>
                    <ul className='menu__list'>
                        {sideBarData.map((item) => (
                            <li className='menu__item' key={item.id}>
                                <NavLink to={item.path} className='menu__link'>
                                    <div className='menu__icon'>
                                        {React.createElement(item.icon)}
                                    </div>
                                    <span className='menu__title'>
                                        {translate(item.title)}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='menu__logout'>
                    <NavLink to='/logout' className='menu__link'>
                        <div className='menu__icon'>
                            <LogOut />
                        </div>
                        <span className='menu__title'>
                            {translate("logout")}
                        </span>
                    </NavLink>
                </div>
            </div>
            <div className='all'>
                <div className='header'>
                    <div className='header__select'>
                        <SelectLang />
                    </div>
                    <div className='header__parametr'>
                        <ParametrIcon />
                    </div>
                    <div className='header__avatar'>
                        <Avatarca />
                    </div>
                </div>
                <div className='main'>
                    <Routes>
                        {sideBarData.map((item) => (
                            <Route
                                key={item.id}
                                path={item.path}
                                element={React.createElement(item.companents)}
                            />
                        ))}
                    </Routes>
                </div>
            </div>
        </div>
    );
};
