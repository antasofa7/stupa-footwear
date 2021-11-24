import Link from 'next/link';
import style from './Chat.module.scss';

export default function Chat() {
  return (
        <div className={`${style.chat} position-fixed`}>
            <Link href="https://wa.me/6281282781738?text=Saya%20tertarik%20dengan%sepatu%20yang%20Anda%20jual">
                <a>
                    <div className="p-2">
                        <img src="/icons/chat.svg" />
                    </div>
                </a>
            </Link>
        </div>
  );
}
