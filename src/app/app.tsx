import { TouristFlowChart } from '../widgets/tourist-flow-chart';
import {
  selectSelectedCategory,
  selectSelectedYear,
  setSelectedCategory,
  toggleSelectedYear,
  useAppDispatch,
  useAppSelector,
} from './store';

function App() {
  const selectedYear = useAppSelector(selectSelectedYear);
  const selectedCategory = useAppSelector(selectSelectedCategory);
  const dispatch = useAppDispatch();

  return (
    <section>
      <h1>Динамика туристского потока</h1>
      <TouristFlowChart
        selectedYear={selectedYear}
        selectedCategory={selectedCategory}
        onYearSelect={(year) => dispatch(toggleSelectedYear(year))}
        onCategoryChange={(category) => dispatch(setSelectedCategory(category))}
      />
    </section>
  );
}

export default App;
