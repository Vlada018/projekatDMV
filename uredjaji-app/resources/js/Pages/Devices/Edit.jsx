import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Edit({ device }) {
    const { data, setData, put, processing, errors } = useForm({
        name: device.name,
        type: device.type,
        location: device.location,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('devices.update', device.id));
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Izmeni uređaj</h1>
            <form onSubmit={submit} className="bg-white p-4 rounded shadow">
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
                    Sačuvaj izmene
                </button>
            </form>
        </div>
    );
}
