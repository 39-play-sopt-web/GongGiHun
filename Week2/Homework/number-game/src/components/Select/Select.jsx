import chevronDown from "../../assets/chevron-down.svg";
import { Wrapper, StyledSelect, Chevron } from "./Select.styles";

function Select({ value, onChange, options }) {
  return (
    <Wrapper>
      <StyledSelect
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </StyledSelect>
      <Chevron src={chevronDown} alt="" />
    </Wrapper>
  );
}

export default Select;
