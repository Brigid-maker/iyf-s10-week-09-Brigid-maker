import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

export default function About() {
  const team = [
    { name: 'Alice Johnson', role: 'Frontend Developer', avatar: 'A' },
    { name: 'Bob Smith', role: 'Backend Developer', avatar: 'B' },
    { name: 'Carol White', role: 'UI/UX Designer', avatar: 'C' },
  ];

  const features = [
    { icon: '📝', title: 'Share Posts', desc: 'Write and share your thoughts with the community.' },
    { icon: '❤️', title: 'Like Posts', desc: 'Show appreciation for content you enjoy.' },
    { icon: '💬', title: 'Comments', desc: 'Engage in meaningful discussions.' },
    { icon: '🔍', title: 'Search', desc: 'Find posts and users easily.' },
  ];

  return (
    <div className="space-y-12">

      {/* Hero */}
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About CommunityHub</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          CommunityHub is a platform built for people to connect, share ideas and grow together.
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className="flex items-start gap-4">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {member.avatar}
              </div>
              <h3 className="font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-blue-600 rounded-lg shadow-md p-12">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Join?</h2>
        <p className="text-blue-100 mb-8">
          Start sharing your thoughts with the community today.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/create">
            <Button size="large" variant="secondary">Create a Post</Button>
          </Link>
          <Link to="/posts">
            <Button size="large" variant="ghost">Browse Posts</Button>
          </Link>
        </div>
      </div>

    </div>
  );
}