import React from "react";
interface Props {
  name: string;
  isDisabled?: boolean;
  placeholder?: string;
}

const TextArea: React.FC<Props> = ({
  name,

  isDisabled = false,
  placeholder,
  ...props
}) => {
  return (
    <>
      <textarea
        className={`placeholder-gray-600 border-2 border-textGray w-full h-24 p-2 pr-9 shadow-sm rounded-md text-textLightBlack text-sm font-normal focus:outline-none focus:border-primaryGreen`}
        {...props}
        disabled={isDisabled}
        placeholder={placeholder}
        autoComplete="off"
      />
    </>
  );
};

export default TextArea;
