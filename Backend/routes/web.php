<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ClientController;

Route::group(['prefix' => 'api'], function () {
    Route::get('/clients', [ClientController::class, 'index']);
    Route::post('/clients', [ClientController::class, 'store']);
    Route::get('/clients/{id}', [ClientController::class, 'show']);
    Route::put('/clients/{id}', [ClientController::class, 'update']);
    Route::delete('/clients/{id}', [ClientController::class, 'destroy']);
});

Route::get('/api/products', [ProductController::class, 'index'])->name('products.index');

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
