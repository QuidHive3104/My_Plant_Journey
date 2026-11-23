
import { useNavigate, useParams } from 'react-router-dom';
import { plants } from '../data/plants';
import './GardenPlantDetails.css';

export default function GardenPlantDetails() {
  const { plantId } = useParams();
  const navigate = useNavigate();

  const plant = plants.find(
    (item) => item.id === Number(plantId)
  );

  if (!plant) {
    return (
      <div className="details-page">
        <h2>Plant not found</h2>
        <button onClick={() => navigate('/e-garden')}>
          Back to E-Garden
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">

      <main className="details-container">

        <p className="details-label">Garden plant details</p>

        <header className="details-header">
          <h1>My E-Garden</h1>
          <p>"It thrives on what I leave behind in the dark."</p>
        </header>

        <section className="plant-information">

          <div className="plant-photo-section">
            <img
              src={plant.image}
              alt={plant.name}
              className="details-plant-image"
            />
            <h2>{plant.name}</h2>
          </div>

          <div className="plant-care-section">
            <h3>Species Field:</h3>
            <p className="species-name">{plant.species}</p>

            <h3>Specific Needs Section:</h3>

            <ul>
              {plant.care.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </section>

        <section className="plant-history">

          <h2>History</h2>

          <div className="history-content">
            <h3>Logtime:</h3>

            <ul>
              <li>Adopted: Not recorded</li>
              <li>Last Watered: Not recorded</li>
              <li>Last Fertilized: Not recorded</li>
              <li>
                Health Status: {plant.health}
              </li>
            </ul>
          </div>

        </section>

      </main>

      <nav className="bottom-navigation">
        <button
          aria-label="Home"
          onClick={() => navigate('/e-garden')}
        >
          ⌂
        </button>
        <button aria-label="Search">⌕</button>
        <button className="camera-button" aria-label="Camera">◎</button>
        <button aria-label="Care Log">◷</button>
        <button aria-label="Profile">♙</button>
      </nav>

    </div>
  );
}
