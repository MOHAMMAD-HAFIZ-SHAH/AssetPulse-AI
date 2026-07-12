export default function WelcomeCard() {
    return (
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
            <h1 className="text-3xl font-bold">
                Welcome Back 👋
            </h1>

            <p className="mt-3 opacity-90">
                Here's the latest overview of your organization's assets and resources.
            </p>
        </div>
    );
}