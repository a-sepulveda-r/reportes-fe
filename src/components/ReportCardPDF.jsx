import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    fontSize: '12px',
  },
  image: {
    width: '120px',
    height: '120px',
    marginBottom: '8px',
    borderRadius: '4px',
  },
  imageCamion: {
    maxWidth: '100%',
    maxHeight: '200px',
    marginBottom: '8px',
    borderRadius: '4px',
  },
  header: {
    backgroundColor: '#2B0FBD',
    color: 'white',
    padding: '8px',
    marginBottom: '8px',
    borderRadius: '4px',
  },
  twoColumnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
});

export const ReportCardPDF = ({ report, camionNazar }) => (
  <Document>
    <Page size='A4'>
      <View style={styles.card}>
        <Image
          src={camionNazar}
          style={styles.imageCamion}
        />
        <View>
          <Text style={styles.header}>{`NUMERO DE REGISTRO: `}</Text>
          <Text>{report.id}</Text>
        </View>
        <View>
          <Text style={styles.header}>Descripcion:</Text>
          <Text>{report.descripcion}</Text>
        </View>
        <View>
          <Text style={styles.header}>Tipo de Incidente:</Text>
          <Text>{report.impacto}</Text>
        </View>
        <View style={styles.twoColumnContainer}>
          {' '}
          <View style={styles.column}>
            <View>
              <Text style={styles.header}>PERSONAL INVOLUCRADO</Text>
              <Text>{report.personalInvolucrado}</Text>{' '}
              <Text>Equipos: S-710</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View>
              <Text style={styles.header}>ANTECEDENTES</Text>
              <Text>{report.antecedentes}</Text>
              <Text>Fecha: {report.fecha}</Text>
              <Text>Ubicación: BASE URIBE.</Text>
              <Text>Hora informada: 12:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.twoColumnContainer}>
          <View style={styles.column}>
            <View>
              <Text style={styles.header}>REGISTRO FOTOGRÁFICO</Text>
              <Image
                src={`https://localhost:7018/${report.imagePath}`}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.column}>
            <View>
              <Text style={styles.header}>ACCIONES INMEDIATAS</Text>
              <Text>{report.accionesInmediatas}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.header}>ATENCIÓN AL EVENTO</Text>
          <Text>{report.atencionAlEvento}</Text>
        </View>
      </View>
    </Page>
  </Document>
);
