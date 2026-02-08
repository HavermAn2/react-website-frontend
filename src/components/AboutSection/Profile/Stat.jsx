import stats from "./Stats.module.css";
export default function Stat({ val, label }) {
  return (
    <li className={stats.stat}>
      <div className={stats.value}>{val}</div>
      <div className={stats.label}>{label}</div>
    </li>
  );
}
