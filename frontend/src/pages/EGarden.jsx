
import { useNavigate } from 'react-router-dom';
import { plants } from '../data/plants';
import './EGarden.css';

export default function EGarden() {
  const navigate = useNavigate();

  return (
    <div className="egarden-page">
      <main className="egarden-container">

        <header className="egarden-header">
          <div>
            <h1>My E-Garden</h1>
            <p>“The roots know what we buried long before the flowers bloom.”</p>
          </div>

          <button className="garden-menu" aria-label="Garden menu">
            ☰
          </button>
        </header>

        <section className="egarden-content">
          <div className="plant-grid">
            {plants.map((plant) => (
              <article
                className="plant-card"
                key={plant.id}
                onClick={() => navigate(`/e-garden/${plant.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    navigate(`/e-garden/${plant.id}`);
                  }
                }}
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                <h3>{plant.name}</h3>

                <span
                  className={`health-badge ${
                    plant.health === 'Healthy' ? 'healthy' : 'needs-care'
                  }`}
                >
                  {plant.health}
                </span>
              </article>
            ))}
          </div>

          <button className="add-plant-button">
            + Add New Plant
          </button>
        </section>
      </main>

      <nav className="bottom-navigation">
        <button aria-label="Home">⌂</button>
        <button aria-label="Search">⌕</button>
        <button className="camera-button" aria-label="Camera">◎</button>
        <button aria-label="Care Log">◷</button>
        <button aria-label="Profile">♙</button>
      </nav>
    </div>
  );
}
