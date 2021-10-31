import React from "react";

interface AddCryptoInputProps {
  onSubmit: (value: string) => void;
}

export const AddCryptoInput = ({ onSubmit }: AddCryptoInputProps) => {
  const [value, setValue] = React.useState<string>("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label
        htmlFor="crypto"
        className="block text-sm font-medium text-gray-700"
      >
        Add Crypto
      </label>
      <div className="mt-1 mb-4 relative rounded-md shadow-sm">
        <input
          type="text"
          name="crypto"
          id="price"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter Crypto..."
          value={value}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
};
