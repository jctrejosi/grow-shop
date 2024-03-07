import type { ExpampleComponentT } from './types';

export const Example = ({
    handleClick,
    textExample
}:ExpampleComponentT) => {
    return (
        <div>
            <p>{textExample}</p>
            <button onClick={handleClick}>Example button</button>
        </div>
    )
}