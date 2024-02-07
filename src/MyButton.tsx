import React, { useEffect, useState } from 'react';
import { addition } from './addition';

export default function MyButton({ onClick }: { onClick: Function }) {
  const [s, setValue] = useState(0);
  useEffect(() => {
    addition().then(x => setValue(x))
  }, [])
  return (
    <div>
      <button onClick={() => onClick()}>{s}</button>
    </div>
  );
}