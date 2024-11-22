import Card from './Card';
import { Robot } from './lib/types';

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
