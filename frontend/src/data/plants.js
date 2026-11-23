
import bonsai from '../assets/plants/bonsai.jpg';
import chili from '../assets/plants/chili.jpg';
import peaceLily from '../assets/plants/peacelily.jpg';
import snakePlant from '../assets/plants/snakeplant.jpg';
import spiderPlant from '../assets/plants/spiderplant.jpg';
import zzPlant from '../assets/plants/zzplant.jpg';

export const plants = [
  {
    id: 1,
    name: 'Chili',
    image: chili,
    health: 'Healthy',
    species: 'Capsicum annuum',
    care: [
      'Light: Needs plenty of direct sunlight.',
      'Watering: Water when the topsoil feels dry.',
      'Soil: Use well-draining, fertile soil.',
      'Humidity: Prefers moderate humidity.'
    ]
  },
  {
    id: 2,
    name: 'Bonsai',
    image: bonsai,
    health: 'Healthy',
    species: 'Bonsai tree',
    care: [
      'Light: Provide suitable light for its species.',
      'Watering: Check soil moisture regularly.',
      'Soil: Use a well-draining bonsai soil mix.',
      'Pruning: Trim regularly to maintain its shape.'
    ]
  },
  {
    id: 3,
    name: 'Snake Plant',
    image: snakePlant,
    health: 'Healthy',
    species: 'Dracaena trifasciata',
    care: [
      'Light: Tolerates low to bright indirect light.',
      'Watering: Allow soil to dry between watering.',
      'Soil: Use a well-draining potting mix.',
      'Humidity: Tolerates normal indoor humidity.'
    ]
  },
  {
    id: 4,
    name: 'Spider Plant',
    image: spiderPlant,
    health: 'Needs Care',
    species: 'Chlorophytum comosum',
    care: [
      'Light: Bright, indirect sunlight. Avoid harsh direct sun.',
      'Watering: Water every 7–10 days when the top soil feels dry.',
      'Soil: Use a well-draining potting mix.',
      'Humidity: Prefers moderate to high humidity.'
    ]
  },
  {
    id: 5,
    name: 'Peace Lily',
    image: peaceLily,
    health: 'Healthy',
    species: 'Spathiphyllum',
    care: [
      'Light: Prefers bright, indirect light.',
      'Watering: Keep soil lightly moist, not waterlogged.',
      'Soil: Use a well-draining potting mix.',
      'Humidity: Prefers higher humidity.'
    ]
  },
  {
    id: 6,
    name: 'ZZ Plant',
    image: zzPlant,
    health: 'Healthy',
    species: 'Zamioculcas zamiifolia',
    care: [
      'Light: Tolerates low to bright indirect light.',
      'Watering: Allow soil to dry before watering again.',
      'Soil: Use a well-draining potting mix.',
      'Humidity: Tolerates average indoor humidity.'
    ]
  }
];
