// app/page.tsx
import ChartComponent from "../../components/ChartComponent";

export default function Home() {
  return (
    <div className="container">
      <h1>Total Gold Wins by Country</h1>
      <ChartComponent />
    </div>
  );
}
