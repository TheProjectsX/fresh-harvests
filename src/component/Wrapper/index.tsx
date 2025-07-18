"use client";

import store from "@/store/app/store";
import NextTopLoader from "nextjs-toploader";
import { Provider } from "react-redux";
import { Bounce, ToastContainer } from "react-toastify";

const Wrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Provider store={store}>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <NextTopLoader showSpinner={false} color="#ff6a1a" />
            {children}
        </Provider>
    );
};

export default Wrapper;
