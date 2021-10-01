import { useState } from "react";
import SearchResults from "./SearchResults";
import  SearchInput  from "./SearchInput";

const Search = () => {
  const [customerInput, setCustomerInput] = useState("");

  return (
    <>
      <SearchInput updateSearchState={setCustomerInput} />
      <SearchResults searchCustomerInput={customerInput} />
    </>
  );
};

export default Search
