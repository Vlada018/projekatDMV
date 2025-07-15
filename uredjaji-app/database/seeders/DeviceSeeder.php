<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Device;

class DeviceSeeder extends Seeder
{
    public function run(): void
    {
        $types = ['radar', 'semafor', 'kamera', 'meteo stanica'];
        $locations = ['Niš', 'Beograd', 'Kragujevac', 'Subotica'];

        for ($i = 1; $i <= 36; $i++) {
            Device::create([
                'name' => 'Uređaj-' . $i,
                'type' => $types[array_rand($types)],
                'location' => $locations[array_rand($locations)],
                'connection_status' => rand(0, 1) ? 'online' : 'offline',
                'battery_status' => rand(0, 100),
            ]);
        }
    }
}
