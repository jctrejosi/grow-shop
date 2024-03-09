import type { ExpampleComponentT } from './types';

export const Example = ({ handleClick, textExample }: ExpampleComponentT) => {
  return (
    <div>
      <p>{textExample}</p>
      <button
        onClick={handleClick}
        accessKey=""
        about=""
        aria-activedescendant=""
      >
        Example button
      </button>
    </div>
  );
};
