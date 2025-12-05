import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../assets/SearchIcon.svg";
import { useAutocomplete } from "@mui/base";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Listbox = styled("ul")(() => ({
  position: "absolute",
  top: "60px",
  width: "100%",
  maxHeight: "500px",
  overflowY: "auto",
  backgroundColor: "var(--color-black)",
  border: "1px solid var(--color-primary)",
  borderRadius: "0 0 10px 10px",
  zIndex: 10,
  listStyle: "none",
  padding: 0,
  margin: 0,
}));

function Search({ searchData, placeholder }) {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
  } = useAutocomplete({
    id: "search-autocomplete",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value?.slug) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper} {...getRootProps()}>
          <input
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
          <img src={searchIcon} alt="Search Icon" className={styles.icon} />
        </div>
      </form>

      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })} key={option.slug}>
              <p className={styles.albumTitle}>{option.title}</p>
            </li>
          ))}
        </Listbox>
      )}
    </div>
  );
}

export default Search;
