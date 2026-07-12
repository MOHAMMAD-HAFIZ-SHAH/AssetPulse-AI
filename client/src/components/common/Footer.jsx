export default function Footer() {
    return (
        <footer className="border-t bg-white px-8 py-4">
            <p className="text-center text-sm text-slate-500">
                © {new Date().getFullYear()} AssetPulse AI. All rights reserved.
            </p>
        </footer>
    );
}