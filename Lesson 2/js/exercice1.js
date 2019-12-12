// Створити клас "Точка" (Point), який складається з двох полів типу int: X та Y. Необхідно забезпечити:
// Введення координат точки користувачем
// Вивід інформації про точку на екран
// Можливість зміни будь-якої з координат на запит користувача (X або Y)

function Point(X, Y) {
  this.X = X;
  this.Y = Y;
  this.SetX = function(setX) {
    this.X = setX;
  };
  this.SetY = function(setY) {
    this.X = setY;
  };
  this.ShowPoint = function() {
    console.log("Point => X:", this.X, " Y:", this.Y);
  };
}

let MyX = prompt("Enter X: ");
let MyY = prompt("Enter Y: ");

let MyPoint = new Point(MyX, MyY);

while (true) {
  let chose = prompt(
    "Chose (1. Set  new X   2. Set new Y   3.Show point   4.End session): "
  );
  if (chose == 4) {
    break;
  }
  switch (chose) {
    case "1":
      {
        let setedX = prompt("Enter new X: ");
        MyPoint.SetX(setedX);
      }
      break;
    case "2":
      {
        let setedY = prompt("Enter new Y: ");
        MyPoint.SetY(setedY);
      }
      break;

    case "3":
      {
        MyPoint.ShowPoint();
      }
      break;

    default:
      break;
  }
}
