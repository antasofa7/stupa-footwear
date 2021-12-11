import Link from 'next/link';
import FormFloating from '../components/atoms/Form/FormFloating';
import style from '../styles/Login.module.scss';

export default function Login() {
  return (
        <div className={style.login}>
            <div className={style.loginIllustration}>
                <img className="img-fluid" src="/images/img-sign-in.png" alt="illustration" />
            </div>
            <div className={style.loginArea}>
                <h4>Get Started</h4>
                <FormFloating title="Username" id="username" placeholder="Masukkan username" type="text" />
                <FormFloating title="Email" id="email" placeholder="Masukkan alamat email" type="email" />
                <FormFloating title="Password" id="password" placeholder="Masukkan password" type="password" />
                <div className={style.btnRegister}>
                    <h5>Register</h5>
                    <Link href="/">
                        <a>
                            <img src="/icons/to go.svg" alt="" />
                        </a>
                    </Link>
                </div>
                <div className={style.register}>
                    Have an account?
                    {' '}
                    <Link href="/login">
                        <a>Please sign in.</a>
                    </Link>
                </div>
            </div>
        </div>
  );
}
