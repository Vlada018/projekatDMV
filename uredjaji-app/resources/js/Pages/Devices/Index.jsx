// resources/js/Pages/Devices/Index.jsx

import React from 'react';
import { useForm } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { Link } from '@inertiajs/react';



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

const [editingDevice, setEditingDevice] = useState(null);

const [deviceToDelete, setDeviceToDelete] = useState(null);
const { flash } = usePage().props;


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

     {flash?.success && (
  <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
    {flash.success}
  </div>
)}
    
      <h1 className="text-2xl font-bold mb-4">Tvoji uređaji:</h1>

    <Link
    href={route('dashboard')}
    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
    >
    Nazad na početnu
    </Link>
            

    <div className="flex gap-4 my-4">
    <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
        {showForm ? 'Zatvori formu' : 'Dodaj uređaj'}
    </button>
    
    <div className="mb-4">
    <label className="block font-bold mb-2">Izaberi uređaj za izmenu:</label>
    <select
        className="border p-2 rounded w-full"
        onChange={(e) => {
            const selectedId = e.target.value;
            const selectedDevice = devices.data.find(d => d.id == selectedId);
            setEditingDevice(selectedDevice);
        }}
    >
        <option value="">-- Izaberi uređaj --</option>
        {devices.data.map(device => (
            <option key={device.id} value={device.id}>
                {device.name}
            </option>
        ))}
    </select>
</div>
{editingDevice && (
    <form
        onSubmit={(e) => {
            e.preventDefault();
           router.put(route('devices.update', editingDevice.id), editingDevice, {
            onSuccess: () => {
                setEditingDevice(null);
            }
        });
        }}
        className="bg-white p-4 rounded shadow mb-6"
    >
        <h2 className="text-xl font-bold mb-4">Izmena uređaja: {editingDevice.name}</h2>

        <input
            type="text"
            className="border p-2 mb-2 w-full"
            value={editingDevice.name}
            onChange={(e) =>
                setEditingDevice({ ...editingDevice, name: e.target.value })
            }
        />
        <input
            type="text"
            className="border p-2 mb-2 w-full"
            value={editingDevice.type}
            onChange={(e) =>
                setEditingDevice({ ...editingDevice, type: e.target.value })
            }
        />
        <input
            type="text"
            className="border p-2 mb-4 w-full"
            value={editingDevice.location}
            onChange={(e) =>
                setEditingDevice({ ...editingDevice, location: e.target.value })
            }
        />
        <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
        >
            Sačuvaj izmene
        </button>
    </form>
)}

<div className="mb-4">
    <label className="block font-bold mb-2">Izaberi uređaj za brisanje:</label>
    <select
        className="border p-2 rounded w-full"
        onChange={(e) => {
            const selectedId = e.target.value;
            const selectedDevice = devices.data.find(d => d.id == selectedId);
            setDeviceToDelete(selectedDevice);
        }}
    >
        <option value="">-- Izaberi uređaj --</option>
        {devices.data.map(device => (
            <option key={device.id} value={device.id}>
                {device.name}
            </option>
        ))}
    </select>
</div>

{deviceToDelete && (
    <button
        onClick={() => {
            if (confirm(`Da li sigurno želiš da obrišeš? "${deviceToDelete.name}"?`)) {
                router.delete(route('devices.destroy', deviceToDelete.id), {
                    onSuccess: () => setDeviceToDelete(null)
                });
            }
        }}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
        Obriši uređaj
    </button>
)}

    
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
                        <th className="p-2 border">Grafik</th>
                        
                        
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
                            <td className="p-2 border">
                                    <Link
                                        href={route('devices.batterychart', device.id)}
                                        className="text-indigo-600 underline"
                                    >
                                        Baterija 24h
                                    </Link>
                                </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            < div className="my-5">
            <a
        href={route('devices.export.csv')}
        target="_blank"
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
        Izvezi podatke у CSV
        </a>
            </div>
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
