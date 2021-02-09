const fs = require("fs");
let input = JSON.parse(fs.readFileSync("./input/gminas.json", "utf-8"));

const grouppedByGmina = {}

input.features.forEach((feature) => {
  feature = {
    ...feature,
    properties: {
      name: feature.properties["JPT_NAZWA_"],
      terc: feature.properties["JPT_KOD_JE"],
    }
  }

  const gmina = feature.properties.terc.substr(0, 4)

  if (!grouppedByGmina.hasOwnProperty(gmina)) {
      grouppedByGmina[gmina] = []
  }

  grouppedByGmina[gmina].push(feature)

})

for (const [key, value] of Object.entries(grouppedByGmina)) {
  fs.writeFileSync(`./output/gminas/${key}.json`, JSON.stringify(value));
}