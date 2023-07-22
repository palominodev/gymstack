import { startOfWeek, subWeeks, isBefore } from 'date-fns';

export const lunesPasadoMasProximo = () => {
  const fechaActual = new Date();
  const ultimoLunes = startOfWeek(fechaActual, { weekStartsOn: 1 }); // 1 = lunes, 0 = domingo

  // Si la fecha actual es antes del último lunes, el lunes pasado más próximo es el de la semana anterior
  if (isBefore(fechaActual, ultimoLunes)) {
    return subWeeks(ultimoLunes, 1);
  }

  // Si la fecha actual es después o igual al último lunes, el lunes pasado más próximo es el mismo último lunes
  return ultimoLunes;
}
