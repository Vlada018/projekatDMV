<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Device;

class DeviceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          $types = ['radar', 'semafor', 'kamera', 'meteo stanica'];
        $locations = ['Nis', 'Beograd', 'Kragujevac', 'Subotica'];

        for ($i = 1; $i <= 10; $i++) {
            Device::create([
                'name' => 'Uredjaj-' . $i,
                'type' => $types[array_rand($types)],
                'location' => $locations[array_rand($locations)],
                'connection_status' => rand(0, 1) ? 'online' : 'offline',
                'battery_status' => rand(0, 100),
            ]);
        }
    }
}
