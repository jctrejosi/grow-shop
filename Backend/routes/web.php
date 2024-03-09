<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

Route::get('/test-db-connection', function () {
    try {
        DB::connection()->getPdo();
        echo "Conexión exitosa a la base de datos";
    } catch (\Exception $e) {
        die("Error de conexión a la base de datos: " . $e->getMessage());
    }
});


Route::get('/', function () {
    return view('welcome');
});
