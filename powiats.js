const fs = require("fs");
let input = JSON.parse(fs.readFileSync("./input/powiats.json", "utf-8"));

const grouppedByVoivodeship = {}

input.features.forEach((feature) => {
  feature = {
    ...feature,
    properties: {
      name: feature.properties["JPT_NAZWA_"],
      terc: feature.properties["JPT_KOD_JE"],
    }
  }

  const voivodeship = feature.properties.terc.substr(0, 2)

  if (!grouppedByVoivodeship.hasOwnProperty(voivodeship)) {
      grouppedByVoivodeship[voivodeship] = []
  }

  grouppedByVoivodeship[voivodeship].push(feature)

})

for (const [key, value] of Object.entries(grouppedByVoivodeship)) {
  fs.writeFileSync(`./output/powiats/${key}.json`, JSON.stringify(value));
}