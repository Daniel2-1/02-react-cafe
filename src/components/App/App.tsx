import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { useState } from "react";
import type {Votes, VoteType} from '../../types/votes.ts'
import VoteOptions from "../VoteOptions/VoteOptions";
import Notification from "../Notification/Notification";
import VoteStats from "../VoteStats/VoteStats";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
    

  function handleVote(type: VoteType) {
    setVotes((votes) => ({ ...votes, [type]: votes[type] + 1 }));
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;
  return (
    <div className={css.app}>
      <CafeInfo />
      <div className={css.buttons}>
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0}
        />
      </div>
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
