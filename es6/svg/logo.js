"use strict";

const LogoSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="195pt" height="195pt" viewBox="0 0 195 195" className={`${className} logo`}>
      <g transform="translate(0, 195) scale(0.1,-0.1)" stroke="none">
        <path d="M 0,975 V 0 h 975 975 v 975 975 H 975 0 Z m 195,915 c 28,-10 82,-31 120,-46 63,-25 82,-28 185,-28 92,1 127,5 174,22 33,12 61,22 63,22 8,0 -101,-103 -145,-138 -38,-31 -43,-32 -49,-15 -20,52 -76,78 -134,63 -21,-6 -41,-15 -45,-21 -3,-6 14,-30 39,-52 l 45,-42 -15,-53 c -13,-42 -19,-52 -32,-46 -9,4 -37,9 -63,12 l -48,4 v 49 c 0,45 -2,49 -27,55 -16,4 -38,14 -50,22 -35,22 -53,9 -53,-38 0,-36 4,-43 35,-62 39,-22 39,-34 5,-93 -9,-16 -37,-78 -60,-137 -24,-59 -45,-106 -47,-104 -2,2 2,37 8,77 12,79 6,345 -11,454 -5,33 -11,69 -12,79 -2,10 3,21 10,23 6,3 12,-3 12,-12 0,-31 30,-75 51,-75 12,0 29,-10 38,-21 10,-12 23,-20 30,-18 9,3 4,15 -15,39 l -29,35 28,-18 c 31,-20 47,-16 28,7 -10,12 -9,14 8,9 12,-3 21,-1 21,5 0,10 -29,23 -100,42 -25,7 -54,16 -65,21 -33,15 44,-2 100,-21 z m 1055,-9 c 96,-39 279,-39 492,0 37,7 71,10 75,6 4,-4 -6,-33 -21,-64 -53,-109 -60,-140 -60,-278 0,-170 26,-287 81,-367 20,-29 26,-52 29,-105 l 3,-68 -10,54 c -9,54 -44,112 -77,130 -11,6 -28,42 -42,86 -27,85 -77,153 -130,175 -36,15 -37,21 -9,46 42,38 59,88 59,173 0,65 -3,79 -14,75 -16,-6 -66,-123 -66,-154 0,-27 -18,-25 -22,3 -3,24 -22,27 -90,13 -38,-7 -38,-7 -37,26 1,54 13,71 75,103 35,18 60,38 62,49 4,17 -3,18 -120,12 -67,-4 -153,-9 -190,-12 l -68,-6 v 29 c 0,28 -4,31 -77,53 -84,24 -153,30 -193,16 -40,-14 -16,4 27,20 60,23 252,13 323,-15 z m -123,-175 c 43,-16 94,-37 112,-47 19,-11 45,-25 58,-32 14,-8 64,-83 112,-132 127,-127 227,-279 238,-401 l 6,-56 -43,-6 c -54,-7 -80,-31 -80,-73 0,-41 21,-62 69,-70 l 37,-6 -7,-51 C 1608,683 1548,534 1472,438 1354,290 1126,195 889,195 778,195 721,211 620,271 511,336 422,433 362,552 305,666 273,765 268,840 l -3,49 42,7 c 75,14 84,23 81,82 l -3,52 -57,3 c -32,2 -58,5 -58,7 0,25 35,128 54,173 67,166 240,387 396,467 81,42 134,54 231,55 81,0 108,-4 176,-29 z M 182,1050 C 201,983 196,909 161,773 126,635 123,593 146,508 c 8,-33 13,-65 11,-71 -9,-23 -48,84 -59,160 -11,75 -10,83 22,203 40,150 49,247 26,295 -21,44 -20,56 4,25 10,-14 25,-45 32,-70 z M 1791,821 c 19,-15 28,-36 38,-95 15,-84 10,-169 -16,-278 -13,-54 -14,-73 -5,-93 26,-56 22,-58 -96,-51 l -109,7 -27,-36 c -16,-20 -25,-39 -21,-43 4,-4 43,-9 87,-11 62,-2 81,-7 85,-20 4,-9 17,-29 30,-44 14,-18 23,-42 23,-63 0,-30 -5,-37 -32,-48 -48,-21 -82,-7 -88,35 -8,57 -33,63 -290,69 -215,5 -222,6 -163,18 69,14 152,49 216,89 232,149 415,358 393,447 -3,14 -24,46 -47,72 -31,36 -37,49 -27,55 18,12 22,11 49,-10 z M 220,600 c 68,-73 56,-218 -27,-326 l -27,-36 21,-39 c 26,-47 21,-52 -7,-6 -27,44 -25,100 7,166 33,69 44,182 20,209 -49,56 -37,86 13,32 z M 575,211 C 575,189 429,112 339,85 220,50 153,54 93,101 c -30,22 -10,31 43,18 22,-4 59,-9 83,-9 39,0 42,2 30,17 -12,14 -10,14 13,-1 21,-13 38,-16 64,-11 41,7 136,56 178,92 30,25 71,28 71,4 z m 77,-87 c 35,-9 79,-26 98,-38 30,-18 49,-21 135,-20 92,1 97,0 65,-12 C 889,32 787,37 702,66 634,90 616,92 540,86 493,83 444,78 430,74 c -43,-9 27,27 90,47 70,22 58,22 132,3 z" />
        <path d="M 806,1652 C 712,1617 648,1555 607,1460 434,1065 458,674 673,400 716,345 813,272 868,254 c 43,-14 160,-6 221,16 70,24 161,101 217,182 80,117 110,251 101,522 -8,226 -46,418 -117,527 -48,73 -86,104 -175,145 -57,26 -75,29 -157,28 -70,0 -108,-6 -152,-22 z m 89,-172 c 2,-11 9,-50 16,-87 6,-38 15,-68 19,-68 4,0 13,33 20,73 7,39 14,75 17,80 7,11 41,-11 59,-38 15,-23 15,-28 0,-65 -9,-22 -13,-40 -9,-40 3,0 21,12 40,26 66,50 90,-6 26,-61 -36,-32 -40,-63 -5,-37 27,20 96,52 112,52 16,0 80,-131 80,-163 0,-35 -30,-31 -74,12 -38,38 -46,41 -94,41 -92,0 -131,-34 -177,-152 -25,-63 -25,-63 -19,-18 3,25 19,69 35,97 16,29 29,58 29,65 0,17 -45,-28 -66,-68 -18,-34 -34,-44 -34,-22 0,24 -55,81 -96,100 -43,19 -45,19 -87,0 -29,-13 -48,-30 -59,-52 -19,-39 -33,-24 -24,25 4,21 19,44 39,60 30,24 31,26 14,39 -22,17 -15,56 13,74 21,13 41,-1 137,-92 49,-46 63,-44 35,5 -31,57 -46,109 -33,122 8,8 14,3 23,-21 15,-40 24,-40 32,-1 10,51 7,104 -9,150 l -15,44 25,-30 c 14,-16 27,-39 30,-50 z m 138,-406 c 8,-62 -8,-240 -29,-328 -23,-100 -70,-185 -149,-269 -61,-64 -71,-72 -71,-51 0,13 21,56 47,96 100,152 166,341 176,501 3,56 9,102 13,102 4,0 10,-23 13,-51 z m -281,-46 c 13,-35 45,-46 53,-18 17,52 14,50 35,29 23,-22 40,-102 40,-183 0,-71 -10,-132 -21,-126 -13,8 -21,-13 -11,-31 6,-10 -1,-34 -20,-74 -15,-33 -28,-67 -28,-75 0,-9 -7,-18 -15,-21 -8,-4 -15,-10 -15,-16 0,-5 -14,-23 -31,-41 l -31,-32 21,30 c 25,36 41,85 41,175 0,62 -2,69 -37,110 -20,23 -54,85 -76,101 l -39,28 51,-6 c 47,-5 51,-4 45,13 -7,18 -42,73 -54,84 -15,14 -42,50 -38,50 3,0 22,-13 43,-30 20,-16 42,-27 47,-24 6,4 8,33 6,66 -4,52 -3,58 9,42 7,-10 19,-33 25,-51 z m 406,-7 c 34,-18 75,-62 96,-103 9,-18 20,-33 23,-33 4,0 20,12 35,27 43,41 36,2 -8,-47 -37,-40 -38,-47 -19,-106 5,-17 -1,-26 -29,-43 -37,-23 -47,-55 -22,-64 20,-8 47,-62 40,-81 -3,-8 -21,-20 -39,-26 -36,-12 -45,-26 -45,-68 v -27 h -98 c -102,0 -128,-9 -231,-77 -19,-12 -31,-17 -27,-10 4,7 47,39 94,71 92,62 192,150 192,169 0,15 -30,3 -31,-12 -1,-20 -203,-166 -230,-166 -3,0 10,17 29,38 19,20 51,61 69,90 25,39 40,52 58,52 21,0 24,6 29,45 3,25 9,65 12,90 6,55 19,64 38,28 l 14,-28 6,25 c 3,14 7,52 8,84 3,66 24,89 34,37 4,-17 11,-31 16,-31 33,0 11,120 -29,155 -32,27 -25,32 15,11 z" />
      </g>
    </svg>

  );
};

export default LogoSVG;
