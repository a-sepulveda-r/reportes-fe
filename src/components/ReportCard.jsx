import { PDFDownloadLink } from '@react-pdf/renderer';
import { ReportCardPDF } from './ReportCardPDF';
import camionNazar from '../assets/camionNazar.jpg';

export const ReportCard = ({ report }) => (
  <div className='my-32'>
    <img
      src={camionNazar}
      alt='camion tranzportes nazar'
      className='w-full max-h-96'
    />
    <div>
      <p className='bg-blue-800 py-3 text-white pl-3'>NUMERO DE REGISTRO</p>
      <p>
        <h3 className='text-center'>{`ID: ${report.id}`}</h3>
      </p>
    </div>
    <div>
      <p className='bg-blue-800 py-3 text-white pl-3'>DESCRIPCIÓN</p>
      <p className='py-3'>{report.descripcion}</p>
    </div>
    <div>
      <p className='bg-blue-800 py-3 text-white pl-3'>TIPO DE INCIDENTE</p>
      <p>{report.impacto}</p>
    </div>
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-9'>
      <div className='h-32 rounded-lg '>
        <p className='bg-blue-800 py-3 text-white pl-3'>PERSONAL INVOLUCRADO</p>
        <p>{report.personalInvolucrado}</p>
      </div>
      <div className='h-32 rounded-lg '>
        <p className='bg-blue-800 py-3 text-white pl-3'>ANTECEDENTES</p>
        <p> {report.antecedentes}</p>
        <p>Fecha: {report.fecha}</p>
        <p>Ubicación: BASE URIBE.</p>
        <p>Hora informada: 12:00</p>
      </div>
      <div className='h-80 rounded-l'>
        <p className='bg-blue-800 py-3 text-white pl-3'>REGISTRO FOTOGRÁFICO</p>
        <div className=''>
          <img
            src={`https://localhost:7018/${report.imagePath}`}
            alt={`Imagen de ${report.stname}`}
            className='object- max-w-96 max-h-31'
          />
        </div>
      </div>
      <div className='h-32 rounded-lg'>
        <p className='bg-blue-800 py-3 text-white pl-3'>ACCIONES INMEDIATAS</p>
        <p>{report.accionesInmediatas}</p>
      </div>
    </div>
    <div>
      <p className='bg-blue-800 py-3 text-white pl-3'>ATENCIÓN AL EVENTO</p>
      <p>{report.atencionAlEvento}</p>
    </div>
    <div className='my-5 mt-14 flex justify-center'>
      <div>
        <PDFDownloadLink
          document={
            <ReportCardPDF
              report={report}
              camionNazar={camionNazar}
            />
          }
          fileName='report.pdf'
          className='inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
        >
          {({ loading, ...rest }) =>
            loading ? 'Cargando documento...' : 'Descargar PDF'
          }
        </PDFDownloadLink>
      </div>
    </div>
  </div>
);
