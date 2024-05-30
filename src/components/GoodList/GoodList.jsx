import { GoodCard } from '../GoodCard';

export const GoodList = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <GoodCard good={good} />
      ))}
    </ul>
  );
};
