const bmiLevel = require("../constants/constants");

function assignBMIRiskLevel(personDetails) {
  return new Promise((resolve) => {
    console.log({ personDetails });
    if (personDetails.BMI <= 18.4) {
      personDetails.BMI_Range = bmiLevel.Underweight.BMI_Range;
      personDetails.BMI_Category = bmiLevel.Underweight.BMI_Category;
      resolve(personDetails);
    } else if (personDetails.BMI >= 18.5 && personDetails.BMI <= 24.9) {
      personDetails.BMI_Range = bmiLevel.NormalWeight.BMI_Range;
      personDetails.BMI_Category = bmiLevel.NormalWeight.BMI_Category;
      resolve(personDetails);
    } else if (personDetails.BMI >= 25 && personDetails.BMI <= 29.9) {
      personDetails.BMI_Range = bmiLevel.Overweight.BMI_Range;
      personDetails.BMI_Category = bmiLevel.Overweight.BMI_Category;
      resolve(personDetails);
    } else if (personDetails.BMI >= 30 && personDetails.BMI <= 34.9) {
      personDetails.BMI_Range = bmiLevel.ModeratelyObese.BMI_Range;
      personDetails.BMI_Category = bmiLevel.ModeratelyObese.BMI_Category;
      resolve(personDetails);
    } else if (personDetails.BMI >= 35 && personDetails.BMI <= 39.9) {
      personDetails.BMI_Range = bmiLevel.SeverelyObese.BMI_Range;
      personDetails.BMI_Category = bmiLevel.SeverelyObese.BMI_Category;
      resolve(personDetails);
    } else if (personDetails.BMI >= 40) {
      personDetails.BMI_Range = bmiLevel.VeryseverelyObese.BMI_Range;
      personDetails.BMI_Category = bmiLevel.VeryseverelyObese.BMI_Category;
      resolve(personDetails);
    } else {
      personDetails.BMI_Range = bmiLevel.CantDetermine.BMI_Range;
      personDetails.BMI_Category = bmiLevel.CantDetermine.BMI_Category;
      resolve(personDetails);
    }
  });
}
module.exports = { assignBMIRiskLevel };
