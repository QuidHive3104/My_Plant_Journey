# My Plant Journey - Database & API Documentation

## 1. Database Architecture
We are using Supabase (PostgreSQL) for our backend. We have designed 11 tables to handle user data, plant tracking, AI diagnoses, and community features. All tables are linked using Foreign Keys to ensure data integrity.

### Tables and Relationships:
1. **users**: Stores user credentials (`id`, `username`, `email`, `password`, `level`).
2. **plant_species**: Stores biological care data (`id`, `species_name`, `water_needs`, `light_needs`, `soil_type`, `fertilizer_needs`).
3. **plants**: Stores the user's personal plants. Linked to `users` and `plant_species`.
4. **care_logs**: Tracks watering and fertilizing actions. Linked to `plants`.
5. **reminders**: Tracks scheduled care tasks (e.g., water every 3 days). Linked to `plants`.
6. **diagnoses**: Stores the AI scan results (Dr. Plant). Linked to `plants`.
7. **community_posts**: Stores user posts for the community feed. Linked to `users`.
8. **comments**: Stores comments on posts. Linked to `community_posts` and `users`.
9. **post_likes**: Tracks who liked which post. Linked to `community_posts` and `users`.
10. **saved_posts**: Tracks bookmarked posts (bookmark icon). Linked to `community_posts` and `users`.
11. **articles**: Stores care guides and fun facts for the Discover page. Standalone table.

## 2. Entity Relationship Diagram (ERD)
*Note: The full ERD image is saved in the project documentation folder.*

Key Relationships:
- **One-to-Many**: A User has many Plants. (users.id -> plants.user_id)
- **One-to-Many**: A Plant has many Care Logs, Reminders, and Diagnoses.
- **Many-to-Many Bridge**: `post_likes` and `saved_posts` bridge the `users` and `community_posts` tables.

## 3. Security (Row Level Security - RLS)
RLS has been enabled for all tables. Policies have been set to allow the backend API and frontend client to read and write data securely using Supabase API keys. The Secret Key is used server-side to bypass RLS for admin actions.

## 4. API Endpoints (Planned)
- `POST /api/register` - Create new user
- `POST /api/login` - Authenticate user
- `GET /api/plants` - Fetch user's plants
- `POST /api/diagnoses` - Save AI scan result