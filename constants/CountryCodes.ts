const countryCodes = {
  "PR": "1",
  "PS": "970",
  "PT": "351",
  "PW": "680",
  "PY": "595",
  "QA": "974",
  "AD": "376",
  "AE": "971",
  "AF": "93",
  "AG": "1",
  "AI": "1",
  "AL": "355",
  "AM": "374",
  "AO": "244",
  "AQ": "0",
  "AR": "54",
  "AS": "1",
  "AT": "43",
  "RE": "262",
  "AU": "61",
  "AW": "297",
  "AX": "358",
  "AZ": "994",
  "RO": "40",
  "BA": "387",
  "BB": "1",
  "RS": "381",
  "BD": "880",
  "BE": "32",
  "RU": "7",
  "BF": "226",
  "BG": "359",
  "RW": "250",
  "BH": "973",
  "BI": "257",
  "BJ": "229",
  "BL": "590",
  "BM": "1",
  "BN": "673",
  "BO": "591",
  "SA": "966",
  "BQ": "599",
  "SB": "677",
  "BR": "55",
  "SC": "248",
  "BS": "1",
  "SD": "249",
  "BT": "975",
  "SE": "46",
  "BV": "0",
  "SG": "65",
  "BW": "267",
  "SH": "290",
  "SI": "386",
  "BY": "375",
  "SJ": "47",
  "BZ": "501",
  "SK": "421",
  "SL": "232",
  "SM": "378",
  "SN": "221",
  "SO": "252",
  "CA": "1",
  "SR": "597",
  "CC": "61",
  "SS": "211",
  "CD": "243",
  "ST": "239",
  "CF": "236",
  "SV": "503",
  "CG": "242",
  "CH": "41",
  "SX": "1",
  "CI": "225",
  "SY": "963",
  "SZ": "268",
  "CK": "682",
  "CL": "56",
  "CM": "237",
  "CN": "86",
  "CO": "57",
  "CR": "506",
  "TC": "1",
  "TD": "235",
  "CU": "53",
  "TF": "0",
  "CV": "238",
  "TG": "228",
  "CW": "599",
  "TH": "66",
  "CX": "61",
  "CY": "357",
  "TJ": "992",
  "CZ": "420",
  "TK": "690",
  "TL": "670",
  "TM": "993",
  "TN": "216",
  "TO": "676",
  "TR": "90",
  "TT": "1",
  "DE": "49",
  "TV": "688",
  "TW": "886",
  "DJ": "253",
  "TZ": "255",
  "DK": "45",
  "DM": "1",
  "DO": "1",
  "UA": "380",
  "UG": "256",
  "DZ": "213",
  "UM": "0",
  "EC": "593",
  "US": "1",
  "EE": "372",
  "EG": "20",
  "EH": "212",
  "UY": "598",
  "UZ": "998",
  "VA": "39",
  "ER": "291",
  "VC": "1",
  "ES": "34",
  "ET": "251",
  "VE": "58",
  "VG": "1",
  "VI": "1",
  "VN": "84",
  "VU": "678",
  "FI": "358",
  "FJ": "679",
  "FK": "500",
  "FM": "691",
  "FO": "298",
  "FR": "33",
  "WF": "681",
  "GA": "241",
  "GB": "44",
  "WS": "685",
  "GD": "1",
  "GE": "995",
  "GF": "594",
  "GG": "44",
  "GH": "233",
  "GI": "350",
  "GL": "299",
  "GM": "220",
  "GN": "224",
  "GP": "590",
  "GQ": "240",
  "GR": "30",
  "GS": "0",
  "GT": "502",
  "GU": "1",
  "GW": "245",
  "GY": "592",
  "HK": "852",
  "HM": "0",
  "HN": "504",
  "HR": "385",
  "HT": "509",
  "YE": "967",
  "HU": "36",
  "ID": "62",
  "YT": "262",
  "IE": "353",
  "IL": "972",
  "IM": "44",
  "IN": "91",
  "IO": "246",
  "ZA": "27",
  "IQ": "964",
  "IR": "98",
  "IS": "354",
  "IT": "39",
  "ZM": "260",
  "JE": "44",
  "ZW": "263",
  "JM": "1",
  "JO": "962",
  "JP": "81",
  "KE": "254",
  "KG": "996",
  "KH": "855",
  "KI": "686",
  "KM": "269",
  "KN": "1",
  "KP": "850",
  "KR": "82",
  "KW": "965",
  "KY": "1",
  "KZ": "7",
  "LA": "856",
  "LB": "961",
  "LC": "1",
  "LI": "423",
  "LK": "94",
  "LR": "231",
  "LS": "266",
  "LT": "370",
  "LU": "352",
  "LV": "371",
  "LY": "218",
  "MA": "212",
  "MC": "377",
  "MD": "373",
  "ME": "382",
  "MF": "590",
  "MG": "261",
  "MH": "692",
  "MK": "389",
  "ML": "223",
  "MM": "95",
  "MN": "976",
  "MO": "853",
  "MP": "1",
  "MQ": "596",
  "MR": "222",
  "MS": "1",
  "MT": "356",
  "MU": "230",
  "MV": "960",
  "MW": "265",
  "MX": "52",
  "MY": "60",
  "MZ": "258",
  "NA": "264",
  "NC": "687",
  "NE": "227",
  "NF": "672",
  "NG": "234",
  "NI": "505",
  "NL": "31",
  "NO": "47",
  "NP": "977",
  "NR": "674",
  "NU": "683",
  "NZ": "64",
  "OM": "968",
  "PA": "507",
  "PE": "51",
  "PF": "689",
  "PG": "675",
  "PH": "63",
  "PK": "92",
  "PL": "48",
  "PM": "508",
  "PN": "0"
}

export default countryCodes;