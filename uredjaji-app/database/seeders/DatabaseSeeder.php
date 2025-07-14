<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        \App\Models\User::factory()->create([
        'name' => 'Drugi Korisnik',
        'email' => 'test2@example.com',
        'password' => bcrypt('12345678'),
    ]);

        $this->call([
        UserSeeder::class,
        DeviceSeeder::class,
        DeviceUserSeeder::class,
    ]);

    }
}
