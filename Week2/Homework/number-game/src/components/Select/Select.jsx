import chevronDown from "../../assets/chevron-down.svg";
import * as S from "./Select.styles";

function Select({ value, onChange, options, ariaLabel }) {
  return (
    <S.Wrapper>
      <S.StyledSelect
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={ariaLabel}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </S.StyledSelect>
      <S.Chevron src={chevronDown} alt="" />
    </S.Wrapper>
  );
}

export default Select;
