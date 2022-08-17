// const abbrev = data => {
//   const shorten = name => name.split(' ').map(word => word[0].toLowerCase()).join('')

//   const regions = Object.keys(data)
//   for (let region of regions) {
//     const first = shorten(region)
//     const areas = Object.keys(data[region])
//     for (let area of areas) {
//       const second = shorten(area)
//       const pools = data[region][area]
//       for (let pool of pools) {
//         const { n: name, l: level, t: type } = pool
//         const third = `${level}${shorten(name)}${type}`

//         console.log(`"${first}${second}${third}": "${name}",`)
//       }
//     }
//   }
// }

export const pools = {
  1: { name: "unknown", fish: [4869, 4885, 12811, 27457, 27454, 27455, 27456, 32051] },
  2: { name: "The Vein", fish: [4925, 4927, 4932, 4934, 4935, 4936, 4952, 7705] },
  3: { name: "The Mirror", fish: [4929, 4932, 4934, 4935, 4936, 4947, 4951, 7700] },
  4: { name: "Everschade", fish: [4958, 4942, 4975, 4974, 4968, 4973, 7920] },
  5: { name: "Hopeseed Pond", fish: [4950, 4958, 4964, 4942, 4939, 4979, 4976, 7934] },
  6: { name: "Sweetbloom Pier", fish: [4929, 4927, 4932, 4936, 4941, 4945, 4952, 7694] },
  7: { name: "Verdant Drop", fish: [4940, 4941, 4948, 4958, 4962, 4967, 4968, 4992, 7912] },
  8: { name: "Springripple Brook", fish: [4935, 4936, 4940, 4941, 4942, 4949, 4952, 7683] },
  9: { name: "Sylphlands", fish: [4981, 4982, 4994, 4995, 4996, 5022, 8773] },
  10: { name: "Sanctum of the Twelve", fish: [4929, 4941, 4944, 4947, 4951, 4954, 4959, 7907] },
  11: { name: "Upper Hathoeva River", fish: [4940, 4941, 4942, 4943, 4945, 4952, 4958, 4982, 7908] },
  12: { name: "Middle Hathoeva River", fish: [4940, 4945, 4961, 4967, 4974, 4976, 4980, 4982, 7921] },
  13: { name: "Lower Hathoeva River", fish: [4940, 4942, 4943, 4950, 4952, 4958, 4962, 4967, 4982, 7913] },
  14: { name: "East Hathoeva River", fish: [4940, 4943, 4945, 4948, 4950, 4952, 4958, 4982, 7914] },
  15: { name: "Goblinblood", fish: [4942, 4950, 4959, 4961, 4964, 4967, 4973, 4978, 5000, 7922] },
  16: { name: "Rootslake", fish: [4929, 4962, 4972, 4974, 4980, 5023, 7936] },
  17: { name: "Urth's Gift", fish: [4942, 4975, 4973, 4974, 4982, 4996, 5008, 5028, 8774, 8775] },
  18: { name: "Murmur Rills", fish: [4935, 4936, 4940, 4941, 4949, 4951, 7699] },
  19: { name: "Fallgourd Float", fish: [4927, 4935, 4936, 4940, 4942, 4943, 4945, 4963, 7695] },
  20: { name: "Proud Creek", fish: [4954, 4974, 4976, 4984, 4990, 4994, 4996, 5029, 7947] },
  21: { name: "Lake Tahtotl", fish: [4950, 4954, 4973, 4978, 5002, 5008, 5011, 5026, 8760] },
  22: { name: "North Silvertear", fish: [5544, 4978, 4989, 5003, 5002, 5006, 5011, 5027, 7951] },
  23: { name: "Rathefrost", fish: [5544, 4978, 4981, 4989, 4993, 5002, 5006, 5011, 5024, 8759] },
  24: { name: "The Tangle", fish: [4929, 4942, 4978, 5003, 5002, 5004, 5006, 5021, 8761] },
  25: { name: "The Deep Tangle", fish: [4942, 4959, 4974, 4981, 4989, 4993, 5008, 4975, 8758] },
  26: { name: "Coerthas River", fish: [4927, 4936, 4940, 4976, 4981, 4986, 5009, 7932] },
  27: { name: "Witchdrop", fish: [5038, 5039, 5040, 5041, 5042, 5044, 5046, 8771, 8772] },
  28: { name: "The Nail", fish: [4927, 4937, 4981, 4986, 4988, 4997, 5009, 5025, 7945] },
  29: { name: "The Weeping Saint", fish: [5544, 4937, 4981, 4986, 4995, 4997, 5010, 8769] },
  30: { name: "Dragonhead Latrines", fish: [4927, 4940, 4937, 4976, 4986, 5009, 7944] },
  31: { name: "Daniffen Pass", fish: [4927, 4938, 5544, 4937, 4984, 5014, 7933] },
  32: { name: "Exploratory Ice Hole", fish: [5544, 4937, 4997, 5009, 7946] },
  33: { name: "Snowcloak", fish: [4940, 4976, 4986, 5013, 8770] },
  34: { name: "Sea of Clouds", fish: [5038, 5039, 5040, 5041, 5042, 7949] },
  35: { name: "Limsa Lominsa Lower Decks", fish: [4869, 4870, 4776, 4871, 4872, 4874, 4876, 4885, 7707] },
  36: { name: "Limsa Lominsa Upper Decks", fish: [4869, 4870, 4776, 4871, 4872, 4874, 4876, 4885, 7685] },
  37: { name: "Zephyr Drift", fish: [4869, 4870, 4871, 4872, 4873, 4874, 4876, 4883, 4885, 7678] },
  38: { name: "Summerford", fish: [4869, 4871, 5460, 4872, 4874, 4875, 4885, 4888, 4903, 7686] },
  39: { name: "Rogue River", fish: [4925, 4926, 4928, 4930, 4946, 7679] },
  40: { name: "West Agelyss River", fish: [4925, 4926, 4928, 4930, 4934, 4946, 7688] },
  41: { name: "Nym River", fish: [4926, 4928, 4930, 4931, 4934, 4936, 4946, 7709] },
  42: { name: "Woad Whisper Canyon", fish: [4928, 4931, 4941, 4946, 4948, 4952, 4956, 7682] },
  43: { name: "The Mourning Widow", fish: [4925, 4926, 4928, 4930, 4931, 4934, 4936, 7681] },
  44: { name: "Moraby Bay", fish: [4869, 4776, 4872, 4873, 4875, 4877, 4878, 4885, 7680] },
  45: { name: "Cedarwood", fish: [4869, 4872, 4874, 4877, 4878, 4879, 4885, 4897, 7710] },
  46: { name: "Moraby Drydocks", fish: [4872, 4874, 4877, 4878, 4879, 4881, 4882, 4885, 7712] },
  47: { name: "Oschon's Torch", fish: [4873, 4875, 4877, 4878, 4879, 4881, 4915, 7690] },
  48: { name: "The Salt Strand", fish: [4873, 4878, 4880, 4884, 4886, 4890, 4892, 6185, 7903] },
  49: { name: "Candlekeep Quay", fish: [4870, 4875, 4877, 4878, 4879, 4881, 4914, 7691] },
  50: { name: "Empty Heart", fish: [4931, 4933, 4943, 4944, 4947, 4948, 4952, 4970, 7697] },
  51: { name: "South Bloodshore", fish: [4869, 4876, 4885, 5461, 4890, 4891, 4898, 4903, 10123, 7909] },
  52: { name: "Costa del Sol", fish: [4883, 4886, 4891, 4895, 4896, 4898, 4901, 4903, 4913, 7915] },
  53: { name: "North Bloodshore", fish: [4874, 4888, 4892, 4894, 4896, 4900, 4902, 5462, 4917, 7924] },
  54: { name: "Hidden Falls", fish: [4933, 4945, 4974, 4983, 4987, 4998, 7925] },
  55: { name: "East Agelyss River", fish: [4948, 4965, 4975, 4974, 4987, 4990, 4999, 5001, 7938] },
  56: { name: "Raincatcher Gully", fish: [4948, 4965, 4974, 4981, 4987, 4990, 4991, 4999, 5001, 7939] },
  57: { name: "The Juggernaut", fish: [4948, 4950, 4965, 4970, 4978, 5003, 5012, 7940] },
  58: { name: "Red Mantis Falls", fish: [4974, 4978, 4979, 4987, 4993, 5001, 5011, 5031, 8752] },
  59: { name: "Swiftperch", fish: [4870, 5460, 4874, 4877, 4878, 4879, 4881, 4885, 4916, 7687] },
  60: { name: "Skull Valley", fish: [4869, 4879, 4881, 4884, 4885, 4904, 4912, 7684] },
  61: { name: "Halfstone", fish: [4887, 5461, 4893, 4894, 4900, 4901, 4902, 7926] },
  62: { name: "Isles of Umbra Northshore", fish: [4869, 4872, 4898, 4901, 5462, 4903, 4904, 4907, 4921, 7941] },
  63: { name: "Isles of Umbra Southshore", fish: [4898, 5462, 5466, 4906, 4908, 4909, 4910, 4918, 8755, 8756] },
  64: { name: "The Brewer's Beacon", fish: [5460, 4874, 4880, 4881, 4882, 4888, 4920, 7693] },
  65: { name: "The Ship Graveyard", fish: [4869, 5462, 4904, 5466, 4907, 4908, 4909, 4919, 4923, 7950] },
  66: { name: "Oakwood", fish: [4941, 4943, 4953, 4954, 4955, 4957, 4959, 4995, 5015, 7905] },
  67: { name: "Fool Falls", fish: [4933, 4941, 4948, 4949, 4953, 4955, 4957, 4959, 4992, 7904] },
  68: { name: "Northeast Bronze Lake", fish: [4953, 4954, 4957, 4973, 4974, 4978, 4981, 4988, 5020, 7927] },
  69: { name: "The Silver Bazaar", fish: [4870, 4878, 4879, 4881, 4893, 4895, 4899, 4911, 7910] },
  70: { name: "Vesper Bay", fish: [4870, 4874, 4878, 4879, 4881, 4885, 7711] },
  71: { name: "Crescent Cove", fish: [4870, 4884, 4886, 4887, 4889, 4983, 4911, 7906] },
  72: { name: "Nophica's Wells", fish: [4929, 4931, 4934, 4935, 4936, 4948, 4952, 7714] },
  73: { name: "The Footfalls", fish: [4925, 4939, 4943, 4950, 4944, 4948, 4952, 7706] },
  74: { name: "Cape Westwind", fish: [4869, 4899, 4900, 4903, 4904, 5466, 4909, 4910, 4924, 8764] },
  75: { name: "Upper Soot Creek", fish: [4929, 4931, 4935, 4936, 4959, 7692] },
  76: { name: "Lower Soot Creek", fish: [4929, 4931, 4935, 4936, 4959, 4960, 7698] },
  77: { name: "The Unholy Heir", fish: [4929, 4936, 4939, 4950, 4944, 4959, 4960, 7689] },
  78: { name: "North Drybone", fish: [4931, 4939, 4943, 4944, 4950, 4971, 7704] },
  79: { name: "South Drybone", fish: [4931, 4939, 4943, 4944, 4950, 4971, 7702] },
  80: { name: "Yugr'am River", fish: [4955, 4958, 4959, 4967, 4974, 4985, 7918] },
  81: { name: "Whispering Gorge", fish: [4925, 4932, 4934, 4936, 4947, 4905, 7708] },
  82: { name: "The Burning Wall", fish: [4967, 4973, 4987, 4989, 4990, 4993, 4996, 6191, 5017, 7942] },
  83: { name: "Burnt Lizard Creek", fish: [4948, 4955, 4959, 4965, 4966, 7911] },
  84: { name: "Zahar'ak", fish: [4947, 4950, 4966, 4979, 4987, 4989, 5007, 7928] },
  85: { name: "Forgotten Springs", fish: [4948, 4955, 4965, 4966, 4969, 4979, 4984, 7929] },
  86: { name: "Sagolii Desert", fish: [4977, 5032, 5034, 5035, 5036, 5037, 5043, 7931, 8768] },
  87: { name: "Sagolii Dunes", fish: [5032, 5033, 5034, 5035, 5036, 5037, 5045, 7930] },
  88: { name: "Ceruleum Field", fish: [4970, 4978, 4989, 5003, 5004, 5006, 5011, 5019, 8767] },
  89: { name: "Bluefog", fish: [4929, 4978, 4981, 4984, 4989, 4993, 4995, 5005, 5018, 7943] },
  90: { name: "Jadeite Flood", fish: [4925, 4932, 4934, 4936, 4947, 4905, 7713] },
  91: { name: "Lower Black Tea Brook", fish: [4925, 4932, 4934, 4936, 4947, 7696] },
  92: { name: "Haukke Manor", fish: [4939, 4942, 4950, 4975, 4978, 7935] },
  93: { name: "Singing Shards", fish: [4950, 5544, 4973, 4978, 4981, 4993, 5005, 5006, 8776] },
  94: { name: "The North Shards", fish: [5544, 4978, 4981, 4989, 5002, 5006, 5011, 5030, 8762, 8763] },
  95: { name: "Parata's Peace", fish: [4970, 4978, 4989, 5003, 5004, 5006, 5012, 8766] },
  96: { name: "The Clutch", fish: [4929, 4931, 4935, 4936, 4959, 7703] },
  97: { name: "Blind Iron Mines", fish: [4929, 4944, 4938, 5544, 7902] },
  98: { name: "Bronze Lake Shallows", fish: [4933, 4941, 4943, 4953, 4954, 7916] },
  99: { name: "The Long Climb", fish: [4981, 4989, 4991, 4955, 4988, 5016, 7937] },
  100: { name: "Upper Black Tea Brook", fish: [4925, 4932, 4934, 4936, 4947, 7701] },
  101: { name: "Sapsa Spawning Grounds", fish: [4898, 4900, 5462, 5466, 4906, 4910, 7948] },
  102: { name: "Reaver Hide", fish: [4870, 4869, 5462, 4904, 5466, 4911, 4922, 8757] },
  103: { name: "Moondrip", fish: [4938, 4970, 4978, 5002, 5005, 8765] },
  104: { name: "Mist", fish: [4874, 4885, 4886, 4891, 4895, 4896, 4898, 4906, 7917] },
  105: { name: "The Lavender Beds", fish: [4932, 4945, 4942, 4951, 4963, 4968, 4973, 4975, 7923] },
  106: { name: "The Goblet", fish: [4935, 4943, 4948, 4952, 4959, 4965, 4978, 5011, 7919] },
  107: { name: "Rhotano Sea (Privateer Forecastle)", fish: [4871, 4874, 4886, 4902, 4896, 5462, 4888, 4917, 4920, 8753] },
  108: { name: "Rhotano Sea (Privateer Sterncastle)", fish: [4869, 4886, 4897, 4911, 4904, 4913, 4914, 4923, 4919, 8754] },
  109: { name: "Riversmeet", fish: [4937, 12718, 12762, 15626] },
  111: { name: "Unfrozen Pond", fish: [4937, 12713, 12715, 12726, 12796, 13728, 16746] },
  112: { name: "Clearpool", fish: [4937, 12715, 12718, 12727, 12837, 14216, 17563, 17577, 17592] },
  114: { name: "South Banepool", fish: [4937, 12713, 12715, 12720, 12738, 12737, 12719, 14219, 15439, 17578] },
  115: { name: "Ashpool", fish: [4937, 12715, 12719, 12720, 12748, 12817, 24557, 15628] },
  129: { name: "Eil Tohm", fish: [12731, 5544, 12743, 12768, 15633] },
  155: { name: "Northwest Bronze Lake", fish: [4953, 4954, 4957, 4973, 4974, 4978, 4981, 4988, 5020, 7927] },
  156: { name: "North Isle of Endless Summer", fish: [4869, 4886, 4897, 4904, 4913, 4914, 4923, 4919, 20524, 20143] }
};
