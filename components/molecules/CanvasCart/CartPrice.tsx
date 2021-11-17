import style from './CanvasCart.module.scss';

export default function CartPrice() {
  return (
        <div className="border-0 p-2 mt-2">
            <table>
                <tr>
                    <td>Piero Arc Wave Navy Red White</td>
                    <td className="col-6 text-end">Rp 1.249.000</td>
                </tr>
                <tr>
                    <td>Nineten910 Shoes</td>
                    <td className="text-end">Rp 355.000</td>
                </tr>
                <tr>
                    <td>Ongkos kirim</td>
                    <td className="text-end">Rp 24.000</td>
                </tr>
                <tr className={style.total}>
                    <td>Total</td>
                    <td className="col-6 text-end">Rp 1.249.000</td>
                </tr>
            </table>
        </div>
  );
}
