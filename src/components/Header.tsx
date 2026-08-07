import { Bell, ChevronDown } from "lucide-react";

export const Header: React.FC = () => (
    <header className="bg-white px-5 py-4 flex items-center justify-between">
        <div>
            <h2 className="text-xl font-semibold text-[#05264E]">
                Secretary Labour Dashboard
            </h2>

        </div>

        <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-slate-600">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <div className="flex items-center gap-3">
                <img
                    src="https://i.pravatar.cc/40?img=13"
                    alt="Fazal Manan"
                    className="w-9 h-9 rounded-full object-cover"
                />
                <div className="text-sm leading-tight">
                    <p className="font-semibold text-slate-700">Fazal Manan</p>
                    <p className="text-xs text-slate-400">Secretary</p>
                </div>
                <ChevronDown size={16} className="text-slate-400" />
            </div>


        </div>
    </header>
);