const facts = document.querySelector('#facts');
const favFacts = document.querySelector('#fav-facts');

const getNumFacts = axios.get('http://numbersapi.com/2,5,10?json');
const getNumArr = [getNumFact(), getNumFact(), getNumFact(), getNumFact()]

function getNumFact() {
  return new Promise((resolve, reject) => {
    const data = axios.get('http://numbersapi.com/2?json');
    resolve(data);
  });
}

getNumFact()
  .then(res => console.log(res.data.text))
  .catch(err => console.log(err))

getNumFacts
  .then(res => {
    for (fact of Object.values(res.data)) {
      let li = document.createElement("li");
      li.textContent = fact;
      facts.append(li);
    }
  })
  .catch(err => console.log(err))

Promise.all(getNumArr)
  .then(res => {
    for (fact of res) {
      let li = document.createElement("li");
      li.textContent = fact.data.text;
      favFacts.append(li);
    }
  })
  .catch(err => console.log(err))