<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Device extends Model
{
     protected $fillable = [
        'name', 'type', 'location', 'connection_status', 'battery_status',
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'device_user', 'device_id', 'user_id');
    }
}
