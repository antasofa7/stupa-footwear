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
                <div>
                    <h4>Welcome Back</h4>
                    <FormFloating title="Email" id="email" placeholder="Masukkan alamat email" type="email" />
                    <FormFloating title="Password" id="password" placeholder="Masukkan password" type="password" />
                    <Link href="/forgot-password">
                        <a className={style.forgot}>Forgot password?</a>
                    </Link>
                    <div className={style.btnLogin}>
                        <h5>Sign in</h5>
                        <Link href="/">
                            <a>
                                <img src="/icons/to go.svg" alt="" />
                            </a>
                        </Link>
                    </div>
                    <div className={style.register}>
                        Not a member?
                        {' '}
                        <Link href="/register">
                            <a>Register now.</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  );
}
