const randomFunction = () => Math.floor(Math.random() * 100);

let subscribers: ((number: number) => void)[] = [];

// 함수들을 배열에다 넣는것
const addSubscribers = (...callbackArray: ((number: number) => void)[]) => {
  callbackArray.forEach((callback) => subscribers.push(callback));
};

// 배열에있는 함수들을 하나씩 실행해줌.
const executeFunctions = () => {
  subscribers.forEach((callback) => {
    const number = Math.floor(Math.random() * 100);
    callback(number);
  });
};

function handlerMakeDug(number: number) {
  console.log(`🦢 ${number}`);
}

function handlerMakeDog(number: number) {
  console.log(`🐕 ${number}`);
}

function king() {
  addSubscribers(handlerMakeDog, handlerMakeDug);

  executeFunctions();
}

king();
