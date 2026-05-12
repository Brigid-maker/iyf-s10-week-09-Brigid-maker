import Tabs from '../components/shared/Tabs';
import Card from '../components/shared/Card';

export default function TabsDemo() {
  const tabs = [
    {
      label: '🏠 Home',
      content: (
        <Card title="Home Tab">
          <p>Welcome to the Home tab! This is the first tab content.</p>
        </Card>
      )
    },
    {
      label: '👤 Profile',
      content: (
        <Card title="Profile Tab">
          <div className="space-y-2">
            <p><span className="font-semibold">Name:</span> Brigid</p>
            <p><span className="font-semibold">Role:</span> Developer</p>
            <p><span className="font-semibold">Location:</span> Nairobi</p>
          </div>
        </Card>
      )
    },
    {
      label: '⚙️ Settings',
      content: (
        <Card title="Settings Tab">
          <p>Manage your settings here.</p>
        </Card>
      )
    },
    {
      label: '📊 Stats',
      content: (
        <Card title="Stats Tab">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-3xl font-bold text-blue-600">12</p>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-3xl font-bold text-green-600">48</p>
              <p className="text-gray-500 text-sm">Tasks Done</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-3xl font-bold text-purple-600">5</p>
              <p className="text-gray-500 text-sm">Awards</p>
            </div>
          </div>
        </Card>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Tabs Component</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}