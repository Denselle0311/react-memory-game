// Fisher-Yates shuffle algorithm
const shuffleCards = (array) => {
    const newArray = [...array];
  
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }

    return newArray;
  };
  
  export function rand(len) {
    return Math.floor(Math.random() * len);
  }


  export default shuffleCards;