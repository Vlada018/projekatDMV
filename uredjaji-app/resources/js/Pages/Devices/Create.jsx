import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

export default function DeviceCreate() {
  const { errors } = usePage().props;

  const [data, setData] = useState({
    name: '',
    type: '',
    location: '',
  });

  function handleChange(e) {
    setData({...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    Inertia.post(route('devices.store'), data);
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Додај нови уређај</h1>

      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Назив</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          {errors.name && <div className="text-red-600 mt-1">{errors.name}</div>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Тип</label>
          <input
            type="text"
            name="type"
            value={data.type}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          {errors.type && <div className="text-red-600 mt-1">{errors.type}</div>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Локација</label>
          <input
            type="text"
            name="location"
            value={data.location}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          {errors.location && <div className="text-red-600 mt-1">{errors.location}</div>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Додај уређај
        </button>
      </form>
    </div>
  );
}
