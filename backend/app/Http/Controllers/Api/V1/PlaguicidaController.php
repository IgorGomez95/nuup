<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Plaguicida;
use Illuminate\Http\Request;

class PlaguicidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Plaguicida  $plaguicida
     * @return \Illuminate\Http\Response
     */
    public function show(Plaguicida $plaguicida)
    {
        return $plaguicida;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Plaguicida  $plaguicida
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Plaguicida $plaguicida)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Plaguicida  $plaguicida
     * @return \Illuminate\Http\Response
     */
    public function destroy(Plaguicida $plaguicida)
    {
        //
    }
}