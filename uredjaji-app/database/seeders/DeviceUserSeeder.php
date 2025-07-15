<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Device;


class DeviceUserSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::all();
        $devices = Device::all();

        foreach ($users as $index => $user) {
            $start = $index * 12;
            $userDevices = $devices->slice($start, 12);
            $user->devices()->attach($userDevices->pluck('id')->toArray());
        }
    }
}
