import Link from 'next/link';
import style from './Chat.module.scss';

export default function Chat() {
  return (
        <div className={`${style.chat} position-fixed`}>
            <Link href="https://wa.me/081282781738">
                <a className="p-2">
                    <img src="/icons/chat.svg" />
                </a>
            </Link>
        </div>
  );
}
