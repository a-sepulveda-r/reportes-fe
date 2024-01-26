export const getColorForImpact = (impacto) => {
  switch (impacto) {
    case 'ALTO':
      return 'red';
    case 'MEDIO':
      return 'orange';
    case 'BAJO':
      return 'green';
    default:
      return 'black';
  }
};
