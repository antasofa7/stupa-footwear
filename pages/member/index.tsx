import style from '../../styles/Member.module.scss';
import Button from '../../components/atoms/Button';
import Navbar from '../../components/organism/Navbar';
import ProfileItem from '../../components/molecules/ProfileItem';

export default function Member() {
  return (
        <>
        <Navbar />
        <section className={style.profile}>
            <div className={`${style.cartDetail} card border-0 p-3 mb-3`}>
                <div className="d-flex justify-content-between">
                    <div>
                        <h4>Andri</h4>
                        <h6>0852 2873 7258</h6>
                    </div>
                    <img src="/icons/userAround.svg" height={50} />
                </div>
            </div>
            <div className={`${style.cartDetail} card border-0 p-3 mb-3`}>
                <ProfileItem title="My Profile" href="/profile" />
                <ProfileItem title="Email" href="email" valueItem="an**i@**ai*.com" />
                <ProfileItem title="Change Password" href="/change-password" />
                <ProfileItem title="Address" href="/address-list" />
            </div>
            <div className={`${style.cartDetail} card border-0 p-3 mb-3`}>
                <ProfileItem title="Order List" href="/member/order-list" />
                <ProfileItem title="Payment Confirmation" href="email" />
                <ProfileItem title="FAQ" href="/change-password" />
                <ProfileItem title="Contact Us" href="/address-list" />
            </div>
            <Button href="/" title="Log out" />
        </section>
        </>
  );
}
