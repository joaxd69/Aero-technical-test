export interface SearchBoxForm {
  pickUpPlace: string;
  dropOffPlace: string;
  pickUpDate: {
    date: string;
    time: string;
  };
  dropOffDate: {
    date: string;
    time: string;
  };
}
