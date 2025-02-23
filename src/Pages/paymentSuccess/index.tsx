import { Link } from "react-router-dom";
import LayoutContainer from "../../components/layouts/LayoutContainer";
import LayoutSection from "../../components/layouts/LayoutSection";
import { FaCheckToSlot } from "react-icons/fa6";

const PagePaymentSuccess = () => {
  return (
    <LayoutSection className="">
      <LayoutContainer className="h-[500px] max-w-6xl">
        <div className="flex flex-col items-center justify-center h-full gap-2">
          <b className="text-6xl text-green-500">
            <FaCheckToSlot />
          </b>
          <h2 className="text-3xl font-semibold text-primary">
            Pembayaran anda telah diterima
          </h2>
          <p className="max-w-lg mb-4 text-center">
            Terima kasih atas pembayaran Anda. Pesanan anda akan segera di
            proses. untuk info lebih lanjut cek pada status pesanan anda.
          </p>
          <Link
            to={"/"}
            className="px-4 py-3 text-sm text-white rounded-lg bg-primary"
          >
            Kembali ke dashboard
          </Link>
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default PagePaymentSuccess;
