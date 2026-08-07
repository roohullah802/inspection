// src/pages/ChallansPage.tsx
import { Home, Paperclip, MessageSquare } from "lucide-react";
import { useLocation } from "react-router-dom";
import Path from "../../components/Path";

type ChallanStatus = "Unpaid" | "Pending" | "Approved";

interface Challan {
    id: string;
    challanId: string;
    business: string;
    reason: string;
    dateTime: string;
    inspectedBy: string;
    attachments: number;
    comments: number;
    status: ChallanStatus;
}

const challans: Challan[] = [
    {
        id: "1",
        challanId: "2665D9",
        business: "Petrol Pump",
        reason: "Scamming Tricks by Petrol Pump Scamming Tricks by Petrol Pump Scamming Tricks by Petrol Pump",
        dateTime: "12.09.2019, 12:53 PM",
        inspectedBy: "Kashif Khan",
        attachments: 2,
        comments: 12,
        status: "Unpaid",
    },
    {
        id: "2",
        challanId: "2665D9",
        business: "Petrol Pump",
        reason: "Scamming Tricks by Petrol Pump",
        dateTime: "12.09.2019, 12:53 PM",
        inspectedBy: "Kashif Khan",
        attachments: 2,
        comments: 12,
        status: "Pending",
    },
    {
        id: "3",
        challanId: "2665D9",
        business: "Petrol Pump",
        reason: "Scamming Tricks by Petrol Pump",
        dateTime: "12.09.2019, 12:53 PM",
        inspectedBy: "Kashif Khan",
        attachments: 2,
        comments: 12,
        status: "Approved",
    },
    {
        id: "4",
        challanId: "2665D9",
        business: "Petrol Pump",
        reason: "Scamming Tricks by Petrol Pump",
        dateTime: "12.09.2019, 12:53 PM",
        inspectedBy: "Kashif Khan",
        attachments: 2,
        comments: 12,
        status: "Unpaid",
    },
];

function StatusBadge({ status }: { status: ChallanStatus }) {
    const styles: Record<ChallanStatus, string> = {
        Unpaid: "bg-rose-50 text-rose-500",
        Pending: "bg-amber-50 text-amber-500",
        Approved: "bg-emerald-50 text-emerald-600",
    };

    return (
        <span
            className={`inline-block rounded-md px-3 py-1 text-xs font-semibold ${styles[status]}`}
        >
            {status}
        </span>
    );
}

export default function ChallansPage() {
    const location = useLocation();

    return (
        <div className="flex h-screen flex-1 flex-col bg-linear-to-b from-white to-[#e7edf9]">

            {/* Body */}
            <main className="flex-1 overflow-auto px-5 py-4">
                {/* Breadcrumb + action */}
                <div className="mb-5 flex items-center justify-between">

                    <div className="flex items-center gap-1 text-[12px] bg-white p-2 border rounded-[5px] border-zinc-200 text-slate-500 mt-1">
                        <Home size={12} />
                        <Path location={location} />
                    </div>

                    <button className="flex items-center gap-2 rounded-lg bg-[#14B8A6] px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#0f9d8d]">
                        <span className="text-lg leading-none">+</span> Submit Challan
                    </button>
                </div>

                {/* Table card */}
                <div className="overflow-hidden rounded-xl border border-gray-100 bg-white">
                    <table className="w-full table-fixed text-left text-sm">
                        <thead>
                            <tr className="border-b text-xs border-gray-100 bg-[#eff3fb] font-semibold uppercase tracking-wide text-slate-800">
                                <th className="px-6 py-4">Challan ID</th>
                                <th className="px-6 py-4">Business</th>
                                <th className="px-6 py-4">Reason</th>
                                <th className="px-6 py-4">Date - Time</th>
                                <th className="px-6 py-4">Inspected by</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {challans.map((c) => (
                                <tr key={c.id} className="border-b truncate text-xs border-gray-50 last:border-0">
                                    <td className="px-6 py-6 font-semibold text-[#2D0D4D]">
                                        {c.challanId}
                                    </td>
                                    <td className="px-6 py-6 text-gray-600">{c.business}</td>
                                    <td className="px-6 py-6 text-gray-600"><div className="w-30 truncate">{c.reason}</div></td>
                                    <td className="px-6 py-6 text-gray-600">
                                        {c.dateTime.split(", ")[0]}
                                        <br />
                                        {c.dateTime.split(", ")[1]}
                                    </td>
                                    <td className="px-6 py-6 text-gray-600">
                                        <p className="font-medium text-gray-700">{c.inspectedBy}</p>
                                        <div className="mt-1 flex items-center gap-3 text-xs text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <Paperclip className="h-3.5 w-3.5" /> {c.attachments}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MessageSquare className="h-3.5 w-3.5" /> {c.comments}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <StatusBadge status={c.status} />
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex flex-col gap-2">
                                            <button className="rounded-md bg-[#2D0D4D] px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#3d1568]">
                                                View Details
                                            </button>
                                            <button className="rounded-md bg-[#14B8A6] px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#0f9d8d]">
                                                Resolve
                                            </button>
                                            <button className="rounded-md border border-[#14B8A6] px-4 py-2 text-[12px] font-semibold text-[#14B8A6] transition-colors hover:bg-[#14B8A6]/5">
                                                Comment
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}