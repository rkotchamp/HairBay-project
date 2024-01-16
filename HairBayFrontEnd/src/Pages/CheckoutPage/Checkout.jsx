import { FaAngleLeft } from "react-icons/fa";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="payment__container">
      <div className="payment__header__content">
        <FaAngleLeft className="back_icon" />
        <h1 className="checkout_header">Checkout</h1>
      </div>
      <div className="boxes__container">
        <div className="payment__details">
          <div className="dates lining">
            <div className="dateAndTimeAndHours">
              <p>Dates</p>
              <div className="timeAndDate">
                <p>Feb 12</p>
                <p>3 hours</p>
              </div>
            </div>
            <p>Edit</p>
          </div>
          <div className="client__detail lining">
            <div className="client">
              <p>Client</p>
              <p>1 client</p>
            </div>
            <p>Edit</p>
          </div>
          <div className="totalPrice lining">
            <p>Total Price</p>
            <p>$50</p>
          </div>
        </div>
        <div className="payment__card__details">
          <form action="" className="form__container">
            <div className="label__containers">
              <label htmlFor="method" className="labels">
                Choose your payment method
              </label>
              <select name="payment method" id="method" className="inputs">
                <option value="Debit card">Debit card</option>
              </select>
            </div>
            <div className="label__containers">
              <label htmlFor="card number" className="labels">
                Card Number
              </label>
              <input
                type="number"
                placeholder="xxxxxxxxxxxxxxxx"
                name="card number"
                id="card number"
                className="inputs"
              />
            </div>
            <div className="label__containers">
              <label htmlFor="Name on Card" className="labels">
                Name on Card
              </label>
              <input
                type="text"
                placeholder="xxxxxxxxxxxxxxxx"
                name="Name on Card"
                id="Name on Card"
                className="inputs"
              />
            </div>
            <div className="expiration label__containers">
              <label htmlFor="expiration" className="labels">
                Exp
              </label>
              <input
                type="date"
                name="expiration"
                id="expiration"
                placeholder="mm/yy"
                className="inputs"
              />
            </div>
            <div className="cvv label__containers">
              <label htmlFor="cvv" className="labels">
                Cvv
              </label>
              <input
                type="number"
                name="cvv"
                id="cvv"
                placeholder="cvv"
                className="inputs"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
