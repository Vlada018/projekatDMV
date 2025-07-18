<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
   public function run(): void
    {
        User::create([
            'name' => 'Korisnik 1',
            'email' => 'user1@example.com',
            'password' => Hash::make('12345678'),
        ]);

        User::create([
            'name' => 'Korisnik 2',
            'email' => 'user2@example.com',
            'password' => Hash::make('12345678'),
        ]);

        User::create([
            'name' => 'Korisnik 3',
            'email' => 'user3@example.com',
            'password' => Hash::make('12345678'),
        ]);
    }
}
