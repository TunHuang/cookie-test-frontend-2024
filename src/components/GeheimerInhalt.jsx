import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const GeheimerInhalt = ({setEingeloggt}) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchWithCookie = async () => {
      try {
        const url = import.meta.env.VITE_SERVER ?? 'http://localhost:4000';
        const res = await fetch(url + '/secret', {credentials: 'include'});
        if (!res.ok) {
          setEingeloggt(false);
        } else {
          setEingeloggt(true);
          const data = await res.json();
          console.log(data);
          setMessage(data.message);
        }
      } catch (err) {
        console.log(err)
        setEingeloggt(false)
      }
    }
    fetchWithCookie();
  })
  const logoutHandler = async (event) => {
    try {
      event.preventDefault();
      const url = import.meta.env.VITE_SERVER ?? 'http://localhost:4000';
      const res = await fetch(url + '/logout', {
        credentials: 'include',
        method: 'POST'
      });
      if (res.ok) {
        setEingeloggt(false);
      }

    } catch(err) {
      console.log(err);
    }
  }
  return (
    <>
      <p>
        {message}
      </p>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default GeheimerInhalt;