import { useState, type FormEvent, type ChangeEvent } from 'react';
import Path from '../../components/Path';
import { useLocation } from 'react-router-dom';
import { ChevronDownIcon, Home, PlusIcon } from 'lucide-react';

interface ChallanFormData {
    taskTitle: string;
    taskDescription: string;
    startDate: string;
    endDate: string;
    priority: string;
    assignTo: string;
    location: string;
}

export default function AssignTask() {
    const location = useLocation();
    const [formData, setFormData] = useState<ChallanFormData>({
        taskTitle: '',
        taskDescription: '',
        startDate: '2024-07-02',
        endDate: '2024-07-02',
        priority: 'Urgent',
        assignTo: 'Kashif Khan - Director Labour',
        location: 'District Malakand',
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Challan submitted:', formData);
    };

    return (
        <div className="p-3 sm:p-4 lg:p-6 from-white to-(--linear-bottom)">
            {/* Breadcrumb */}
            <nav
                aria-label="Breadcrumb"
                className="flex w-fit flex-wrap items-center gap-1 mb-6 rounded-[5px] border border-zinc-200 bg-white p-2 text-[12px] text-slate-500"
            >
                <Home size={11} className="shrink-0" />
                <Path location={location} />
            </nav>

            {/* Card */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-bold text-[#2D0D4D] mb-4 sm:mb-5">
                    Assign a new task
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Task Title */}
                    <div>
                        <label htmlFor="taskTitle" className="block text-xs text-gray-500 mb-1.5">
                            Task Title
                        </label>
                        <input
                            id="taskTitle"
                            name="taskTitle"
                            type="text"
                            placeholder="Enter here"
                            value={formData.taskTitle}
                            onChange={handleChange}
                            className="w-full bg-gray-100 rounded-md px-3 py-2 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition"
                        />
                    </div>

                    {/* Task Description */}
                    <div>
                        <label htmlFor="taskDescription" className="block text-xs text-gray-500 mb-1.5">
                            Task Description
                        </label>
                        <textarea
                            id="taskDescription"
                            name="taskDescription"
                            placeholder="Enter here"
                            value={formData.taskDescription}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-gray-100 rounded-md px-3 py-2 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition resize-none"
                        />
                    </div>

                    {/* Start Date / End Date / Priority */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="startDate" className="block text-xs text-gray-500 mb-1.5">
                                Start Date
                            </label>
                            <input
                                id="startDate"
                                name="startDate"
                                type="date"
                                value={formData.startDate}
                                onChange={handleChange}
                                className="w-full bg-gray-100 rounded-md px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="endDate" className="block text-xs text-gray-500 mb-1.5">
                                End Date
                            </label>
                            <input
                                id="endDate"
                                name="endDate"
                                type="date"
                                value={formData.endDate}
                                onChange={handleChange}
                                className="w-full bg-gray-100 rounded-md px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="priority" className="block text-xs text-gray-500 mb-1.5">
                                Priority
                            </label>
                            <div className="relative">
                                <select
                                    id="priority"
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleChange}
                                    className="w-full appearance-none bg-gray-100 rounded-md px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition cursor-pointer"
                                >
                                    <option>Urgent</option>
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                    <ChevronDownIcon size={14} className="text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Assign to / Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="assignTo" className="block text-xs text-gray-500 mb-1.5">
                                Assign to
                            </label>
                            <div className="relative">
                                <select
                                    id="assignTo"
                                    name="assignTo"
                                    value={formData.assignTo}
                                    onChange={handleChange}
                                    className="w-full appearance-none bg-gray-100 rounded-md px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition cursor-pointer"
                                >
                                    <option>Kashif Khan - Director Labour</option>
                                    <option>Fazal Manan - Secretary</option>
                                    <option>Ayesha Bibi - Inspector</option>
                                </select>
                                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                    <ChevronDownIcon size={14} className="text-gray-400" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="location" className="block text-xs text-gray-500 mb-1.5">
                                Location
                            </label>
                            <div className="relative">
                                <select
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full appearance-none bg-gray-100 rounded-md px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] transition cursor-pointer"
                                >
                                    <option>District Malakand</option>
                                    <option>District Peshawar</option>
                                    <option>District Swat</option>
                                </select>
                                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                    <ChevronDownIcon size={14} className="text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center sm:justify-end pt-1">
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-1.5 bg-[#14B8A6] hover:bg-[#0F9C8C] text-white text-xs font-medium px-5 py-2 rounded-full transition w-full sm:w-auto"
                        >
                            <PlusIcon size={14} />
                            Submit Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}