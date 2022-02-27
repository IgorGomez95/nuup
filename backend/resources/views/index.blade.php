<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100 text-gray-700">
        <div class="md:container md:mx-auto px-4">
            <div class="grid grid-cols-3 my-10">
                @foreach ($plaguicidas as $plaguicida)
                    <div class="bg-white hover:bg-blue-100 border border-gray-200 p-3">
                        <h2 class="font-bold mb-2">{{ $plaguicida->nombre_comercial }}</h2>
                        <p class="text-xs">{{ $plaguicida->ingrediente_activo }}</p>
                        <p class="text-xs">{{ $plaguicida->porcentaje_concentracion }}%</p>
                    </div>
                @endforeach
            </div>
            {{ $plaguicidas->links() }}
        </div>
        
    </body>
</html>
