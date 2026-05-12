import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import Card from '../components/shared/Card';
import { useState } from 'react';

export default function ComponentsDemo() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Component Library</h1>

      {/* Buttons */}
      <Card title="Buttons">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
        <div className="mt-4">
          <Button loading>Loading</Button>
          <Button disabled className="ml-4">Disabled</Button>
        </div>
      </Card>

      {/* Inputs */}
      <Card title="Inputs">
        <Input
          label="Normal Input"
          name="normal"
          placeholder="Type something..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <Input
          label="Required Input"
          name="required"
          placeholder="Required field"
          required
        />
        <Input
          label="Error Input"
          name="error"
          error="This field is required"
        />
      </Card>
    </div>
  );
}