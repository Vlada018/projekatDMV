// resources/js/Pages/Devices/Index.jsx

import React from 'react';
import { useForm } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function Index() {
    const { devices } = usePage().props;

    console.log('Devices props:', devices);

    console.log('Devices props:', devices);
    const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    type: '',
    location: '',
});

const [showForm, setShowForm] = useState(false);


const submit = (e) => {
    e.preventDefault();
    post(route('devices.store'), {
        onSuccess: () => {
        reset();
        setShowForm(false);
    },
    });
};
    return (
        <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Tvoji uređaji</h1>

    <div className="flex gap-4 mb-4">
    <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
        {showForm ? 'Zatvori formu' : 'Dodaj uređaj'}
    </button>
    <button
        disabled
        className="bg-yellow-400 text-white px-4 py-2 rounded opacity-50"
    >
        Izmeni (uskoro)
    </button>
    <button
        disabled
        className="bg-red-500 text-white px-4 py-2 rounded opacity-50"
    >
        Obriši (uskoro)
    </button>
</div>

{showForm && (
    <form onSubmit={submit} className="mb-6 bg-white p-4 rounded shadow">
        <div className="mb-4">
            <label className="block font-bold">Naziv</label>
            <input
                type="text"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                className="border rounded w-full p-2"
            />
            {errors.name && <div className="text-red-500">{errors.name}</div>}
        </div>

        <div className="mb-4">
            <label className="block font-bold">Tip</label>
            <input
                type="text"
                value={data.type}
                onChange={(e) => setData('type', e.target.value)}
                className="border rounded w-full p-2"
            />
            {errors.type && <div className="text-red-500">{errors.type}</div>}
        </div>

        <div className="mb-4">
            <label className="block font-bold">Lokacija</label>
            <input
                type="text"
                value={data.location}
                onChange={(e) => setData('location', e.target.value)}
                className="border rounded w-full p-2"
            />
            {errors.location && <div className="text-red-500">{errors.location}</div>}
        </div>

        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={processing}
        >
            Dodaj uređaj
        </button>
    </form>)}

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border">Naziv</th>
                        <th className="p-2 border">Tip</th>
                        <th className="p-2 border">Lokacija</th>
                        <th className="p-2 border">Konekcija</th>
                        <th className="p-2 border">Baterija</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.data.map(device => (
                        <tr key={device.id}>
                            <td className="p-2 border">{device.name}</td>
                            <td className="p-2 border">{device.type}</td>
                            <td className="p-2 border">{device.location}</td>
                            <td className="p-2 border">{device.connection_status}</td>
                            <td className="p-2 border">{device.battery_status}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {devices.total > devices.per_page && (
    <div className="mt-4 flex gap-4">
        {devices.prev_page_url && (
            <button
                onClick={() => router.visit(devices.prev_page_url)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
                ← Prethodna
            </button>
        )}

        <span className="self-center">
            Stranica {devices.current_page} od {devices.last_page}
        </span>

        {devices.next_page_url && (
            <button
                onClick={() => router.visit(devices.next_page_url)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
                Sledeća →
            </button>
        )}
    </div>
)}

        </div>
    );
}
