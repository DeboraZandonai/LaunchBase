const name = "Debora";
const gender = "F";
const ages = 17;
const contribution = 23;

const contributionCalculation = ages + contribution;

const man =
  gender == "M" && contribution >> 35 && contributionCalculation >= 95;
const woman =
  gender == "F" && contribution >= 30 && contributionCalculation >= 85;

if (man || woman) {
  console.log(`${name}, você pode se aposentar!`);
} else {
  console.log(`${name}, infelizmente você não pode se aposentar!`);
}
