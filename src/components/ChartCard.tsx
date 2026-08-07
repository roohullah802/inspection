import { ChevronDown, Info } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// ---------------------------------------------------------------------------
// Mock data — swap for real API data
// ---------------------------------------------------------------------------

interface ChartDatum {
    month: string;
    pending: number;
    approved: number;
    total: number;
}

const chartData: ChartDatum[] = [
    { month: "Jan", pending: 4, approved: 6, total: 5 },
    { month: "Feb", pending: 3, approved: 7, total: 6 },
    { month: "Mar", pending: 6, approved: 5, total: 4 },
    { month: "Apr", pending: 5, approved: 8, total: 6 },
    { month: "May", pending: 7, approved: 9, total: 5 },
    { month: "Jun", pending: 4, approved: 6, total: 7 },
    { month: "Jul", pending: 6, approved: 5, total: 8 },
    { month: "Aug", pending: 9, approved: 7, total: 6 },
    { month: "Sep", pending: 5, approved: 9, total: 7 },
    { month: "Oct", pending: 4, approved: 6, total: 5 },
    { month: "Nov", pending: 7, approved: 8, total: 9 },
    { month: "Dec", pending: 5, approved: 7, total: 6 },
];

export const ChartCard: React.FC = () => (
    <div className="flex h-full flex-col gap-4 overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex shrink-0 items-start justify-between">
            <div>
                <div className="flex items-center gap-1.5 text-sm text-slate-400">
                    <span>Primary Text</span>
                    <Info size={14} />
                </div>
                <div className="text-2xl font-bold text-slate-800 mt-1">5,987.34</div>
                <div className="text-xs text-slate-400 mt-0.5">Secondary text</div>
            </div>
            <button className="flex items-center gap-1 text-xs font-medium text-slate-500 border border-slate-200 rounded-lg px-3 py-1.5">
                This Year
                <ChevronDown size={10} />
            </button>
        </div>

        <div className="w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barGap={30} barCategoryGap="10%">
                    <CartesianGrid vertical={false} stroke="#eef0f5" />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 11, fill: "#94a3b8" }}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 11, fill: "#94a3b8" }}
                    />
                    <Tooltip cursor={{ fill: "rgba(0,0,0,0.03)" }} />
                    <Bar dataKey="pending" name="Pending" fill="#fbbf70" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="approved" name="Approved" fill="#7ee2b8" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="total" name="Total Challan" fill="#8fc6f9" radius={[3, 3, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>

        <div className="flex shrink-0 items-center justify-center gap-6 border-t border-slate-100 pt-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#fbbf70]" />
                Pending
            </span>
            <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7ee2b8]" />
                Approved
            </span>
            <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8fc6f9]" />
                Total Challan
            </span>
        </div>
    </div>
);