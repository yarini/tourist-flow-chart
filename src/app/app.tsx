import { TouristFlowChart } from '../widgets/tourist-flow-chart';
import { selectSelectedYear, toggleSelectedYear, useAppDispatch, useAppSelector } from './store';

function App() {
  const selectedYear = useAppSelector(selectSelectedYear);
  const dispatch = useAppDispatch();

  return (
    <section>
      <h1>Динамика туристского потока</h1>
      <TouristFlowChart selectedYear={selectedYear} onYearSelect={(year) => dispatch(toggleSelectedYear(year))} />
    </section>
  );
}

export default App;
