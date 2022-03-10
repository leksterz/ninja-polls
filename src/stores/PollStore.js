import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Burger or Taco?",
    answerA: "Burger",
    answerB: "Taco",
    votesA: 9,
    votesB: 15,
  },
]);

export default PollStore;
