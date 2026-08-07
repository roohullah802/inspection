export const Footer: React.FC = () => (
    <footer className="flex items-center justify-between px-5 py-5 text-xs text-slate-400">
        <p>
            © {new Date().getFullYear()} - Inspection System Dashboard • Made by{" "}
            <span className="text-teal-500 font-medium">KPITB</span>
        </p>
        <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600">
                About
            </a>
            <a href="#" className="hover:text-slate-600">
                Policy
            </a>
            <a href="#" className="hover:text-slate-600">
                Contact
            </a>
        </div>
    </footer>
);