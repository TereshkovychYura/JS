console.log("Hello world!");
let chose = prompt("Make your choise (1.Cm to Dm , 2 Dm to Cm): ");
switch (chose) {
  case "1":
    {
      let cm = prompt("Enter cm: ");
      document.write(cm, "cm = ", cm / 2.54, "dm");
    }
    break;
  case "2":
    {
      let dm = prompt("Enter dm: ");
      document.write(dm, "dm = ", dm * 2.54, "cm");
    }
    break;

  default:
    break;
}
