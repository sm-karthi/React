import logo from './logo.svg';
import './index.css';
import PriceCard from './PriceCard';

function App() {

  let data = [
    {
      planName: "Free",
      price: 0,
      features: [
        { name: "10 Projects" },
        { name: "50 GB Storage" },
        { name: "Priority Support" },
        { name: "Unlimited Users" }
      ],
      buttonHighLight: false
    },
    {
      planName: "Pro",
      price: 29,
      features: [
        { name: "50 Projects" },
        { name: "500 GB Storage" },
        { name: "Email Support" },
        { name: "Unlimited Users" }
      ],
      buttonHighLight:true
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
