import './stylesheets/Tarjeta.css'

function Tarjeta({ url, id, texto }) {
  return (
    <div className="tarjeta">
      <img 
        src={url} 
        alt={`Tarjeta usuario ${id}`}
      />
      <div className="info">
        <h2>{`User ${id}`}</h2>
        <p>
          {texto[0]} <strong>{texto[1]}</strong> {texto[2]}
        </p>
      </div>
    </div>
  );
}

export default Tarjeta;