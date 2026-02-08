import Stat from "./Stat";
import stats from "./Stats.module.css";
export default function Stats() {
  return (
    <ul className={stats.stats}>
      <Stat val={"44K+"} label={"Followers"} />
      <Stat val={"100+"} label={"Performances"} />
      <Stat val={"13+"} label={"Years Experience"} />
    </ul>
  );
}
