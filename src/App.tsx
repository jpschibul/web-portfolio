import './index.css';
import Homepage from './components/pages/Homepage';
import './util/i18n';
import {DarkModeProvider} from './util/DarkModeProvider';

function App() {
  // const [theme, setTheme] = useState<ThemeContextType>('dark');
  // console.log(theme);
  return (
    <DarkModeProvider>
      <div>
        <Homepage />
      </div>
    </DarkModeProvider>
  );
}

export default App;
