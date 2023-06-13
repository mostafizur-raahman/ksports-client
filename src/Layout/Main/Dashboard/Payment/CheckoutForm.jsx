import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId,setTransationId] = useState('');

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price }).then((res) => {
            setClientSecret(res.data.clientSecret);
        });
    }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        if (error) {
            console.log("error", error);
            setCardError(error.message);
        } else {
            setCardError("");
            console.log("payment method", paymentMethod);
        }

        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "anonymous",
                        name: user?.displayName || "anonymus",
                    },
                },
            });

        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        if(paymentIntent.status === 'succeeded' ){
            const transactionId  = paymentIntent.id;
            setTransationId(paymentIntent.id);

        }
    };

    return (
        <div className="w-full mx-auto">
            <div>
                <h1 className="text-3xl my-2 mb-5 text-center">Checkout</h1>
                <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#424770",
                                    "::placeholder": {
                                        color: "#aab7c4",
                                    },
                                },
                                invalid: {
                                    color: "#9e2146",
                                },
                            },
                        }}
                    />
                    <div className="text-center my-10">
                        <button
                            type="submit"
                            className="btn btn-sm btn-secondary"
                            disabled={!stripe || !clientSecret}
                        >
                            Pay
                        </button>
                    </div>
                </form>
                <div className="">
                    {cardError && <p className="text-red-600">{cardError}</p>}
                </div>
                <div>
                    {
                        transactionId && <div className="text-center ">
                            <p className="text-sky-400 text-4xl font-bold text-center">payment success.</p>
                            <p className="mt-4">Your transation id : {transactionId}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
