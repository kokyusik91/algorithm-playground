function solution(today, terms, privacies) {
  var answer = [];
  const termsObj = makeTermsObj(terms);
  const privaciesObj = [];

  privacies.forEach((privacie, index) => {
    privaciesObj.push({
      start: privacie.split(' ')[0],
      rules: termsObj[privacie.split(' ')[1]],
      end: calculateEndDate(
        privacie.split(' ')[0],
        termsObj[privacie.split(' ')[1]],
      ),
      number: index + 1,
    });
  });

  const filteredArray = privaciesObj.filter((item) =>
    compareDate(today, item.end),
  );

  filteredArray.forEach((item) => {
    answer.push(item.number);
  });

  return answer;
}

// term을 정제
function makeTermsObj(terms) {
  const termlObj = {};

  terms.forEach((term) => {
    let type = term.split(' ')[0];
    let num = term.split(' ')[1];
    termlObj[type] = num;
  });

  return termlObj;
}

// 끝나는 날짜 계산하는 함수
function calculateEndDate(dates, getmonth) {
  const [year, month, day] = dates.split('.').map((date) => parseInt(date));
  const monthToDays = 28 * getmonth;

  let newDay = day;
  let newMonth = month;
  let newYear = year;

  newDay = day + monthToDays;
  console.log('계산전', newDay);

  if (newDay >= 30) {
    newDay = newDay - 28 * getmonth - 1;
    newMonth = newMonth + 1 * getmonth;
  }

  if (newMonth >= 12) {
    newYear = newYear + 1;
    newMonth = newMonth - 13;
    newDay = newDay + 28;
  }

  const answer = `${newYear}.${newMonth < 10 ? '0' + newMonth : newMonth}.${
    newDay < 10 ? '0' + newDay : newDay
  }`;
  return answer;
}

// 폐기한 날짜이면 true return
function compareDate(today, endDay) {
  const [tYear, tMonth, tDay] = today.split('.').map((day) => parseInt(day));
  const [eYear, eMonth, eDay] = endDay.split('.').map((day) => parseInt(day));

  if (tYear > eYear) return true;
  if (tYear === eYear) {
    if (tMonth * 28 + tDay > eMonth * 28 + eDay) {
      return true;
    } else return false;
  }
  return false;
}

const today = '2022.05.19';

const terms = ['A 6', 'B 12', 'C 3'];

const privacies = [
  '2021.05.02 A',
  '2021.07.01 B',
  '2022.02.19 C',
  '2022.02.20 C',
];

console.log(solution(today, terms, privacies));
