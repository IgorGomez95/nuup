<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\PlaguicidaResource;
use App\Plaguicida;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response; //Códigos de respuesta HTTP

class PlaguicidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PlaguicidaResource::collection(Plaguicida::latest()->paginate());
    }

    /**
     * Display a listing of the resource deleted.
     *
     * @return \Illuminate\Http\Response
     */
    public function deleted()
    {
        return PlaguicidaResource::collection(Plaguicida::onlyTrashed()->paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Plaguicida::create($request->all());
        return response()->json([
            'message' => 'Plaguicida Created'
        ], Response::HTTP_ACCEPTED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Plaguicida  $plaguicida
     * @return \Illuminate\Http\Response
     */
    public function show(Plaguicida $plaguicida)
    {
        return new PlaguicidaResource($plaguicida);
    }

    /**
     * Restore the specified resource.
     *
     * @param  \App\Plaguicida  $plaguicida
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        Plaguicida::withTrashed()->find($id)->restore();
        return response()->json([
            'message' => 'Plaguicida Restored'
        ], Response::HTTP_ACCEPTED);
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
        $plaguicida->update($request->all());

        return response()->json([
            'message' => 'Plaguicida Updated'
        ], Response::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Plaguicida  $plaguicida
     * @return \Illuminate\Http\Response
     */
    public function destroy(Plaguicida $plaguicida)
    {
        $plaguicida->delete(); //soft delete

        return response()->json([
            'message' => 'Plaguicida Deleted'
        ], Response::HTTP_ACCEPTED);
    }
}
