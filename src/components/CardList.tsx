import { Robot } from '../lib/types';
import Card from './Card';

const CardList = ({ robots }: { robots: Robot[] }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card
          id={robot.id}
          name={robot.name}
          email={robot.email}
          key={robot.id}
        />
      ))}
    </div>
  );
};

export default CardList;
