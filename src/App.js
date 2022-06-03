
import DropdownMenu from "./components/DropdownMenu";
import useFilter from "./hooks/useFilter";
import {TYPE_OPTIONS} from './constants'
import styles from './App.module.scss'


function App() {

    const [filter, handleFilterChange] = useFilter({ types: [] });

  return (
    <div className={styles.App}>
        <h1>Dropdown Menu Component MUI</h1>
        <div className={styles.DropdownContainer}>
            <DropdownMenu
                placeHolder="Types"
                name="types"
                items={TYPE_OPTIONS }
                selectedItems={filter.types}
                onChange={handleFilterChange}/>
        </div>
        </div>

  );
}

export default App;
