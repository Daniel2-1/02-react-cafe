import type { VoteType } from "../../types/Votes";
import css from './VoteOptions.module.css'

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <>
      <button className={css.button} onClick={()=>onVote("good")}>Good</button>
      <button className={css.button} onClick={()=>onVote("neutral")}>Neutral</button>
      <button className={css.button} onClick={()=>onVote("bad")}>Bad</button>
      {canReset && <button className={css.reset} onClick={onReset}>Reset</button>}
    </>
  );
}
