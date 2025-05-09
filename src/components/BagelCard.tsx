export default function BagelCard({
  image,
  name,
  description,
  price,
}: {
  image: string;
  name: string;
  description: string;
  price: number;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span className="font-bold text-yellow-600">${price.toFixed(2)}</span>
        </div>
        {description && (
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        )}
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300 w-full">
          Add to Order
        </button>
      </div>
    </div>
  );
}
