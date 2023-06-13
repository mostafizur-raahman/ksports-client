import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelect from "../../../../hooks/useSelect";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);
const Payment = () => {
    const [select] = useSelect();
    const cart = select.length;
    const total = select?.reduce((sum, next) => next.price + sum, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-full p-16">
            <h1 className="text-3xl text-red-500 font-bold text-center">Payment</h1>

           
           <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
           
        </div>
    );
};

export default Payment;
