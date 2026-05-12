import useToggle from '../hooks/useToggle';

export default function ModalTest() {
  const [isOpen, { toggle, setFalse }] = useToggle(false);

  return (
    <div>
      <h1>Modal Test</h1>
      <button onClick={toggle}>Open Modal</button>

      {isOpen && (
        <div style={{
          position: 'fixed', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white', padding: 32,
          border: '1px solid #ccc', borderRadius: 8,
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}>
          <h2>Hello from Modal!</h2>
          <p>This modal is controlled by useToggle.</p>
          <button onClick={setFalse}>Close</button>
        </div>
      )}
    </div>
  );
}