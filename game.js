export const LOCATIONS = [
  "Airplane",
  "Aquarium",
  "Bank",
  "Beach",
  "Carnival",
  "Casino",
  "Circus Tent",
  "Corporate Party",
  "Battlefield",
  "Hair Dresser",
  "Embassy",
  "Hospital",
  "Hotel",
  "Military Base",
  "Cinema",
  "Nightclub",
  "Cruise Ship",
  "Passenger Train",
  "Pirate Ship",
  "Antarctica",
  "Police Station",
  "Restaurant",
  "School",
  "Petrol Station",
  "Space Station",
  "Submarine",
  "Supermarket",
  "Theater",
  "University",
  "Zoo",
];

export function createGame(players) {
  if (players.length === 0) {
    throw new Error("Cannot create game with zero players");
  }

  const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
  const spy = players[Math.floor(Math.random() * players.length)];
  const firstQuestioner = players[Math.floor(Math.random() * players.length)];

  return {
    location,
    spyId: spy.id,
    phase: "asking",
    currentQuestionerId: firstQuestioner.id,
    currentAnswererId: null,
    previousQuestionerId: null,
    beliefUpdate: null,
    beliefUpdates: [],
    accuserIds: [],
    accusation: null,
    accusations: [],
    finalAccusation: null,
    result: null,
    roundEndsAt: null,
    startedAt: new Date().toISOString()
  };
}