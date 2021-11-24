import Link from 'next/link';

export default function Address() {
  return (
        <div className="p-2">
            <Link href="">
                <a data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="pt-2">Alamat Pengiriman</h5>
                        <div>
                            <img src="/icons/chevron-right.svg" alt="" />
                        </div>
                    </div>
                </a>
            </Link>
        </div>
  );
}
