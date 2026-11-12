
import './EGarden.css';

import bonsai from '../assets/plants/bonsai.jpg';
import chili from '../assets/plants/chili.jpg';
import peaceLily from '../assets/plants/peacelily.jpg';
import snakePlant from '../assets/plants/snakeplant.jpg';
import spiderPlant from '../assets/plants/spiderplant.jpg';
import zzPlant from '../assets/plants/zzplant.jpg';

const plants = [
  { id: 1, name: 'Chili', image: chili, health: 'Healthy' },
  { id: 2, name: 'Bonsai', image: bonsai, health: 'Healthy' },
  { id: 3, name: 'Snake Plant', image: snakePlant, health: 'Healthy' },
  { id: 4, name: 'Spider Plant', image: spiderPlant, health: 'Needs Care' },
  { id: 5, name: 'Peace Lily', image: peaceLily, health: 'Healthy' },
  { id: 6, name: 'ZZ Plant', image: zzPlant, health: 'Healthy' },
];

export default function EGarden() {
  return (
    <div className="egarden-page">

      <main className="egarden-container">

        {/* Page heading */}
        <header className="egarden-header">
          <div>
            <h1>My E-Garden</h1>
            <p>The roots know what the mind forgets.</p>
          </div>

          <button className="garden-menu" aria-label="Garden menu">
            ☰
          </button>
        </header>

        {/* Plant collection */}
        <section className="egarden-content">

          <div className="plant-grid">

            {plants.map((plant) => (
              <article className="plant-card" key={plant.id}>

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

          {/* Add New Plant button */}
          <button className="add-plant-button">
            + Add New Plant
          </button>

        </section>

      </main>

      {/* Bottom navigation */}
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
