import { LoginInputIcon, LoginPasswordIcon } from "../assets/icons/icons";
import { LogoIcon } from "../assets/icons/logo";
export const LogIn = () => {
    return (
        <div className='login'>
            <div className='login__card'>
                <div className='login__logo'>
                    <LogoIcon />
                </div>
                <p className='login__title'>Welcome</p>
                <form className='login__form'>
                    <div className='login__part'>
                        <label className='login__label'>Login</label>
                        <input
                            type='text'
                            placeholder='Login'
                            className='login__input'
                        />
                        <div className='login__icon'>
                            <LoginInputIcon />
                        </div>
                    </div>
                    <div className='login__bottomPart'>
                        <label className='login__label'>Password</label>
                        <input
                            type='password'
                            placeholder='password'
                            className='login__password'
                        />
                        <div className='login__icon'>
                            <LoginPasswordIcon/>
                        </div>
                    </div>
                    <div className='login__remember'>
                        <input type='checkbox' className='login__check' />
                        <label className='login__checkLabel'>Remember me</label>
                    </div>
                    <button className='login__btn'>LOGIN</button>
                </form>
            </div>
        </div>
    );
};
