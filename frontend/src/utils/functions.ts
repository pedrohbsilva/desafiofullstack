import { QueryProps } from '../interfaces';
import { sortInfo } from './constants';

function timestampToDate(timeStamp: number): string {
  const dtFormat = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
  });

  return dtFormat.format(new Date(timeStamp * 1e3));
}

function validateValues(data: QueryProps): boolean {
  if (Number.isNaN(data.limit) || Number.isNaN(data.score)) {
    return false;
  }
  if (data.sort !== undefined) {
    if (!sortInfo.includes(data.sort)) {
      return false;
    }
  }

  return true;
}
function isNumeric(value: string): boolean {
  return /^-?\d+$/.test(value);
}

export { timestampToDate, validateValues, isNumeric };
