const { assignBMIRiskLevel } = require("./bmiHelperFunctions");
const bmiLevel = require("../constants/constants");

let bmiCalculator = function (request, response) {
  let personDetailsArray = request.body.personDetailsArray;
  console.log(request.body);
  let assignBMIRiskLevelArray = [];
  console.log(personDetailsArray);

  personDetailsArray.map((personDetails) => {
    if (
      typeof personDetails.WeightKg === "number" &&
      typeof personDetails.HeightCm === "number" &&
      personDetails.HeightCm > 0 &&
      personDetails.WeightKg > 0
    ) {
      personDetails.BMI =
        personDetails.WeightKg / (personDetails.HeightCm / 100);
      assignBMIRiskLevelArray.push(assignBMIRiskLevel(personDetails));
    } else {
      personDetails.BMI = "Cannot be determined due to inappropriate data.";
      assignBMIRiskLevelArray.push(assignBMIRiskLevel(personDetails));
    }

    return;
  });
  Promise.all(assignBMIRiskLevelArray).then((resultArray) => {
    console.log({
      resultArray,
    });
    let overweightCount = 0;
    resultArray.forEach((eachPerson) => {
      console.log(bmiLevel.Overweight.BMI_Range, eachPerson.BMI_Range);
      if (bmiLevel.Overweight.BMI_Range === eachPerson.BMI_Range) {
        overweightCount += 1;
      }
    });

    response.send({ overweightCount });
  });
};
module.exports = { bmiCalculator };
