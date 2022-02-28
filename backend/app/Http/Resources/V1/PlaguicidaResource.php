<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class PlaguicidaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nombre_comercial' => $this->nombre_comercial,
            'ingrediente_activo' => $this->ingrediente_activo,
            'porcentaje_concentracion' => $this->porcentaje_concentracion,
        ];
    }
}
