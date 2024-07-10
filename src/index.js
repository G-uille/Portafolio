import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Importar CSS
//INICIO CSS
import './assets/css/App.css';

import './assets/css/inicio.css';

// COMPONENTES LOCALES CSS
import './assets/css/local/description.css';
import './assets/css/local/userImage.css';
import './assets/css/local/socialNetworksLink.css';
import './assets/css/local/btnSocialNetwork.css';
import './assets/css/local/workExperience.css';
import './assets/css/local/job.css';
import './assets/css/local/projects.css';
import './assets/css/local/project.css';
import './assets/css/local/flyersCarousel.css';
import './assets/css/local/userAvatar.css';

// css Responsive
import './assets/css/responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

