<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//region -- API Plaguicida
Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('plaguicidas', 'Api\V1\PlaguicidaController')
            ->only(['index', 'show', 'destroy','update','store']);

    Route::get('plaguicidasDeleted', 'Api\V1\PlaguicidaController@deleted');

    Route::get('plaguicidasRestore/{id}', 'Api\V1\PlaguicidaController@restore');
});
//endregion