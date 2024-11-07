"use client";
import React, { useState } from "react";
import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = () => {
    alert(searchValue);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex gap-1">
        <TextInput
          id="search"
          name="search"
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value);
          }}
          sizing={"sm"}
          className="mr-2"
          placeholder="Search country"
          rightIcon={HiSearch}
        />
      </div>
    </form>
  );
};

export default SearchField;
