import { useAppDispatch, useAppSelector } from "../store/ReduxHooks";
import {
  clearInputs,
  setDatesBoxForm,
  setPlaceBoxForm,
} from "../store/Search.slice";
import { ValidateSearch } from "../utils/FormValidations";

export function useSearchBox() {
  const searchData = useAppSelector((state) => state.searchBox);
  const dispatch = useAppDispatch();
  const updateSearchData = (
    e: React.ChangeEvent<HTMLInputElement>,
    typeOfInput?: string
  ) => {
    const { name, value } = e.target;
    if (typeOfInput === "date" || typeOfInput === "time") {
      return dispatch(
        setDatesBoxForm({
          name: name as "pickUpDate" | "dropOffDate",
          value,
          typeOfInput,
        })
      );
    }
    dispatch(setPlaceBoxForm({ name, value }));
  };
  const clearSearchData = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    e.preventDefault();
    dispatch(clearInputs());
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { isError, error } = ValidateSearch(searchData);
    if (isError) {
      return alert(error);
    }
    console.log(searchData);
  };
  return {
    updateSearchData,
    clearSearchData,
    searchData,
    handleSubmit,
  };
}
