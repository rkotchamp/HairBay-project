import { FaAngleLeft } from "react-icons/fa";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="payment__container">
      <div className="payment__header__content">
        <FaAngleLeft />
        <h1>Checkout</h1>
      </div>
      <div className="boxes__container">
        <div className="payment__details">
          <div className="dates">
            <div className="dateAndTimeAndHours">
              <p>Dates</p>
              <div className="timeAndDate">
                <p>Feb 12</p>
                <p>3 hours</p>
              </div>
            </div>
            <p>Edit</p>
          </div>
          <div className="client__details">
            <div className="client">
              <p>Client</p>
              <p>1 client</p>
            </div>
            <p>Edit</p>
          </div>
          <div className="totalPrice">
            <p>Total Price</p>
            <p>$50</p>
          </div>
        </div>
        <div className="payment__card__details">
          <form action="">
            <label htmlFor="method">Choose your payment method</label>
            <select name="payment method" id="method">
              <option value="Debit card">Debit card</option>
            </select>
            <label htmlFor="card number">Card Number</label>
            <input
              type="number"
              placeholder="xxxxxxxxxxxxxxxx"
              name="card number"
              id="card number"
            />
            <label htmlFor="Name on Card">Name on Card</label>
            <input
              type="text"
              placeholder="xxxxxxxxxxxxxxxx"
              name="Name on Card"
              id="Name on Card"
            />
            <div className="expiration">
              <label htmlFor="expiration">Exp</label>
              <input
                type="date"
                name="expiration"
                id="expiration"
                placeholder="mm/yy"
              />
            </div>
            <div className="cvv">
              <label htmlFor="cvv">Cvv</label>
              <input type="number" name="cvv" id="cvv" placeholder="cvv" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
