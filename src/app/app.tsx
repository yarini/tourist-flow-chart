import { TouristFlowChart } from '../widgets/tourist-flow-chart';
import styles from './app.module.css';
import {
  selectIsChildMode,
  selectSelectedCategory,
  selectSelectedYear,
  setSelectedCategory,
  toggleChildMode,
  toggleSelectedYear,
  useAppDispatch,
  useAppSelector,
} from './store';

function App() {
  const selectedYear = useAppSelector(selectSelectedYear);
  const selectedCategory = useAppSelector(selectSelectedCategory);
  const isChildMode = useAppSelector(selectIsChildMode);
  const dispatch = useAppDispatch();

  return (
    <main className={styles.page}>
      <TouristFlowChart
        selectedYear={selectedYear}
        selectedCategory={selectedCategory}
        isChildMode={isChildMode}
        onYearSelect={(year) => dispatch(toggleSelectedYear(year))}
        onCategoryChange={(category) => dispatch(setSelectedCategory(category))}
        onChildModeToggle={() => dispatch(toggleChildMode())}
      />
    </main>
  );
}

export default App;
