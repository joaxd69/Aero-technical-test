import { SearchBoxForm } from "../interfaces";

export function ValidateSearch(searchData: SearchBoxForm) {
  let error = "";
  if (!searchData.pickUpPlace) {
    error = "Por favor, indique donde quieres retirar";
  } else if (!searchData.pickUpDate.date) {
    error = "Por favor, indique la fecha del alquiler";
  } else if (!searchData.pickUpDate.time) {
    error = "Por favor, indique la hora de alquiler.";
  } else if (!searchData.dropOffPlace) {
    error = "Por favor, indique donde quieres devolver el vehiculo";
  } else if (!searchData.dropOffDate.time) {
    error = "Por favor, indique la hora de devolucion";
  } else if (!searchData.dropOffDate.date) {
    error = "Por favor, indique la fecha de devolucion";
  }
  return {
    isError: error.length !== 0,
    error,
  };
}
