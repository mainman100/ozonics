const express = require("express");
const router = express.Router();

const laserFees = [
  {
      "Hair Removal": "Ower ",
      "Per TX": "59",
      "6 TX": "354",
      "Pkg Price": "270",
      "Pkg Per TX": "45",
      "TX Length": "5",
      "Allocated Time": "15",
      "Effective Hrly Rate": "189"
  },
  {
      "Hair Removal": "Full Brow",
      "Per TX": "99",
      "6 TX": "594",
      "Pkg Price": "450",
      "Pkg Per TX": "75",
      "TX Length": "5",
      "Allocated Time": "15",
      "Effective Hrly Rate": "317"
  },
  {
      "Hair Removal": "Ears",
      "Per TX": "99",
      "6 TX": "594",
      "Pkg Price": "450",
      "Pkg Per TX": "75",
      "TX Length": "5",
      "Allocated Time": "15",
      "Effective Hrly Rate": "317"
  },
  {
      "Hair Removal": "Cheeks",
      "Per TX": "119",
      "6 TX": "714",
      "Pkg Price": "540",
      "Pkg Per TX": "90",
      "TX Length": "5",
      "Allocated Time": "15",
      "Effective Hrly Rate": "381"
  },
  {
      "Hair Removal": "Sides of Face",
      "Per TX": "139",
      "6 TX": "834",
      "Pkg Price": "660",
      "Pkg Per TX": "110",
      "TX Length": "10",
      "Allocated Time": "15",
      "Effective Hrly Rate": "445"
  },
  {
      "Hair Removal": "Upper Lip",
      "Per TX": "89",
      "6 TX": "534",
      "Pkg Price": "420",
      "Pkg Per TX": "70",
      "TX Length": "5",
      "Allocated Time": "15",
      "Effective Hrly Rate": "285"
  },
  {
      "Hair Removal": "Lower Lip",
      "Per TX": "59",
      "6 TX": "354",
      "Pkg Price": "270",
      "Pkg Per TX": "45",
      "TX Length": "5",
      "Allocated Time": "15",
      "Effective Hrly Rate": "189"
  },
  {
      "Hair Removal": "Chin",
      "Per TX": "149",
      "6 TX": "894",
      "Pkg Price": "660",
      "Pkg Per TX": "110",
      "TX Length": "10",
      "Allocated Time": "15",
      "Effective Hrly Rate": "477"
  },
  {
      "Hair Removal": "Full Face (Female)",
      "Per TX": "349",
      "6 TX": "2094",
      "Pkg Price": "1,620",
      "Pkg Per TX": "270",
      "TX Length": "30",
      "Allocated Time": "45",
      "Effective Hrly Rate": "372"
  },
  {
      "Hair Removal": "Full Face (Male)",
      "Per TX": "499",
      "6 TX": "2994",
      "Pkg Price": "2,340",
      "Pkg Per TX": "390",
      "TX Length": "45",
      "Allocated Time": "60",
      "Effective Hrly Rate": "399"
  },
  {
      "Hair Removal": "Neck",
      "Per TX": "195",
      "6 TX": "1050",
      "Pkg Price": "840",
      "Pkg Per TX": "140",
      "TX Length": "10",
      "Allocated Time": "15",
      "Effective Hrly Rate": "560"
  },
  {
      "Hair Removal": "Shoulders",
      "Per TX": "269",
      "6 TX": "1614",
      "Pkg Price": "1,290",
      "Pkg Per TX": "215",
      "TX Length": "15",
      "Allocated Time": "30",
      "Effective Hrly Rate": "430"
  },
  {
      "Hair Removal": "Full Back",
      "Per TX": "449",
      "6 TX": "2694",
      "Pkg Price": "2,100",
      "Pkg Per TX": "350",
      "TX Length": "45",
      "Allocated Time": "60",
      "Effective Hrly Rate": "359"
  },
  {
      "Hair Removal": "Lower Back",
      "Per TX": "279",
      "6 TX": "1674",
      "Pkg Price": "1,320",
      "Pkg Per TX": "220",
      "TX Length": "15",
      "Allocated Time": "30",
      "Effective Hrly Rate": "446"
  },
  {
      "Hair Removal": "Under Arms",
      "Per TX": "199",
      "6 TX": "1194",
      "Pkg Price": "900",
      "Pkg Per TX": "150",
      "TX Length": "10",
      "Allocated Time": "30",
      "Effective Hrly Rate": "318"
  },
  {
      "Hair Removal": "Upper Arms (Female)",
      "Per TX": "249",
      "6 TX": "1494",
      "Pkg Price": "1,140",
      "Pkg Per TX": "190",
      "TX Length": "10",
      "Allocated Time": "30",
      "Effective Hrly Rate": "398"
  },
  {
      "Hair Removal": "Upper Arms (Male)",
      "Per TX": "299",
      "6 TX": "1794",
      "Pkg Price": "1,380",
      "Pkg Per TX": "230",
      "TX Length": "15",
      "Allocated Time": "30",
      "Effective Hrly Rate": "478"
  },
  {
      "Hair Removal": "Forearms (Female)",
      "Per TX": "269",
      "6 TX": "1614",
      "Pkg Price": "1,260",
      "Pkg Per TX": "210",
      "TX Length": "15",
      "Allocated Time": "30",
      "Effective Hrly Rate": "430"
  },
  {
      "Hair Removal": "Forearms (Male)",
      "Per TX": "319",
      "6 TX": "1784",
      "Pkg Price": "1,500",
      "Pkg Per TX": "250",
      "TX Length": "15",
      "Allocated Time": "30",
      "Effective Hrly Rate": "510"
  },
  {
      "Hair Removal": "Full Arms (Female)",
      "Per TX": "329",
      "6 TX": "1784",
      "Pkg Price": "1,560",
      "Pkg Per TX": "260",
      "TX Length": "30",
      "Allocated Time": "45",
      "Effective Hrly Rate": "351"
  },
  {
      "Hair Removal": "Full  Arms (Male)",
      "Per TX": "569",
      "6 TX": "3414",
      "Pkg Price": "2,700",
      "Pkg Per TX": "450",
      "TX Length": "45",
      "Allocated Time": "60",
      "Effective Hrly Rate": "455"
  },
  {
      "Hair Removal": "Hands",
      "Per TX": "129",
      "6 TX": "774",
      "Pkg Price": "600",
      "Pkg Per TX": "100",
      "TX Length": "10",
      "Allocated Time": "15",
      "Effective Hrly Rate": "413"
  },
  {
      "Hair Removal": "Chest (Female)",
      "Per TX": "249",
      "6 TX": "1494",
      "Pkg Price": "1,140",
      "Pkg Per TX": "190",
      "TX Length": "20",
      "Allocated Time": "30",
      "Effective Hrly Rate": "398"
  },
  {
      "Hair Removal": "Chest (Male)",
      "Per TX": "349",
      "6 TX": "2054",
      "Pkg Price": "1,620",
      "Pkg Per TX": "270",
      "TX Length": "30",
      "Allocated Time": "45",
      "Effective Hrly Rate": "372"
  },
  {
      "Hair Removal": "Areolas",
      "Per TX": "99",
      "6 TX": "594",
      "Pkg Price": "420",
      "Pkg Per TX": "70",
      "TX Length": "5",
      "Allocated Time": "15",
      "Effective Hrly Rate": "317"
  },
  {
      "Hair Removal": "Cleavage",
      "Per TX": "119",
      "6 TX": "714",
      "Pkg Price": "540",
      "Pkg Per TX": "90",
      "TX Length": "5",
      "Allocated Time": "15",
      "Effective Hrly Rate": "381"
  },
  {
      "Hair Removal": "Abdomen (Female)",
      "Per TX": "229",
      "6 TX": "1374",
      "Pkg Price": "1,080",
      "Pkg Per TX": "180",
      "TX Length": "15",
      "Allocated Time": "30",
      "Effective Hrly Rate": "366"
  },
  {
      "Hair Removal": "Abdomen (Male)",
      "Per TX": "329",
      "6 TX": "1974",
      "Pkg Price": "1,500",
      "Pkg Per TX": "250",
      "TX Length": "15",
      "Allocated Time": "30",
      "Effective Hrly Rate": "510"
  },
  {
      "Hair Removal": "Navel",
      "Per TX": "119",
      "6 TX": "714",
      "Pkg Price": "540",
      "Pkg Per TX": "90",
      "TX Length": "5",
      "Allocated Time": "15",
      "Effective Hrly Rate": "381"
  },
  {
      "Hair Removal": "Bikini",
      "Per TX": "219",
      "6 TX": "1314",
      "Pkg Price": "1,020",
      "Pkg Per TX": "170",
      "TX Length": "15",
      "Allocated Time": "30",
      "Effective Hrly Rate": "350"
  },
  {
      "Hair Removal": "Extended Bikini",
      "Per TX": "269",
      "6 TX": "1600",
      "Pkg Price": "1,260",
      "Pkg Per TX": "210",
      "TX Length": "15",
      "Allocated Time": "30",
      "Effective Hrly Rate": "427"
  },
  {
      "Hair Removal": "Private area",
      "Per TX": "139",
      "6 TX": "834",
      "Pkg Price": "660",
      "Pkg Per TX": "110",
      "TX Length": "10",
      "Allocated Time": "30",
      "Effective Hrly Rate": "222"
  },
  {
      "Hair Removal": "Buttocks",
      "Per TX": "219",
      "6 TX": "1314",
      "Pkg Price": "1,050",
      "Pkg Per TX": "175",
      "TX Length": "15",
      "Allocated Time": "30",
      "Effective Hrly Rate": "350"
  },
  {
      "Hair Removal": "Upper Legs",
      "Per TX": "289",
      "6 TX": "1509",
      "Pkg Price": "1,380",
      "Pkg Per TX": "230",
      "TX Length": "15",
      "Allocated Time": "30",
      "Effective Hrly Rate": "462"
  },
  {
      "Hair Removal": "Lower Legs",
      "Per TX": "329",
      "6 TX": "1709",
      "Pkg Price": "1,560",
      "Pkg Per TX": "260",
      "TX Length": "10",
      "Allocated Time": "30",
      "Effective Hrly Rate": "526"
  },
  {
      "Hair Removal": "Full Legs",
      "Per TX": "529",
      "6 TX": "3174",
      "Pkg Price": "2,520",
      "Pkg Per TX": "420",
      "TX Length": "45",
      "Allocated Time": "60",
      "Effective Hrly Rate": "423"
  },
  {
      "Hair Removal": "Feet/Toes",
      "Per TX": "129",
      "6 TX": "774",
      "Pkg Price": "600",
      "Pkg Per TX": "100",
      "TX Length": "10",
      "Allocated Time": "15",
      "Effective Hrly Rate": "413"
  }
]

router.get("/laserhair", (req, res) => {
  let data;
  data = laserFees;
  console.log("in pricing");
  /* const XLSX = require('xlsx');
  const workbook = XLSX.readFile('laserhair.xlsx');
  const sheet = workbook.SheetNames;
  console.log(XLSX.utils.sheet_to_json(workbook.sheet[0])); */
  res.json(data);
});
module.exports = router;
