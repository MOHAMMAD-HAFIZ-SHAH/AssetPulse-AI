import QRCode from "react-qr-code";

export default function AssetQRCode() {

    return (

        <div className="rounded-2xl border bg-white p-10 flex flex-col items-center">

            <h2 className="mb-8 text-2xl font-bold">
                Asset QR Code
            </h2>

            <QRCode
                value="AF-0001"
                size={220}
            />

            <p className="mt-6 font-semibold">
                AF-0001
            </p>

        </div>

    );

}