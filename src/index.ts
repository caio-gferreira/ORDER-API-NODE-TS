import AppManager from './app/App';

const app = new AppManager().express;

app.listen(3000, () => {
  console.log('Server is running in port :: 3000');
  console.log('http://localhost:3000');
});
