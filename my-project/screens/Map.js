import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import { Box, VStack, ZStack, Button, Heading} from 'native-base';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API} from '@env'
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function Map({universityName}) {
  

  const origin = {latitude: 40.425392066007554, longitude: -86.91506838968994};
  const destination = {latitude: 40.42549824130531, longitude: -86.91324448766233};
  const info = {
      "Buildings": [
          {
              "Name": "STEW",
              "Location": [40.42705864418407, -86.91305170245623]
          },
          {
              "Name": "AACC",
              "Location": [40.42927418310571, -86.91762413120074]
          },
          {
              "Name": "ACPF",
              "Location": [40.42445604836455, -86.91835537644634]
          },
          {
              "Name": "ABE",
              "Location": [40.42283283112434, -86.91605525261978]
          },
          {
              "Name": "ADDL",
              "Location": [40.41903691397771, -86.9126477399978]
          },
          {
              "Name": "ADM",
              "Location": [40.417260085667564, -86.91910512194343]
          },
          {
              "Name": "AERO",
              "Location": [40.41753932371227, -86.92772762988619]
          },
          {
              "Name": "AGAD",
              "Location": [40.42467603944933, -86.9122972002741]
          },
          {
              "Name": "AHF",
              "Location": [40.41971784029018, -86.91422306742498]
          },
          {
              "Name": "AQUA",
              "Location": [40.42917864792264, -86.92284298329423]
          },
          {
              "Name": "AR",
              "Location": [40.42842179517421, -86.9163432674086]
          },
          {
              "Name": "ARMS",
              "Location": [40.43245099530367, -86.91424202191783]
          },
          {
              "Name": "ASB",
              "Location": [40.41553067039995, -86.9306963945174]
          },
          {
              "Name": "BALY",
              "Location": [40.428171189691234, -86.90722202409616]
          },
          {
              "Name": "BCC",
              "Location": [40.428306314470575, -86.91916931398097]
          },
          {
              "Name": "BCHM",
              "Location": [40.424147731553745, -86.91648289810344]
          },
          {
              "Name": "BIDC",
              "Location": [40.428813536337, -86.91905999809529]
          },
          {
              "Name": "BIND",
              "Location": [40.42389918888887, -86.9231400446747]
          },
          {
              "Name": "BRK",
              "Location": [40.42397065247334, -86.92424901398932]
          },
          {
              "Name": "BRNG",
              "Location": [40.4264227749306, -86.91621093672715]
          },
          {
              "Name": "BRWN",
              "Location": [40.427559935520286, -86.90844500929742]
          },
          {
              "Name": "CHAF",
              "Location": [40.416887747652545, -86.94247261400083]
          },
          {
              "Name": "CHAS",
              "Location": [40.429547270965465, -86.91503554466478]
          },
          {
              "Name": "CL50",
              "Location": [40.427457612423744, -86.91471271398301]
          },
          {
              "Name": "COMP",
              "Location": [40.416691506498346, -86.92666473891543]
          },
          {
              "Name": "CONV",
              "Location": [40.42465083686019, -86.92356324793042]
          },
          {
              "Name": "CREC",
              "Location": [40.42963717641218, -86.92141922192212]
          },
          {
              "Name": "CRTN",
              "Location": [40.4221645141766, -86.91817107536342]
          },
          {
              "Name": "DANL",
              "Location": [40.44288878938604, -86.92969691395588]
          },
          {
              "Name": "DAUC", 
              "Location": [40.42262619656185, -86.91078233673343]
          },
          {
              "Name": "DLR",
              "Location": [40.42206033005184, -86.92030856959224]
          },
          {
              "Name": "DOYL",
              "Location": [40.41949151728585, -86.91430890713931]
          },
          {
              "Name": "DRUG",
              "Location": [40.422549281622345, -86.91704405261962]
          },
          {
              "Name": "DYE",
              "Location": [40.44107851715429, -86.92606885258714]
          },
          {
              "Name": "ECEC",
              "Location": [40.42602877521969, -86.93272381398563]
          },
          {
              "Name": "EE",
              "Location": [40.42909892673066, -86.91140395260766]
          },
          {
              "Name": "EEL",
              "Location": [40.42366682748496, -86.91422315261754]
          },
          {
              "Name": "EHSA",
              "Location":[40.41846532175437, -86.91441932879823]
          },
          {
              "Name": "EHSB",
              "Location": [40.419704850031565, -86.91050777176837]
          },
          {
              "Name": "ELLT",
              "Location": [40.4291656928179, -86.91474964466612]
          },
          {
              "Name": "FLEX",
              "Location": [40.422319497311264, -86.92311785262056]
          },
          {
              "Name": "FOPN",
              "Location": [40.41749312962373, -86.92686524000072]
          },
          {
              "Name": "FORS",
              "Location": [40.424306910600045, -86.91074993998967]
          },
          {
              "Name": "FRPD",
              "Location": [40.42425000633504, -86.91142321724641]
          },
          {
              "Name": "FRNY",
              "Location": [40.43056056115519, -86.9095824717497]
          },
          {
              "Name": "FWLR",
              "Location":[40.42514607500654, -86.91854731724337]
          },
          {
              "Name": "GMF",
              "Location": [40.416330450799045, -86.91887604468774]
          },
          {
              "Name": "GRIS",
              "Location": [40.42740223781937, -86.90718314792628]
          },
          {
              "Name": "HAAS",
              "Location": [40.428191349034705, -86.91544962986802]
          },
          {
              "Name": "HAMP",
              "Location": [40.43138131563567, -86.91131607860551]
          },
          {
              "Name": "HANS",
              "Location": [40.4231145167322, -86.91172363421951]
          },
          {
              "Name": "HEAV",
              "Location": [40.42720084075559, -86.90858917066944]
          },
          {
              "Name": "HIKS",
              "Location": [40.42491551563692, -86.90944860135812]
          },
          {
              "Name": "HLAB",
              "Location": [40.42399331082522, -86.92074157536055]
          },
          {
              "Name": "HNLY",
              "Location": [40.42555648587689, -86.92070996958614]
          },
          {
              "Name": "HOCK",
              "Location": [40.42228668356487, -86.91653017970724]
          },
          {
              "Name": "HORT",
              "Location": [40.42285104631748, -86.9100988024487]
          },
          {
              "Name": "HOVD",
              "Location": [40.42940081623078, -86.91399038329406]
          },
          {
              "Name": "JNSN",
              "Location": [40.43069906301332, -86.91362786163512]
          },
          {
              "Name": "KCTR",
              "Location": [40.42530079040732, -86.90789304793144]
          },
          {
              "Name": "KFPC",
              "Location": [40.43619686462397, -86.91403778545312]
          },
          {
              "Name": "KNOY",
              "Location": [40.428848653054416, -86.9067632717526]
          },
          {
              "Name": "KRAN",
              "Location": [40.424700177211896, -86.90763800135953]
          },
          {
              "Name": "KRCH",
              "Location": [40.428586193777114, -86.91614220352476]
          },
          {
              "Name": "LAMB",
              "Location": [40.43431080899782, -86.91564664465474]
          },
          {
              "Name": "LCC",
              "Location": [40.43058570540736, -86.91828378218527]
          },
          {
              "Name": "HIKS",
              "Location": [40.4254382268794, -86.91288182877271]
          },
          {
              "Name": "LILY",
              "Location": [40.42979332695456, -86.91846286587509]
          },
          {
              "Name": "LSA",
              "Location": [40.42517351262389, -86.91826482877453]
          },
          {
              "Name": "LOLC",
              "Location": [40.42245670897299, -86.91854576741066]
          },
          {
              "Name": "LMSB",
              "Location": [40.41683862906394, -86.91136562878853]
          },
          {
              "Name": "LMST",
              "Location": [40.41795193371739, -86.9107821446832]
          },
          {
              "Name": "LSPS",
              "Location": [40.424606863008094, -86.91918502877505]
          },
          {
              "Name": "LWSN",
              "Location": [40.43797170378416, -86.92030938513383]
          },
          {
              "Name": "LYLE",
              "Location": [40.432572694083284, -86.91497367825077]
          },
          {
              "Name": "LYNN",
              "Location": [40.42187710850495, -86.91496200604377]
          },
          {
              "Name": "MACK",
              "Location": [40.67585352546553, -86.9433146234812]
          },
          {
              "Name": "MANN",
              "Location": [40.424917041814375, -86.9232877515116]
          },
          {
              "Name": "MATH",
              "Location": [40.4276012610766, -86.91566510603349]
          },
          {
              "Name": "ME",
              "Location": [40.429829923034795, -86.91295076739809]
          },
          {
              "Name": "MJIS",
              "Location": [40.4235812431131, -86.92074991398823]
          },
          {
              "Name": "MMDC",
              "Location": [40.4163991436531, -86.9180333981048]
          },
          {
              "Name": "MMS1",
              "Location": [40.41638213663739, -86.91876617536921]
          },
          {
              "Name": "MOLL",
              "Location": [40.43663196083042, -86.91694179806957]
          },
          {
              "Name": "MRGN",
              "Location": [40.42517659116261, -86.92257604466977]
          },
          {
              "Name": "MRRT",
              "Location": [40.42634122257953, -86.91731735945672]
          },
          {
              "Name": "MSEE",
              "Location": [40.43121326438909, -86.91254530602814]
          },
          {
              "Name": "MTHW",
              "Location": [40.42549048671024, -86.91666499808845]
          },
          {
              "Name": "NACC",
              "Location": [40.430636769122984, -86.91741559013285]
          },
          {
              "Name": "NISW",
              "Location": [40.41780596095745, -86.92917834468231]
          },
          {
              "Name": "NLSN",
              "Location": [40.422738332776696, -86.91589559014598]
          },
          {
              "Name": "PAO",
              "Location": [40.423770497677985, -86.91265987535594]
          },
          {
              "Name": "PFEN",
              "Location": [40.425348767838884, -86.9157387594582]
          },
          {
              "Name": "PFSB",
              "Location": [40.41554875663407, -86.9164254753704]
          },
          {
              "Name": "PGSC",
              "Location": [40.43175614908975, -86.91151218329091]
          },
          {
              "Name": "RHPH",
              "Location": [40.43092992397061, -86.91663962876373]
          },
          {
              "Name": "PHYS",
              "Location": [40.43110278386614, -86.91290667534265]
          },
          {
              "Name": "PJIS",
              "Location": [40.42674749023534, -86.9325521526155]
          },
          {
              "Name": "PMRI",
              "Location": [40.42270100375068, -86.91531247535801]
          },
          {
              "Name": "PMU",
              "Location": [40.426529756970254, -86.91077814466799]
          },
          {
              "Name": "PMUC",
              "Location": [40.426028953784176, -86.91055333672018]
          },
          {
              "Name": "POTR",
              "Location": [40.428755574313335, -86.91228599808383]
          },
          {
              "Name": "PRCE",
              "Location": [40.428541439682945, -86.91539375945311]
          },
          {
              "Name": "PSYC",
              "Location": [40.427471511020364, -86.91511956230197]
          },
          {
              "Name": "PTCA",
              "Location": [40.42536480779101, -86.94009246740607]
          },
          {
              "Name": "PUSH",
              "Location": [40.43169184371526, -86.91623659807851]
          },
          {
              "Name": "PVAB",
              "Location": [40.42167022578553, -86.92477984356866]
          },
          {
              "Name": "RAIL",
              "Location": [40.429480331188365, -86.91273283671467]
          },
          {
              "Name": "RAWL",
              "Location": [40.43577357998041, -86.90984178085648]
          },
          {
              "Name": "REC",
              "Location": [40.42770014010816, -86.9152997287707]
          },
          {
              "Name": "SC",
              "Location": [40.42823191065838, -86.9141773753491]
          },
          {
              "Name": "SCHL",
              "Location": [40.43044597338765, -86.9152956901332]
          },
          {
              "Name": "SCHO",
              "Location": [40.44042549813942, -86.91837023669486]
          },
          {
              "Name": "SCPA",
              "Location": [40.43336807569444, -86.92322568218022]
          },
          {
              "Name": "SIML",
              "Location": [40.41839443105311, -86.93468814468199]
          },
          {
              "Name": "SMLY",
              "Location": [40.42832970906618, -86.92301827534807]
          },
          {
              "Name": "SMTH",
              "Location": [40.42519157165755, -86.91668467535403]
          },
          {
              "Name": "SOIL",
              "Location": [40.42312236444257, -86.91978588330552]
          },
          {
              "Name": "SPUR",
              "Location": [40.440390223958474, -86.92724140601096]
          },
          {
              "Name": "STDM",
              "Location": [40.43572959518121, -86.9180094832831]
          },
          {
              "Name": "STEM",
              "Location": [40.43026594838236, -86.91512137534525]
          },
          {
              "Name": "STEW",
              "Location": [40.42609949580476, -86.91277697535142]
          },
          {
              "Name": "STON",
              "Location": [40.42571468071354, -86.91539049808863]
          },
          {
              "Name": "TEL",
              "Location": [40.4274027651275, -86.91734715945415]
          },
          {
              "Name": "TERM",
              "Location": [40.41761726480753, -86.93172871289147]
          },
          {
              "Name": "TREC",
              "Location": [40.42961277681476, -86.92354969124106]
          },
          {
              "Name": "TSWF",
              "Location": [40.415405260079, -86.91508792084413]
          },
          {
              "Name": "UNIV",
              "Location": [40.42650550566911, -86.91500047535108]
          },
          {
              "Name": "UPOB",
              "Location": [40.41871443557975, -86.91303551399692]
          },
          {
              "Name": "UPOF",
              "Location": [40.41950706377171, -86.91271692878415]
          },
          {
              "Name": "UPSB",
              "Location": [40.41838770887339, -86.91329300604912]
          },
          {
              "Name": "VA1",
              "Location": [40.42057121523633, -86.91611876741358]
          },
          {
              "Name": "VA2",
              "Location": [40.420553529336665, -86.91588017451053]
          },
          {
              "Name": "VCPR",
              "Location": [40.4198526832503, -86.91491465946694]
          },
          {
              "Name": "VLAB",
              "Location": [40.42013691339613, -86.91609424357118]
          },
          {
              "Name": "VMIF",
              "Location": [40.419328684000114, -86.91527759809992]
          },
          {
              "Name": "VOIN",
              "Location": [40.44033219914615, -86.92658414464235]
          },
          {
              "Name": "VPRB",
              "Location": [40.42132414522133, -86.91571476741238]
          },
          {
              "Name": "VPTH",
              "Location": [40.42158551530473, -86.91614392083272]
          },
          {
              "Name": "WADE",
              "Location": [40.41831211688989, -86.91218217536496]
          },
          {
              "Name": "WALC",
              "Location": [40.42906401433117, -86.91325586739967]
          },
          {
              "Name": "WANG",
              "Location": [40.430946696987725, -86.91154047534395]
          },
          {
              "Name": "WEST",
              "Location": [40.43021769217335, -86.933832536712]
          },
          {
              "Name": "WTHR",
              "Location": [40.42815433733094, -86.91297811468934]
          },
          {
              "Name": "YONG",
              "Location": [41.08638952785822, -86.64919748964934]
          },
          {
              "Name": "HCRN",
              "Location": [40.428105027572705, -86.9190375219275]
          },
          {
              "Name": "HCRS",
              "Location": [40.42707567180268, -86.91911514466626]
          },
          {
              "Name": "SHRV",
              "Location": [40.428619888372594, -86.92493472876843]
          }
      ],
      "Study": [
          {
              "Name": "BCC",
              "Location": [40.428306314470575, -86.91916931398097]
          },
          {
              "Name": "BCHM",
              "Location": [40.424147731553745, -86.91648289810344]
          },
          {
              "Name": "CHAS",
              "Location": [40.429547270965465, -86.91503554466478]
          },
          {
              "Name": "CREC",
              "Location": [40.42963717641218, -86.92141922192212]
          },
          {
              "Name": "FRNY",
              "Location": [40.43056056115519, -86.9095824717497]
          },
          {
              "Name": "HAMP",
              "Location": [40.43138131563567, -86.91131607860551]
          },
          {
              "Name": "HIKS",
              "Location": [40.42491551563692, -86.90944860135812]
          },
          {
              "Name": "KRAN",
              "Location": [40.424700177211896, -86.90763800135953]
          },
          {
              "Name": "KNOY",
              "Location": [40.428848653054416, -86.9067632717526]
          },
          {
              "Name": "KRCH",
              "Location": [40.428586193777114, -86.91614220352476]
          },
          {
              "Name": "LILY",
              "Location": [40.42979332695456, -86.91846286587509]
          },
          {
              "Name": "LWSN",
              "Location": [40.43797170378416, -86.92030938513383]
          },
          {
              "Name": "MATH",
              "Location": [40.4276012610766, -86.91566510603349]
          },
          {
              "Name": "PHYS",
              "Location": [40.43110278386614, -86.91290667534265]
          },
          {
              "Name": "PMU",
              "Location": [40.426529756970254, -86.91077814466799]
          },
          {
              "Name": "RHPH",
              "Location": [40.43092992397061, -86.91663962876373]
          },
          {
              "Name": "STEW",
              "Location": [40.42705864418407, -86.91305170245623]
          },
          {
              "Name": "WALC",
              "Location": [40.42906401433117, -86.91325586739967]
          },
          {
              "Name": "HCRN",
              "Location": [40.428105027572705, -86.9190375219275]
          },
          {
              "Name": "ARMS",
              "Location": [40.43245099530367, -86.91424202191783]
          },
          {
              "Name": "RAWL",
              "Location": [40.43577357998041, -86.90984178085648]
          },
          {
              "Name": "BRNG",
              "Location": [40.4264227749306, -86.91621093672715]
          },
          {
              "Name": "WTHR",
              "Location": [40.42815433733094, -86.91297811468934]
          }

      ],
      "Meal": [
          {
              "Name": "Hillenbrand Dining Court",
              "Location": [40.42761166987847, -86.92615554230238],
              "Swipes": "All Day"
          },
          {
              "Name": "Harrison Grill",
              "Location": [40.42540064225781, -86.9262797269605],
              "Swipes": "During Pop-Up Days"
          },
          {
              "Name": "Earhardt Dining Court",
              "Location": [40.42606373774758, -86.92369202804959],
              "Swipes": "All Day"
          },
          {
              "Name": "All American Dining Room",
              "Location": [40.4322698001087, -86.91645399736136],
              "Swipes": "Seasonally"
          },
          {
              "Name": "Ford Dining Court",
              "Location": [40.43272922263782, -86.91788373599049],
              "Swipes": "All Day"
          },
          {
              "Name": "Freshens",
              "Location": [40.42891948264048, -86.91893002968237],
              "Swipes": "11-1"
          },
          {
              "Name": "Panera",
              "Location": [40.42594796924257, -86.92159790530788],
              "Swipes": "11-1"
          },
          {
              "Name": "QDOBA",
              "Location": [40.42594796924257, -86.92159790530788],
              "Swipes": "11-1"
          },
          {
              "Name": "Wiley Dining Court",
              "Location": [40.42917592325897, -86.91908082064931]
          },
          {
              "Name": "Jersey Mike's",
              "Location": [40.42892701827159, -86.91784633599214],
              "Swipes": "11-1"
          },
          {
              "Name": "Chick Fil A",
              "Location": [40.42892701827159, -86.91784633599214],
              "Swipes": "11-1"
          },
          {
              "Name": "Starbucks",
              "Location": [40.428188032857896, -86.91902799736332],
              "Swipes": "No"
          },
          {
              "Name": "Windsor Dining Court",
              "Location": [40.427506433636125, -86.91950359736362],
              "Swipes": "All Day"
          },
          {
              "Name": "1Bowl",
              "Location": [40.426794901671244, -86.92190132804936],
              "Swipes": "11-1"
          },
          {
              "Name": "Sushi Boss",
              "Location": [40.426794901671244, -86.92190132804936],
              "Swipes": "11-1"
          },
          {
              "Name": "Pete's Za",
              "Location": [40.426794901671244, -86.92190132804936],
              "Swipes": "11-1"
          },
          {
              "Name": "Amelia's",
              "Location": [40.43163533273605, -86.9129973746201],
              "Swipes": "11-1"
          },
          {
              "Name": "Lawson Grab and Go",
              "Location": [40.42797174693649, -86.91494941325064],
              "Swipes":"All Day"
          },
          {
              "Name": "Cosi",
              "Location": [40.42784467317448, -86.9153037847442],
              "Swipes": "11-1"
          },
          {
              "Name": "Saladworks",
              "Location": [40.42847991317516, -86.91296092804849],
              "Swipes": "No"
          },
          {
              "Name": "Au Bon Pain",
              "Location": [40.42818297465535, -86.9111099979081],
              "Swipes": "No"
          },
          {
              "Name": "Undergrounds Library",
              "Location": [40.42481849717087, -86.91069304393748],
              "Swipes": "No"
          },
          {
              "Name": "Continuum Cafe",
              "Location": [40.42416239893301, -86.9272419336772],
              "Swipes": "No"
          },
          {
              "Name": "Union Restaurants",
              "Location": [40.42528932162301, -86.90996265079173],
              "Swipes": "No"
          }
      ]
  }


  let study = [];
  let meal = [];
  let study = [
{
    "Name": "BCC",
    "Location": [40.428306314470575, -86.91916931398097]
},
{
    "Name": "BCHM",
    "Location": [40.424147731553745, -86.91648289810344]
},
{
    "Name": "CHAS",
    "Location": [40.429547270965465, -86.91503554466478]
},
{
    "Name": "CREC",
    "Location": [40.42963717641218, -86.92141922192212]
},
{
    "Name": "FRNY",
    "Location": [40.43056056115519, -86.9095824717497]
},
{
    "Name": "HAMP",
    "Location": [40.43138131563567, -86.91131607860551]
},
{
    "Name": "HIKS",
    "Location": [40.42491551563692, -86.90944860135812]
},
{
    "Name": "KRAN",
    "Location": [40.424700177211896, -86.90763800135953]
},
{
    "Name": "KNOY",
    "Location": [40.428848653054416, -86.9067632717526]
},
{
    "Name": "KRCH",
    "Location": [40.428586193777114, -86.91614220352476]
},
{
    "Name": "LILY",
    "Location": [40.42979332695456, -86.91846286587509]
},
{
    "Name": "LWSN",
    "Location": [40.43797170378416, -86.92030938513383]
},
{
    "Name": "MATH",
    "Location": [40.4276012610766, -86.91566510603349]
},
{
    "Name": "PHYS",
    "Location": [40.43110278386614, -86.91290667534265]
},
{
    "Name": "PMU",
    "Location": [40.426529756970254, -86.91077814466799]
},
{
    "Name": "RHPH",
    "Location": [40.43092992397061, -86.91663962876373]
},
{
    "Name": "STEW",
    "Location": [40.42705864418407, -86.91305170245623]
},
{
    "Name": "WALC",
    "Location": [40.42906401433117, -86.91325586739967]
},
{
    "Name": "HCRN",
    "Location": [40.428105027572705, -86.9190375219275]
},
{
    "Name": "ARMS",
    "Location": [40.43245099530367, -86.91424202191783]
},
{
    "Name": "RAWL",
    "Location": [40.43577357998041, -86.90984178085648]
},
{
    "Name": "BRNG",
    "Location": [40.4264227749306, -86.91621093672715]
},
{
    "Name": "WTHR",
    "Location": [40.42815433733094, -86.91297811468934]
}

];
  // let [studyState, setStudyState] = useState([]);
  // let [mealState, setMealState] = useState([]);

  // const startup = useEffect(async () => {
  //   const data = await axios.get('../buildings.json');
  //   console.log("MADE IT");
  //   for (let i = 0; i < data.data.Study.length; i++) {
  //     const toAppend = {
  //       "latitude": data.data.Study[i].location[0],
  //       "longitude": data.data.Study[i].location[1]
  //     }
  //     study.concat(toAppend);
  //   }
  //   console.log(study[0]);
  //   setStudyState(study);

  //   for (let i = 0; i < data.Meal.length; i++) {
  //     const toAppend = {
  //       "latitude": data.data.Meal[i].location[0],
  //       "longitude": data.data.Meal[i].location[1]
  //     }
  //     meal.concat(toAppend);
  //   }
  //   console.log(meal[0]);
  //   setMealState(meal);

  // }, []);


  

  const overlayWindowHeight = 325;

    
  return (

    <ZStack>
        <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 40.424175,
          longitude: -86.914376,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
      }}
      > 
      {info.Study && info.Study.map(stud => (
        <Marker 
          coordinate={{ latitude : stud.Location[0], longitude: stud.Location[1] }}
          name={stud.Name}
        />
      ))}
      {info.Meal && info.Meal.map(stud => (
        <Marker 
          coordinate={{ latitude : stud.Location[0], longitude: stud.Location[1] }}
          name={stud.Name}
        />
      ))}
      <MapViewDirections
        origin={origin}
        destination={destination}
        mode={'WALKING'}
        apikey={GOOGLE_API}
        strokeWidth={10}
        strokeColor="#06b6d4"  //06b6d4
        waypoints={[
          {latitude: 40.42815433733094, longitude: -86.91297811468934},
          {latitude: 40.42761166987847, longitude: -86.92615554230238},
        ]}
        onStart={(params) => {
          console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
        }}
        onReady={result => {
          console.log(`Distance: ${result.distance} km`)
          console.log(`Duration: ${result.duration} min.`)

          // this.mapView.fitToCoordinates(result.coordinates, {
          //   edgePadding: {
          //     right: (width / 20),
          //     bottom: (height / 20),
          //     left: (width / 20),
          //     top: (height / 20),
          //   }
          // });
        }}
        onError={(errorMessage) => {
            console.log('GOT AN ERROR');
        }}
      />
      <Marker coordinate={{ latitude : 40.424175 , longitude : -86.914376 }} />
      </MapView>
        <Box mt={styles.map.height - overlayWindowHeight} bg="gray.50" borderColor="coolGray.200" width="full" height={overlayWindowHeight} rounded="lg" shadow={3}>
            <VStack space="3" alignItems="center" justifyContent="center">
                <Heading m="5">Purdue University</Heading>
                <Text size="lg" m="20" style={{textAlign: "center"}}>See above for a map detailing the study locations nearest to your classes</Text>
            </VStack>
        </Box>
    </ZStack>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
