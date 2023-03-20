import React, {useState} from "react";
import Country from "../components/country";

function CountryContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickBtn = () => setIsOpen(!isOpen);

  const options = ["English", "French"];

  const [selectedOption, setSelectedOption] = useState(null);
  
  const optionBtn = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <Country>
      <Country.Header onClick={onClickBtn}>
        {selectedOption || "English"}
      </Country.Header>

      {isOpen && (
        <Country.List>
          {options.map((option) => (
            <Country.ListItem
              onClick={optionBtn(option)}
              key={option.id}
            >
              {option}
            </Country.ListItem>
          ))}
        </Country.List>
      )}
    </Country>
  );
}

export default CountryContainer;
