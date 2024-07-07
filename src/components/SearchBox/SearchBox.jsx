import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <>
      <div className={css.searchBox}>
        <label htmlFor={id}>Find Contacts by name</label>
        <input id={id} name="search" type="text" value={value} onChange={handleSearch} />
      </div>
    </>
  );
};

export default SearchBox;
