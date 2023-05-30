import { render } from 'preact';
import { Popup } from './Popup';
import GlobalStyles from '../styles/GlobalStyles';

render(
  <>
    <GlobalStyles />
    <Popup />
  </>,
  document.getElementById('app') as HTMLElement,
);
