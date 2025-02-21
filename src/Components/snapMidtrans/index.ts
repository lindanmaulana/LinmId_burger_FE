const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
const clientKey = import.meta.env.VITE_MIDTRANS_PUBLIC_CLIENT;
const snapMidtrans = document.createElement("script");

snapMidtrans.src = snapScript;
snapMidtrans.setAttribute("data-client-key", clientKey);
snapMidtrans.async = true;

export { snapMidtrans };
 