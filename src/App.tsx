import { RecoilRoot } from 'recoil';
import { MessageWindowComponent } from './messagewindow/MessageWindow';
import { QueryClient, QueryClientProvider } from 'react-query';

import Router from './routes/router';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router />
        <MessageWindowComponent />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
