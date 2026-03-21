export default function Footer() {
    return (
        <footer className="w-full py-16 text-center border-t border-neutral-100 bg-white/50 backdrop-blur-sm mt-32">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-2xl font-black tracking-tighter text-neutral-900 mb-6">Rudra<span className="text-blue-600">.</span></h2>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    &copy; {new Date().getFullYear()} Crafted with ♥️ using Next.js & Framer Motion.
                </p>
            </div>
        </footer>
    );
}
