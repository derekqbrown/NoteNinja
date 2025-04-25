function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300">
      <h3 className="font-semibold text-xl mb-2 text-indigo-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;