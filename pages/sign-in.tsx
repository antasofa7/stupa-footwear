import Link from 'next/link';
import style from '../styles/SignIn.module.scss';

export default function SignIn() {
  return (
    <section className={style.signIn}>
        <div className={style.illustration}>
            <img src="/images/img-sign-in.png" alt="" />
        </div>

        <div className={`${style.formSignIn} pt-5 pb-4 px-4`}>
            <h2>Welcome back</h2>
            <div className="form my-4">
                <div className="form-floating mb-1">
                    <input type="email" className="form-control border-bottom border-0" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3 d-flex align-items-center position-relative">
                    <input type="password" className="form-control border-bottom border-0" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#cccccc" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                </div>
                <a href="" className="d-flex justify-content-end">Forgot password?</a>
            </div>
            <div className="mb-3">
                <Link href="/">
                    <a style={{ textDecoration: 'none' }}>
                        <div className="d-flex justify-content-between align-items-center px-3">
                            <h4 className="mt-2">Sign In</h4>
                            <button className={style.btnSignIn} type="button">
                                <img src="/icons/arrow-right.svg" alt="" />
                            </button>
                        </div>
                    </a>
                </Link>
            </div>
            <Link href="/sign-up">
                <a className="ps-3">Sign Up</a>
            </Link>
        </div>
    </section>
  );
}
