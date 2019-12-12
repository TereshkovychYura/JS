// Написати функцію конструктор "Банківський рахунок" (Account), який містить:
// Номер рахунку
// Розмір коштів на рахунку
// Назва валюти рахунку (рублі, гривні, евро тощо), для позначення якої можна скористатись одним символом: R, G, E, $ тощо
// Забезпечити можливість:
// Відкривати рахунок та первинно вносити гроші на рахунок
// Знімати гроші з рахунку
// Докладати гроші на рахунок

function Account(acnumber, score, currency) {
  this.acnumber = acnumber;
  this.score = score;
  this.currency = currency;

  this.TakeMoney = function(taken_score) {
    this.score -= taken_score;
  };
  this.PutMoney = function(put_score) {
    this.score -= put_score;
  };
  this.ShowInfo = function() {
    console.log("Number of account =>", this.acnumber);
    console.log("Score of account =>", this.score, this.currency);
  };
}

let acnum = prompt("Enter number of account: ");

let scor = prompt("Enter youtr score: ");

let cur = prompt("Enter a currency: ");

let MyAccount = new Account(acnum, scor, cur);

while (true) {
  let chose = prompt(
    "Chose (1. Take money   2. Put Money  3.Show info   4.End session): "
  );
  if (chose == 4) {
    break;
  }
  switch (chose) {
    case "1":
      {
        let taken = prompt("Enter taken money: ");
        MyAccount.TakeMoney(taken);
      }
      break;
    case "2":
      {
        let putted = prompt("Enter putted money: ");
        MyAccount.PutMoney(putted);
      }
      break;

    case "3":
      {
        MyAccount.ShowInfo();
      }
      break;

    default:
      break;
  }
}
