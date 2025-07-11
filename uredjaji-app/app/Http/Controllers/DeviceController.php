<?php

namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DeviceController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $devices = $user->devices()->paginate(10);

        return Inertia::render('Devices/Index', [
            'devices' => $devices
        ]);
    }
}
