import { useState } from 'react';
import style from './ToTop.module.scss';

export default function ToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleVisible);
  }
  return (
        <div className={`${style.toTop} position-fixed start-50 translate-middle`}>
          <button type="button" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
            <img src="/icons/toTop.svg" />
          </button>
        </div>
  );
}
