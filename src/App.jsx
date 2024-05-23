import { useState } from "react";
import { Button } from "./assets/components/Button"
import { Card } from "./assets/components/Card"


function App() {

  const [filter, setFilter] = useState('Todos');
  const buttonLabels = ['Apartamento', 'Casa', 'Comercial', 'Oficina'];

  return (
    <>
      <div className='conntainer'>
        <h1 className="title">Propiedades</h1>
        <p>Invierte en Finca Raíz en cualquier ciudad de Colombia!</p>
        {buttonLabels.map(label => (
          <Button
            key={label}
            label={label}
            estilo="button1"
            isActive={filter === label}
            onClick={() => setFilter(label)}
          />
        ))}
      </div>
      <div className="buttoon">
      </div>
      <Card filter={filter} />
    </>
  )

}

export default App
