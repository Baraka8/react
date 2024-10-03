import MyImage from './me.jpeg';

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={MyImage} alt="Baraka Thierry" />
      <h2 className="card-name">Baraka Thierry</h2>
      <p className="card-p">I'm a beginner in React</p>
    </div>
  );
}

export default Card;
