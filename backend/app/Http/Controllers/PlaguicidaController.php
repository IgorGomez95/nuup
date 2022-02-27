<?php

namespace App\Http\Controllers;

use App\Plaguicida;
use Illuminate\Http\Request;

class PlaguicidaController extends Controller
{
    // Método index que retorna una vista con el catálogo de plaguicidas por los más
    // recientes y con paginación
    public function index()
    {
        return view('index', [
            'plaguicidas' => Plaguicida::latest()->paginate()
        ]);
    }
}
