import { useEffect, useState } from 'react';
import axios from 'axios';

const host = 'localhost';
const port = '7101';

function App() {
  const [hello, setHello] = useState('');
  const [times, setTimes] = useState(0);

  useEffect(() => {
    axios.get(`http://${host}:${port}`)
      .then(res => setHello(res.data))
      .catch(err => setHello(err.message));
  }, []);

  useEffect(() => {
    axios.get(`http://${host}:${port}/visit`)
      .then(res => setTimes(res.data))
      .catch(err => setTimes(err.message));
  }, []);

  return (
    <>
      <div>{hello || 'Backend disconnected'}</div>
      <div>This website has been visited <b>{times || 'DB disconnected'}</b> times</div>
    </>
  );
}

export default App;
