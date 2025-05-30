function PriceCard({ data }) {
    return (
        <div className="flex items-center h-screen">


            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6 text-center">
                    <h2 className="text-2xl font-semibold mb-4">{data.planName}</h2>
                    <p className="text-gray-600 mb-6">Perfect for professionals and small teams.</p>
                    <p className="text-4xl font-bold mb-6">${data.price}<span className="text-lg font-normal">/month</span></p>

                    <ul className="mb-6 space-y-3 text-left text-gray-700">

                        {
                            data.features.map((item) => (
                                <li>{item.name}</li>
                            ))
                        }

                    </ul>

                    <button className={`w-full ${data.buttonHighLight ? 'bg-blue-600 text-white':'border border-blue-600 text-blue-600'}  py-3 rounded-md hover:bg-blue-700 hover:text-white transition`}>
                        Get Started
                    </button>
                </div>
            </div>

        </div>
    );
}

export default PriceCard;
