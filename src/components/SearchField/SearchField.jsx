/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function SearchField({ setSearchNameCity, localization, lang }) {
  const savedCards = JSON.parse(localStorage.getItem("savedCards"));
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        onChange={(event, value) => {
          setSearchNameCity(value);
        }}
        id="free-solo-2-demo"
        disableClearable
        options={savedCards.map((option) => option.name)}
        onInputChange={(event) => {
          setSearchNameCity(event.target.value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={localization[lang].placeholder}
            margin="none"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
}