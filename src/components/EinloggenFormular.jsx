

// eslint-disable-next-line react/prop-types
const EinloggenFormular = ({setEingeloggt}) => {
  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const body = {
        userName: event.target.elements.userName.value,
        password: event.target.elements.password.value
      };
      const url = import.meta.env.VITE_SERVER ?? 'http://localhost:4000';
      const res = await fetch(url + '/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include'
      });
      if (!res.ok) {
        setEingeloggt(false);
      } else {
        const data = await res.json();
        console.log(data);
        setTimeout(() => {
          setEingeloggt(true);
        }, 3000);
      }
      
    } catch (err) {
      console.log(err);
      setEingeloggt(false)
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="userName">User Name: </label>
        <input type="text" name="userName" id="userName" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
      </div>
      <button>Einloggen</button>
    </form>
  );
};

export default EinloggenFormular;