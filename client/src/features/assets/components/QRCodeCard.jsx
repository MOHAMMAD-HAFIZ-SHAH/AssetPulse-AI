import { useRef } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
    Download,
    Printer,
    Copy,
    QrCode,
} from "lucide-react";

import AppButton from "../../../components/ui/AppButton";

export default function QRCodeCard({ asset }) {
    const qrRef = useRef(null);

    if (!asset) return null;

    const copyAssetTag = async () => {
        await navigator.clipboard.writeText(asset.assetTag);
        alert("Asset Tag Copied");
    };

    const downloadPNG = async () => {
        const canvas = await html2canvas(qrRef.current);

        const link = document.createElement("a");

        link.download = `${asset.assetTag}.png`;

        link.href = canvas.toDataURL();

        link.click();
    };

    const downloadPDF = async () => {
        const canvas = await html2canvas(qrRef.current);

        const image = canvas.toDataURL("image/png");

        const pdf = new jsPDF();

        pdf.addImage(image, "PNG", 20, 20, 170, 170);

        pdf.save(`${asset.assetTag}.pdf`);
    };

    const printQRCode = () => {
        const printWindow = window.open("", "_blank");

        printWindow.document.write(qrRef.current.innerHTML);

        printWindow.document.close();

        printWindow.print();
    };

    return (
        <div className="rounded-2xl border bg-white p-8 shadow-sm">

            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">

                <QrCode size={28} />

                Asset QR Code

            </h2>

            <div
                ref={qrRef}
                className="rounded-xl border p-8 text-center"
            >

                <QRCode
                    value={JSON.stringify({
                        id: asset.id,
                        tag: asset.assetTag,
                        name: asset.assetName,
                    })}
                    size={220}
                />

                <h3 className="mt-8 text-xl font-bold">

                    {asset.assetName}

                </h3>

                <p className="mt-2 text-slate-600">

                    {asset.assetTag}

                </p>

                <p className="mt-1 text-sm text-slate-500">

                    {asset.department?.name}

                </p>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">

                <AppButton
                    onClick={downloadPNG}
                >
                    <Download
                        size={18}
                        className="mr-2"
                    />

                    PNG

                </AppButton>

                <AppButton
                    variant="secondary"
                    onClick={downloadPDF}
                >
                    <Download
                        size={18}
                        className="mr-2"
                    />

                    PDF

                </AppButton>

                <AppButton
                    variant="success"
                    onClick={printQRCode}
                >
                    <Printer
                        size={18}
                        className="mr-2"
                    />

                    Print

                </AppButton>

                <AppButton
                    variant="secondary"
                    onClick={copyAssetTag}
                >
                    <Copy
                        size={18}
                        className="mr-2"
                    />

                    Copy Tag

                </AppButton>

            </div>

        </div>
    );
}