<?php

use Illuminate\Support\Facades\Route;

// ---- Controllers

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProductController;

// ---- Clients

Route::get('/clients', [ClientController::class, 'index']);
Route::post('/clients', [ClientController::class, 'store']);
Route::get('/clients/{id}', [ClientController::class, 'show']);
Route::put('/clients/{id}', [ClientController::class, 'update']);
Route::delete('/clients/{id}', [ClientController::class, 'destroy']);

// ---- Products

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
