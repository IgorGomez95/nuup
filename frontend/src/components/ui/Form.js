import { useForm } from '../../hooks/useForm';

export const Form = () => {
    // los hooks no se pueden utilizar de manera condicional
    // useEffect es un hook que permite ejecutar un efecto
    // secundario cuando sucede algo en el componente
    const [formValues, handleInputChange] = useForm({
        nombre_comercial: '',
        ingrediente_activo: '',
        porcentaje_concentracion: ''
    });

    const { nombre_comercial, ingrediente_activo, porcentaje_concentracion } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={ handleSubmit } className='mt-4'>
            <div className="grid grid-flow-row md:grid-flow-col">
                <div className='basis-1/4'>
                    <label>
                        <span className="block text-sm font-medium text-slate-700">Nombre Comercial</span>
                        <input
                            required
                            name="nombre_comercial" 
                            type="text"
                            placeholder="Ingrese Nombre Comercial..."
                            value={nombre_comercial} 
                            onChange={ handleInputChange } 
                            className="mt-1 w-full block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                    </label>
                </div>
                <div className='basis-1/4'>
                    <label>
                        <span className="block text-sm font-medium text-slate-700">Ingrediente Activo</span>
                        <input 
                            name="ingrediente_activo" 
                            type="text"
                            placeholder="Ingrese Ingrediente Activo"
                            value={ingrediente_activo} 
                            onChange={ handleInputChange } 
                            className="mt-1 w-full block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                    </label>
                </div>
                <div className='basis-1/4'>
                    <label>
                        <span className="block text-sm font-medium text-slate-700">Porcentaje de Concentración</span>
                        <input 
                            required
                            name="porcentaje_concentracion" 
                            type="number"
                            placeholder="Ingrese Porcentaje..." 
                            min="0"
                            max="100"
                            value={porcentaje_concentracion}
                            onChange={ handleInputChange } 
                            className="mt-1 w-full block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                    </label>
                </div>
                <div className="items-center flex place-self-center order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                    <button
                    type='submit'
                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-green-500 text-white hover:bg-primary"
                    >
                    Guardar
                    </button>
                </div>
            </div>
        </form>
    );
}