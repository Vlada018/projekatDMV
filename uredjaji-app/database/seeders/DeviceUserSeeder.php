<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Device;


class DeviceUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $user = User::first(); // Uzima prvog korisnika
        $devices = Device::all();

        // Povezuje korisnika sa svim uređajima
        $user->devices()->sync($devices->pluck('id')->toArray());
    }
}
