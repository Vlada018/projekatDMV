import React from 'react';
import { usePage, Link } from '@inertiajs/react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

export default function Chart() {
    const { chartData } = usePage().props;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Grafikon: Broj uređaja po tipu</h1>

            <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="type" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#3B82F6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
