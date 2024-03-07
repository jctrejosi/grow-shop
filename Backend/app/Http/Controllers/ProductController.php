<?php

namespace App\Http\Controllers;

use App\Models\Product;
use OpenApi\Annotations as OA;

/**
* @OA\Info(title="APIS GROW SHOP", version="1.0")
*/

class ProductController extends Controller
{
    /**
     * @OA\Get(
     *     path="/products",
     *     summary="Obtener todos los productos",
     *     tags={"Productos"},
     *     @OA\Response(
     *         response=200,
     *         description="Operación exitosa",
     *         @OA\JsonContent()
     *     )
     * )
     */
    public function index()
    {
        $products = Product::all();

        return response()->json($products);
    }
}
