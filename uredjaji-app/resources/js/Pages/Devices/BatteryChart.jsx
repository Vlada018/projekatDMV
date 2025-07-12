import React from 'react';
import { usePage, Link } from '@inertiajs/react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function BatteryChart() {
  const { device, chartData } = usePage().props;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Baterija uređaja: {device.name}</h1>

      <Link href={route('devices.index')} className="text-blue-600 underline mb-4 inline-block">
        ← Nazad na uređaje
      </Link>

      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="battery" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
