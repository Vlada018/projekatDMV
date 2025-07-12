<?php

namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


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

    public function batteryChart(Device $device)
{
    if (!Auth::user()->devices->contains($device)) {
        abort(403);
    }

    $chartData = collect(range(0, 23))->map(function ($hour) {
        return [
            'hour' => "{$hour}:00",
            'battery' => rand(10, 100),
        ];
    });

    return Inertia::render('Devices/BatteryChart', [
        'device' => $device,
        'chartData' => $chartData,
    ]);
}

    public function chart()
{
    $userId = Auth::id();

    $chartData = DB::table('devices')
        ->join('device_user', 'devices.id', '=', 'device_user.device_id')
        ->where('device_user.user_id', $userId)
        ->select('devices.type', DB::raw('count(*) as count'))
        ->groupBy('devices.type')
        ->get();

    return Inertia::render('Devices/Chart', [
        'chartData' => $chartData,
    ]);
}

    public function create()
    {
        return Inertia::render('Devices/Create');
    }

    public function edit(Device $device)
{
    if (!Auth::user()->devices->contains($device)) {
        abort(403);
    }

    return Inertia::render('Devices/Edit', [
        'device' => $device
    ]);
}

public function update(Request $request, Device $device)
{
    if (!Auth::user()->devices->contains($device)) {
        abort(403);
    }

    $request->validate([
        'name' => ['required', 'string', 'max:255', 'unique:devices,name,' . $device->id],
        'type' => ['required', 'string', 'max:255'],
        'location' => ['required', 'string', 'max:255'],
    ]);

    $device->update([
        'name' => $request->name,
        'type' => $request->type,
        'location' => $request->location,
    ]);

    return redirect()->route('devices.index')->with('success', 'Uređaj izmenjen.');
}

public function destroy(Device $device)
{
    $device->delete();
    return redirect()->route('devices.index')->with('success', 'Uređaj uspešno obrisan.');
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
