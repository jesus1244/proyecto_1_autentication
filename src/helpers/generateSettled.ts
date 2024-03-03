function repeatStringNumTimes (str: string, num: number): string {
  return num <= 0 ? "" : str + repeatStringNumTimes(str, num - 1);
}

export const generateSettled = (value: string, longitud: number = 20, charter: string = '0'): string => {
  return `${new Date().getFullYear()}${value.replace('', repeatStringNumTimes(charter, longitud - (value.length + 4)))}`
}


