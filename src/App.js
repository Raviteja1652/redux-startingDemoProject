import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
function App() {
  const login = useSelector(state => state.auth.isAuth);
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <>
    <Header />
    {!isAuth && <Auth />}
    <Counter />
    </>
  );
}

export default App;
