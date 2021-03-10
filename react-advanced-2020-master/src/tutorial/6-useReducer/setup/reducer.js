// reducer function

export const reducer = (state, action) => {
  if (action.type === "ADD") {
    const newPeople = [...state.people, action.payLoad];

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Person Added",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  if (action.type == "REMOVE") {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payLoad.id;
    });

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Person Removed",
    };
  }

  throw new Error("no matching action type");
};

export default reducer;
