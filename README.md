#  Video API
A simple REST API built with Node.js, Express, and MongoDB to manage video data.

#Installation
Clone the repository:
   ```bash
   git clone https://github.com/Code-With-Sakshi/video-api.git
   cd video-api
Install dependencies: npm install

Create a .env file in the root directory:

PORT=5000
MONGODB_URI=<MongoDB Atlas URI>

Run the server:

npm run dev
The server runs at http://localhost:5000

## API Endpoints with Sample Requests

GET /api/videos
Response:

{
  "success": true,
  "count": 2,
  "data": [...]
}

Add a Video

POST /api/videos
Request body:

{
  "title": "AI Podcast",
  "url": "https://youtube.com/ai-podcast",
  "description": "Discussion on AI trends"
}
Response:

{
  "success": true,
  "message": "Video added successfully"
}

Delete a Video

DELETE /api/videos/:id
