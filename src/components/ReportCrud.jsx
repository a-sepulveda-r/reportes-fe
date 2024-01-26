import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ReportCrud = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
      }

      await axios.post('https://localhost:7018/api/Report/AddReport', formData);

      alert('Report Registration Successful');
      setValue('fecha', '');
      setValue('descripcion', '');
      setValue('personalInvolucrado', '');
      setValue('atencionAlEvento', '');
      setValue('antecedentes', '');
      setValue('accionesInmediatas', '');
      setValue('image', null);
      setValue('impacto', '');

      navigate('/reportes'); // Navegar después de enviar el formulario
    } catch (err) {
      console.error(err);
      alert('Error occurred while saving report.');
    }
  };

  const handleImageChange = (event) => {
    setValue('image', event.target.files[0]);
  };

  return (
    <div className='my-5'>
      <form
        className='max-w-md mx-auto'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='relative z-0 w-full mb-5 group'>
          <textarea
            className='form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            {...register('personalInvolucrado', {
              required: 'Este campo es obligatorio',
              maxLength: {
                value: 500,
                message: 'Máximo 500 caracteres permitidos',
              },
            })}
          />
          {errors.personalInvolucrado && (
            <p className='text-red-500'>{errors.personalInvolucrado.message}</p>
          )}
          <label
            htmlFor='personalInvolucrado'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Personal involucrado
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='date'
            className='form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            {...register('fecha', {
              required: 'Este campo es obligatorio',
            })}
          />
          {errors.fecha && (
            <p className='text-red-500'>{errors.fecha.message}</p>
          )}
          <label
            htmlFor='fecha'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Fecha
          </label>
        </div>

        <div className='relative z-0 w-full mb-5 group'>
          <textarea
            className='form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            {...register('descripcion', {
              required: 'Este campo es obligatorio',
              maxLength: {
                value: 500,
                message: 'Máximo 500 caracteres permitidos',
              },
            })}
          />
          {errors.descripcion && (
            <p className='text-red-500'>{errors.descripcion.message}</p>
          )}
          <label
            htmlFor='descripcion'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Descripcion
          </label>
        </div>

        <div className='relative z-0 w-full mb-5 group'>
          <select
            className='form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            {...register('impacto', {
              required: 'Selecciona un impacto',
            })}
          >
            <option value=''>Selecciona Impacto</option>
            <option value='ALTO'>ALTO</option>
            <option value='MEDIO'>MEDIO</option>
            <option value='BAJO'>BAJO</option>
          </select>
          {errors.impacto && (
            <p className='text-red-500'>{errors.impacto.message}</p>
          )}
          <label
            htmlFor='impacto'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Impacto
          </label>
        </div>

        <div className='relative z-0 w-full mb-5 group'>
          <textarea
            className='form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            {...register('atencionAlEvento', {
              required: 'Este campo es obligatorio',
              maxLength: {
                value: 500,
                message: 'Máximo 500 caracteres permitidos',
              },
            })}
          />
          {errors.atencionAlEvento && (
            <p className='text-red-500'>{errors.atencionAlEvento.message}</p>
          )}
          <label
            htmlFor='atencionAlEvento'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Atencion al evento
          </label>
        </div>

        <div className='relative z-0 w-full mb-5 group'>
          <textarea
            className='form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            {...register('antecedentes', {
              required: 'Este campo es obligatorio',
              maxLength: {
                value: 500,
                message: 'Máximo 500 caracteres permitidos',
              },
            })}
          />
          {errors.antecedentes && (
            <p className='text-red-500'>{errors.antecedentes.message}</p>
          )}
          <label
            htmlFor='antecedentes'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Antecedentes
          </label>
        </div>

        <div className='relative z-0 w-full mb-5 group'>
          <textarea
            className='form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            {...register('accionesInmediatas', {
              required: 'Este campo es obligatorio',
              maxLength: {
                value: 500,
                message: 'Máximo 500 caracteres permitidos',
              },
            })}
          />
          {errors.accionesInmediatas && (
            <p className='text-red-500'>{errors.accionesInmediatas.message}</p>
          )}
          <label
            htmlFor='accionesInmediatas'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Acciones inmediatas
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='file'
            accept='image/*'
            className='form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            onChange={handleImageChange}
          />
          {errors.image && (
            <p className='text-red-500'>{errors.image.message}</p>
          )}
          <label
            htmlFor='image'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Image
          </label>
        </div>

        {/* Botón de envío */}
        <div className='flex justify-center'>
          <div>
            <button
              type='submit'
              className='inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
            >
              guardar evento
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
