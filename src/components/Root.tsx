import { NavLink, Route, Routes } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import { SelectLang } from "./LangSelect/LangSelect";
import { LogoIcon } from "../assets/icons/logo";
import { Profil } from "../pages/Profil";
import { Setting } from "../pages/Setting";
import useAuthentication from "../hooks/useAuth";
import { LogIn } from "../pages/LogIn";
import { MemberShip } from "../pages/MemberShip";
import { LogoutModal } from "./LogoutModal/LogoutModal";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import { usePostRequest } from "../hooks/request";
import { logout } from "../utils/urls";
import { sideBarData } from "../utils/data";
import { Avatarca, LogOut, ParametrIcon } from "../assets/icons/icons";
import { useState } from "react";

export const Root = () => {
    const [openMadal, setOpenModal] = useState(false);

    const { request: logoutReq } = usePostRequest({
        url: logout,
    });

    const LogoutClick = () => {
        setOpenModal(true);
    };

    const handleCancel = () => {
        setOpenModal(false);
    };

    const translate = useLanguage();
    const { isLoggedIn } = useAuthentication();

    return isLoggedIn ? (
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
                                        {item.icon}
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
                    <button className='menu__link' onClick={LogoutClick}>
                        <div className='menu__icon'>
                            <LogOut />
                        </div>
                        <span className='menu__title'>
                            {translate("logout")}
                        </span>
                    </button>
                </div>
                <LogoutModal
                    handleCancel={handleCancel}
                    openMadal={openMadal}
                    logoutReq={logoutReq}
                />
            </div>
            <div className='all'>
                <div className='header'>
                    <div className='header__select'>
                        <SelectLang />
                    </div>
                    <button className='header__parametr'>
                        <NavLink to={"/setting"}>
                            <ParametrIcon />
                        </NavLink>
                    </button>
                    <button className='header__avatar'>
                        <NavLink to={"/profil"}>
                            <Avatarca />
                        </NavLink>
                    </button>
                </div>
                <div className='main'>
                    <Routes>
                        {sideBarData.map((item) => (
                            <Route
                                key={item.id}
                                path={item.path}
                                element={item.companents}
                            />
                        ))}
                        <Route path='/profil' element={<Profil />} />
                        <Route path='/setting' element={<Setting />} />
                        <Route
                            path='/membership/:id'
                            element={<MemberShip />}
                        />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    ) : (
        <LogIn />
    );
};
