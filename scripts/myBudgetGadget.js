function buyGadget(value) {
  let myBudget;
  myBudget = value;
  if (myBudget > 80000) {
    console.log("I will buy mac !!!");
  } else if (myBudget <= 80000 && myBudget > 60000) {
    console.log("I will buy gaming laptop !!!");
  } else if (myBudget <= 60000 && myBudget > 40000) {
    console.log("I will buy lenovo yoga !!!");
  } else if (myBudget <= 40000 && myBudget > 20000) {
    console.log("I will buy old laptop !!!");
  }
  else if (myBudget <=20000) {
    console.log("I will buy an android ");
  } 
  else {
    console.log("You are foinnni !!!!!!");
  }
}
buyGadget(34692);
