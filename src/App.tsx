import { RecoilRoot } from 'recoil';
import {
  MessageWindow,
  MessageWindowManagerComponent,
} from './messagewindow/MessageWindow';
import Router from './routes/router';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <Router />
      <MessageWindowManagerComponent />
      <MessageWindow.AlertWindow />
      <MessageWindow.ConfirmWindow />
    </RecoilRoot>
  );
}

export default App;
