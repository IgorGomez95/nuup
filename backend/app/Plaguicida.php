<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Plaguicida extends Model
{
    use SoftDeletes;
    
    //Tabla del catálogo de plaguicidas
    protected $table = "cat_plaguicida";

    protected $fillable = [
        'nombre_comercial',
        'ingrediente_activo',
        'porcentaje_concentracion'
    ];

    protected $dates = ['deleted_at'];
}
