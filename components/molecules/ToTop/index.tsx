import style from './ToTop.module.scss';

export default function ToTop() {
  return (
        <div className={`${style.toTop} position-fixed bottom-0 start-50 translate-middle`}>
          <a href="/toTop">
            <div className="p-2">
              <img src="/icons/toTop.svg" />
            </div>
          </a>
        </div>
  );
}
