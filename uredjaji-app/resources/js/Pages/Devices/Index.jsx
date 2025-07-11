// resources/js/Pages/Devices/Index.jsx

import React from 'react';
import { usePage } from '@inertiajs/react';

export default function Index() {
    const { devices } = usePage().props;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Tvoji uređaji</h1>

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
        </div>
    );
}
