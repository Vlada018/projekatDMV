<?php

namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;


class DeviceController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $devices = $user->devices()->orderBy('created_at', 'desc')->paginate(10);

        return Inertia::render('Devices/Index', [
            'devices' => $devices
        ]);
    }

    public function create()
    {
        // Враћа страницу са формом за додавање
        return Inertia::render('Devices/Create');
    }

  public function store(Request $request)
{
    $request->validate([
        'name' => ['required', 'string', 'max:255', 'unique:devices,name'],
        'type' => ['required', 'string', 'max:255'],
        'location' => ['required', 'string', 'max:255'],
    ]);

    $connectionStatus = ['online', 'offline'][array_rand(['online', 'offline'])];
    $batteryStatus = rand(0, 100);

    $device = Device::create([
        'name' => $request->name,
        'type' => $request->type,
        'location' => $request->location,
        'connection_status' => $connectionStatus,
        'battery_status' => $batteryStatus,
    ]);

    Auth::user()->devices()->attach($device->id);

    return redirect()->route('devices.index')->with('success', 'Uređaj dodat.');
}

}
