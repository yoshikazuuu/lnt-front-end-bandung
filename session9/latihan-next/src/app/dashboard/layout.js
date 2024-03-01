export default function RootLayout({ children }) {
    return (
        <div className="absolute top-0 left-0 bg-red-500 h-screen w-24">
            {children}
        </div>
    );
}
