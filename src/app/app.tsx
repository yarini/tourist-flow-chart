import { TouristFlowChart } from '../widgets/tourist-flow-chart';
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
    <section>
      <h1>Динамика туристского потока</h1>
      <TouristFlowChart
        selectedYear={selectedYear}
        selectedCategory={selectedCategory}
        isChildMode={isChildMode}
        onYearSelect={(year) => dispatch(toggleSelectedYear(year))}
        onCategoryChange={(category) => dispatch(setSelectedCategory(category))}
        onChildModeToggle={() => dispatch(toggleChildMode())}
      />
    </section>
  );
}

export default App;
