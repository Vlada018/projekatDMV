<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DeviceController;

Route::get('/devices/chart', [DeviceController::class, 'chart'])->name('devices.chart');

Route::resource('devices', DeviceController::class);

Route::middleware(['auth'])->group(function () {

    Route::get('/dashboard', function () {return Inertia::render('Dashboard');})->middleware(['auth', 'verified'])->name('dashboard');
    Route::get('/devices/export/csv', [DeviceController::class, 'exportCsv'])->name('devices.export.csv')->middleware('auth');
    Route::get('/devices/{device}/batterychart', [DeviceController::class, 'batteryChart'])->name('devices.batterychart');
    Route::put('/devices/{device}', [DeviceController::class, 'update'])->name('devices.update');   
    Route::get('/devices', [DeviceController::class, 'index'])->name('devices.index');
    Route::post('/devices', [DeviceController::class, 'store'])->name('devices.store'); 
});

Route::get('/test', function () {
    return App\Http\Controllers\DeviceController::class;
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
