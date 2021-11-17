import Link from 'next/link';
import style from './Chat.module.scss';

export default function Chat() {
  return (
        <div className={`${style.chat} position-fixed`}>
            <Link href="/chat">
                <a>
                    <div className="p-2">
                        <img src="/icons/chat.svg" />
                    </div>
                </a>
            </Link>
        </div>
  );
}
