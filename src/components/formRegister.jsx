import React from 'react'

const [userInfo, setUserInfo] = useState({
    name: "",
    autor: "",
    cantidad: "",
  });

function FrmRegisterBook() {

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
      };
     
      return (
        <form>
          <label htmlFor="name">Nombre Libro</label>
          <input
            name="name"
            type="text"
            value={userInfo.name}
            onChange={handleChange}
          />
     
          <label htmlFor="autor">Autor</label>
          <input
            name="autor"
            type="text"
            value={userInfo.autor}
            onChange={handleChange}
          />
     
          <label htmlFor="cantidad">Cantidad</label>
          <input
            name="cantidad"
            type="number"
            value={userInfo.cantidad}
            onChange={handleChange}
          />
     
          <input type="submit" />
        </form>
      );
     
}

