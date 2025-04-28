export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Basic</h2>
          <p className="text-4xl font-bold mb-4">
            $18.99<span className="text-lg">/mo</span>
          </p>
          <ul className="text-left space-y-2 mb-6">
            <li>✓ Basic Features</li>
            <li>✓ 5GB Storage</li>
            <li>✓ Email Support</li>
          </ul>
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            Get Started
          </button>
        </div>
        <div className="p-6 border rounded-lg text-center bg-black text-white">
          <h2 className="text-2xl font-semibold mb-4">Pro</h2>
          <p className="text-4xl font-bold mb-4">
            $28.99<span className="text-lg">/mo</span>
          </p>
          <ul className="text-left space-y-2 mb-6">
            <li>✓ All Basic Features</li>
            <li>✓ 20GB Storage</li>
            <li>✓ Priority Support</li>
          </ul>
          <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-100">
            Get Started
          </button>
        </div>
        <div className="p-6 border rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
          <p className="text-4xl font-bold mb-4">
            $58.99<span className="text-lg">/mo</span>
          </p>
          <ul className="text-left space-y-2 mb-6">
            <li>✓ All Pro Features</li>
            <li>✓ Unlimited Storage</li>
            <li>✓ 24/7 Support</li>
          </ul>
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
