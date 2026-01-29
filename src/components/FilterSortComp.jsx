import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const FilterSortComp = (props) => {
  const { listOfOptions, label, handleChange, value } = props;
  const labelId = `${label.replace(/\s+/g, "-")}-label`;
  const selectId = `${label.replace(/\s+/g, "-")}-select`;

  return (
    <div className="collection-sort">
      <FormControl fullWidth>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          id={selectId}
          value={value}
          label={label}
          onChange={(e) => handleChange(e.target.value)}
        >
          {listOfOptions.map((opt) => (
            <MenuItem key={opt} value={opt}>{opt}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

