const fs = require("fs");
let input = JSON.parse(fs.readFileSync("./input/voivodeships.json", "utf-8"));

let output = input.features.map((feature) => ({
  ...feature,
  properties: {
    name: feature.properties["JPT_NAZWA_"],
    terc: feature.properties["JPT_KOD_JE"],
  },
}));


fs.writeFileSync("./output/voivodeships.json", JSON.stringify(output));
