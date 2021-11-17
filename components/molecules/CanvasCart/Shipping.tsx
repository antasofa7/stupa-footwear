export default function Shipping() {
  return (
        <div className="form-floating mt-2">
            <select className="form-select border-0" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Wahana</option>
                <option value="1">Sicepat</option>
                <option value="2">J&T</option>
                <option value="3">JNE</option>
            </select>
            <label htmlFor="floatingSelect">Pilih jasa pengiriman</label>
        </div>
  );
}
