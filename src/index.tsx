/* @refresh reload */
import App from './app';
import './index.css';
import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';

/**
 * This is the bootstrapping function that starts the App
 */
function bootstrap() {
  return render(
    () => (
      <Router>
        <App />
      </Router>
    ),
    document.getElementById('root'),
  );
}

bootstrap();
