import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(<App />);

const picturebox = document.querySelector('#picturebox');
const picture = document.querySelector('#picture');

if (picture && picturebox) {
  // Moving Animation Event
  picturebox.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    picture.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.1)`;
  });

  //Animate In
  picturebox.addEventListener('mouseenter', (e) => {
    picture.style.transition = 'none';
  });

  //Animate Out
  picturebox.addEventListener('mouseleave', (e) => {
    picture.style.transition = 'all 0.5s ease';
    picture.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
  picture.addEventListener('mouseover', (e) => {
    picture.style.transform = `scale(1.1)`;
  });
}

const breadcrumbs = document.querySelectorAll('.breadcrumb').length;
const navbar = document.getElementById('navbar');

if (breadcrumbs && navbar) {
  if (breadcrumbs > 0) {
    navbar.style.display = 'none';
  }
}
