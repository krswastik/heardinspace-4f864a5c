HeardInSpace - Project README

1. Project Overview
HeardInSpace is a space-themed interactive web platform that blends storytelling, education, and gamification to make space exploration both exciting and accessible. It features:
- Space Waves (Daily fictional transmissions blending real space history with sci-fi).
- Space Arcade (Mini-games teaching space missions through interactive gameplay).
Designed to appeal especially to Gen Z, HeardInSpace is immersive, retro-themed and 3D-infused.
2. Tech Stack
Frontend:
- React.js, Tailwind CSS, Framer Motion, react-three-fiber

Backend:
- Node.js, Express.js, MongoDB (Mongoose), REST APIs

Other Tools:
- Netlify(Frontend Hosting), MongoDB Atlas, GitHub, Figma, Unsplash, NASA APIs, Freesound.org
3. Folder Structure

HeardInSpace/
├── client/ (React Frontend)
│   ├── components/, pages/, assets/, utils/
├── server/ (Backend API)
│   ├── models/, routes/, controllers/, middleware/
├── db/ (Sample data)
├── .env, README.md, package.json
4. API Endpoints

-GET /api/transmissions         - Fetch all transmissions
-GET /api/transmissions/:date   - Get transmission by date
-GET /api/games                 - Get all mini-games
-GET /api/games/:id             - Get game detail
-POST /api/contact              - Submit feedback/contact form
5. Features

- Retro radio-style UI and waveform audio player
- 3D effects via react-three-fiber for planetary visuals
- Browser-based arcade with factual mini-games
- Daily space transmissions with transcript & trivia
- Fully responsive and mobile-friendly layout
- Immersive Gen Z-friendly UI with parallax and smooth transitions
6. Development Roadmap

Day 1-3: Setup, design system, core layout build (Hero, Arcade, Transmissions)
Day 4: Animation & audio integration, responsiveness
Day 5-7: Games and interactivity, mobile optimization
Day 8-9: Final polish, deployment, documentation
7. Deployment
 

- Frontend deployed using Netlify (https://vercel.com)
"
- Backend using Render / Railway
"
- MongoDB hosted via Atlas
"
- GitHub for version control and collaboration
8. Credits & Acknowledgements

- NASA Image & Video Library
- Unsplash Space Pack
- Freesound.org (audio fx)
- Google Fonts (Orbitron, Space Grotesk)
- Figma for UI mockups
