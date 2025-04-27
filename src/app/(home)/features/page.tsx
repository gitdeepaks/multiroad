export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Advanced Analytics</h2>
          <p className="text-gray-600">
            Get detailed insights into your business performance with our
            advanced analytics tools.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Secure Infrastructure</h2>
          <p className="text-gray-600">
            Enterprise-grade security with end-to-end encryption and regular
            security updates.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">24/7 Support</h2>
          <p className="text-gray-600">
            Round-the-clock customer support to help you with any issues or
            questions.
          </p>
        </div>
      </div>
    </div>
  );
}
