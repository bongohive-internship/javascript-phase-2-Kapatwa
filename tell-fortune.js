function tellFortune(children,partner,geo,job){
  var res;
  res = "You will be a " + job + " in " + geo + ", and married to " + partner + " with " + children + " kids.";
  return res;
}
console.log(tellFortune("3","Jannet","Zambia, Lusaka","Programmer"));
console.log(tellFortune("2","John","South Africa, Harare","Accountant"));
console.log(tellFortune("4","Lucia","London","Lawyer"));
