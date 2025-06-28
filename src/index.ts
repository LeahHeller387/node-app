import { connectToMongo } from './config/mongo.connection';
import app from './app';

const PORT = process.env.PORT || 3000;

connectToMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});
