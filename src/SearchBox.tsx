import { ChangeEvent } from 'react';

type searchBoxProps = {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchfield: string;
};

const SearchBox = ({ searchChange, searchfield }: searchBoxProps) => {
  return (
    <div className="pa2">
      <input
        onChange={searchChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        value={searchfield}
        placeholder="Search robots"
      />
      ;
    </div>
  );
};

export default SearchBox;
