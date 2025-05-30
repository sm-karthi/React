import logo from './logo.svg';
import './index.css';
import PriceCard from './PriceCard';

function App() {

  let data = [
    {
      planName: "Free",
      price: 0
    },
    {
      planName: "Pro",
      price: 29
    }
  ];

  return (
    
    <div className="flex gap-4 p-6">
      {data.map((plan) => (
        <PriceCard data={plan}></PriceCard>
      ))}
    </div>
  );
}

export default App;
