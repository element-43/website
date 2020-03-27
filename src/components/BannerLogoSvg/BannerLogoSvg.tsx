import * as React from 'react';

// Components.
import StyledSvg from '../StyledSvg';

export interface IProps {
  color?: string;
  hoverColor?: string;
  size?: string;
}

export const BannerLogoSvg: React.FunctionComponent<IProps> = (
  props: IProps
) => (
  <StyledSvg
    color={props.color}
    hoverColor={props.hoverColor}
    size={props.size}
    viewBox="0 0 718.79938 315.95578"
  >
    <path d="m 610.90048,295.95339 c -8.34875,-0.74695 -16.90835,-3.36946 -26.20464,-8.02864 -11.00956,-5.51785 -23.09239,-13.98167 -34.91463,-24.45712 -1.25025,-1.10782 -2.326,-2.01422 -2.39057,-2.01422 -0.0646,0 -0.85687,0.65758 -1.76068,1.46129 -9.89851,8.80236 -19.64046,15.97218 -29.14952,21.45335 -3.27481,1.88765 -10.09738,5.24604 -13.08391,6.44051 -6.18548,2.47387 -11.75137,3.99682 -17.21959,4.71161 -2.56723,0.33559 -8.49338,0.3813 -10.6635,0.0823 -4.24555,-0.58504 -8.48538,-1.92592 -11.63666,-3.68019 -10.43085,-5.80671 -16.7644,-17.00673 -18.61467,-32.91749 -1.46672,-12.61259 0.24001,-29.18194 4.75156,-46.12954 0.48574,-1.82465 0.89465,-3.37605 0.90868,-3.44755 0.0141,-0.0715 -1.36073,-0.61302 -3.05504,-1.20335 -4.26805,-1.48705 -7.49015,-2.69735 -10.31376,-3.87408 -24.38465,-10.16229 -40.10364,-23.00905 -45.81879,-37.44659 -4.06964,-10.28066 -2.60221,-21.35465 4.12395,-31.12164 3.08784,-4.48383 7.78441,-9.22525 13.06705,-13.19184 9.27949,-6.96772 21.2045,-12.85292 36.01365,-17.77333 2.6906,-0.89397 4.91605,-1.69755 4.94545,-1.78574 0.0294,-0.0882 -0.12542,-0.82404 -0.34405,-1.63521 -0.21861,-0.81118 -0.72041,-2.896666 -1.11508,-4.634422 -0.39468,-1.737757 -0.75413,-3.319122 -0.79879,-3.514144 -0.0541,-0.236351 -0.38349,-0.507193 -0.9878,-0.812252 -3.56408,-1.799134 -6.34624,-5.467371 -7.41394,-9.775136 -0.39744,-1.603456 -0.35206,-5.094107 0.0877,-6.75155 0.69858,-2.63264 2.77833,-5.982594 4.65869,-7.50395 l 0.6834,-0.552922 0.10793,-3.516451 c 0.51662,-16.833111 5.07325,-29.089881 13.59025,-36.55602 7.7663,-6.808076 17.8691,-9.196517 30.19341,-7.138147 15.29215,2.554049 33.5931,12.377515 52.21169,28.02586 1.52054,1.277964 3.61493,3.078237 4.65422,4.000609 1.03929,0.922371 1.92924,1.677039 1.97768,1.677039 0.0485,0 0.61992,-0.470861 1.26995,-1.046357 13.38665,-11.851675 24.82986,-19.808432 36.98967,-25.719883 19.05496,-9.263494 35.62978,-10.143058 47.20959,-2.505237 4.94746,3.26325 8.61509,7.490612 11.50161,13.256931 7.35684,14.696535 7.55182,36.680854 0.56926,64.181492 -0.56029,2.20667 -0.99953,4.02755 -0.97607,4.0464 0.0235,0.0188 0.75354,0.26707 1.62242,0.55162 8.9675,2.93671 18.95017,7.24419 26.55518,11.45844 l 2.11948,1.1745 0.98653,-0.21929 c 3.19006,-0.70912 6.74139,-0.26415 9.6753,1.21228 4.60101,2.31535 7.71786,6.90747 8.08604,11.91329 l 0.0949,1.28996 1.26182,1.39566 c 6.71686,7.42934 10.20523,14.82439 10.8682,23.03969 0.49962,6.19116 -1.07883,12.80218 -4.46943,18.71932 -1.91389,3.34005 -4.05961,6.12266 -7.23104,9.37737 -3.52285,3.61535 -6.96233,6.42068 -11.84899,9.66433 -8.80847,5.84685 -19.15885,10.65548 -32.32408,15.0173 l -4.59896,1.52369 0.44977,1.75842 c 0.81952,3.204 2.01202,8.66601 2.57407,11.79002 3.73089,20.73679 2.82515,37.63682 -2.66591,49.74325 -5.05058,11.13533 -13.91044,17.96584 -25.55123,19.69877 -1.56349,0.23275 -7.18237,0.41904 -8.65776,0.28703 z M 485.782,280.72401 c 8.03575,-1.3142 17.32499,-5.28428 27.64613,-11.81551 7.01232,-4.43743 15.08076,-10.59988 21.92286,-16.7441 l 1.30674,-1.17346 -2.17562,-2.23453 c -6.19773,-6.36558 -13.32088,-14.50476 -19.8576,-22.69005 -1.63062,-2.04186 -3.08227,-3.79158 -3.22591,-3.88825 -0.14363,-0.0967 -1.61186,-0.33101 -3.26273,-0.52077 -13.12215,-1.50828 -28.83326,-4.39907 -40.50021,-7.45193 -1.33515,-0.34937 -2.44594,-0.61385 -2.4684,-0.58775 -0.20422,0.23718 -2.3822,9.15019 -3.06125,12.52769 -3.19013,15.86709 -3.3582,29.4136 -0.48817,39.34589 2.02146,6.99563 5.78503,11.92397 10.74841,14.07487 1.48174,0.64212 3.76471,1.25153 5.4924,1.46615 1.74753,0.21707 5.63629,0.0658 7.92335,-0.30825 z m 130.91578,0.3072 c 4.4583,-0.49712 7.81558,-2.03785 10.6324,-4.8794 8.86511,-8.94295 10.3426,-30.05054 3.93822,-56.26218 -0.44352,-1.81524 -0.85348,-3.32566 -0.91101,-3.35648 -0.0575,-0.0308 -0.99324,0.14602 -2.07934,0.39297 -12.28976,2.79444 -28.18204,5.15519 -41.86414,6.21874 -1.7812,0.13847 -3.45697,0.28458 -3.72392,0.32469 -0.40613,0.061 -0.81448,0.48695 -2.5014,2.60893 -5.97978,7.52202 -13.68008,16.30779 -19.80402,22.59567 l -2.25366,2.314 1.38479,1.25197 c 2.26186,2.04495 4.35324,3.80439 7.78289,6.54768 19.24205,15.3912 37.42502,23.57861 49.39919,22.24341 z m -66.43087,-43.31398 c 4.4564,-4.67119 11.74302,-12.76196 11.80005,-13.10232 0.01,-0.0598 -4.33602,-0.14566 -9.65787,-0.19087 -5.32183,-0.0452 -11.09786,-0.15384 -12.83562,-0.24138 -1.73776,-0.0875 -4.1506,-0.20782 -5.36187,-0.26728 l -2.2023,-0.10812 0.35859,0.45815 c 2.22749,2.84593 14.63373,16.33492 15.02371,16.33492 0.0686,0 1.36252,-1.2974 2.87531,-2.8831 z m 14.97797,-28.2357 c 2.4763,-0.0815 5.58729,-0.19688 6.91331,-0.25635 l 2.41097,-0.10814 2.42399,-3.2552 c 9.14953,-12.28698 17.9895,-25.98297 25.24721,-39.11618 2.50147,-4.52652 4.71068,-8.70113 4.71068,-8.90148 0,-0.37539 -5.07179,-9.62309 -8.39446,-15.30613 -6.45493,-11.0404 -12.65703,-20.47685 -20.48226,-31.16364 -1.4315,-1.95497 -2.61392,-3.56918 -2.62758,-3.58712 -0.11207,-0.14703 -11.89188,-0.98311 -18.57469,-1.31834 -8.46751,-0.42477 -27.90263,-0.34485 -35.22785,0.14487 l -1.49958,0.10024 -2.68684,3.64681 c -8.98183,12.1909 -16.12115,23.15996 -23.38319,35.92666 -2.98433,5.24646 -6.23888,11.26832 -6.23888,11.54374 0,0.4192 5.14959,9.83187 8.7657,16.02239 5.46939,9.36316 11.67373,18.88238 18.2255,27.96309 2.91732,4.04339 4.6013,6.24013 4.78357,6.24013 0.0932,0 1.85051,0.14095 3.90509,0.31321 6.24289,0.52343 14.68592,0.98248 21.35016,1.16084 4.14845,0.11101 16.40831,0.0813 20.37915,-0.0494 z m -38.60626,-21.88937 c -0.43348,-1.12962 -0.49864,-6.26876 -0.0974,-7.68133 0.11418,-0.40201 0.11379,-0.80488 -0.002,-1.31841 -0.39748,-1.7736 -0.34457,-6.42225 0.0858,-7.54186 0.10054,-0.26152 -0.43651,-0.27646 -9.93101,-0.27646 l -10.0373,0 -0.20287,-0.90837 c -0.22664,-1.01479 -0.27236,-4.45493 -0.0806,-6.06692 0.17816,-1.4979 0.27902,-1.59051 1.8303,-1.68032 1.23185,-0.0713 1.29545,-0.0929 1.20888,-0.40967 -0.31736,-1.16156 -0.43061,-3.36965 -0.27076,-5.27934 0.0939,-1.12168 0.21765,-2.16177 0.27504,-2.31131 0.15084,-0.39307 0.72831,-0.56366 1.90803,-0.56366 l 1.03632,0 -0.10762,-0.51343 c -0.3106,-1.48182 -0.40185,-3.46426 -0.24388,-5.29865 0.2427,-2.81826 0.17579,-2.71873 1.82731,-2.71873 1.34487,0 1.36341,-0.005 1.2488,-0.35545 -0.21599,-0.65987 -0.28109,-6.33053 -0.0836,-7.28186 l 0.18549,-0.89349 2.85082,0 2.85084,0 -0.11636,-0.35545 c -0.21722,-0.66362 -0.28385,-6.45049 -0.0845,-7.34115 l 0.18668,-0.83421 7.31774,0 c 6.42677,0 7.32906,0.0295 7.41062,0.24202 0.0511,0.1331 0.17904,1.01697 0.28436,1.96415 0.15523,1.39606 0.15057,2.10552 -0.0247,3.74693 -0.11888,1.11363 -0.18861,2.41578 -0.15496,2.89366 0.0337,0.47789 0.0639,6.35291 0.0672,13.05562 l 0.006,12.18674 2.71459,0.0592 c 1.49304,0.0326 2.77266,0.11708 2.8436,0.18781 0.21187,0.2112 0.24604,5.74995 0.0443,7.17257 l -0.18487,1.30332 -2.81734,0 -2.81736,0 0.10856,0.59242 c 0.0597,0.32583 0.10115,2.12085 0.0921,3.98894 -0.009,1.86809 -0.0118,3.75197 -0.006,4.18641 0.0484,3.70594 0.002,7.79103 -0.0909,8.01738 -0.1043,0.25398 -0.47217,0.27646 -4.52496,0.27646 -3.82863,0 -4.4238,-0.0322 -4.5049,-0.24355 z m -0.14144,-26.17825 c -0.24262,-0.97247 -0.22864,-6.19751 0.0189,-7.04074 0.16161,-0.55067 0.16161,-0.85511 -3e-5,-1.57977 -0.26226,-1.1757 -0.26658,-6.19282 -0.006,-7.08226 0.15095,-0.51544 0.15049,-0.83587 -0.002,-1.50079 -0.24712,-1.07631 -0.2567,-6.15744 -0.0131,-6.96706 l 0.17822,-0.59242 -2.73525,0 -2.73524,0 0.13758,0.59242 c 0.1557,0.67054 0.16131,6.50158 0.007,7.22749 -0.10038,0.47199 -0.10675,0.47449 -1.55126,0.60798 l -1.45048,0.13406 0.15204,0.39988 c 0.43651,1.14809 0.2921,7.30399 -0.18482,7.87864 -0.12883,0.15523 -0.55376,0.22115 -1.42559,0.22115 l -1.24205,0 0.11605,0.98736 c 0.14963,1.27295 0.14992,5.66208 0,6.63507 l -0.11528,0.7504 5.5094,0 5.50942,0 -0.16751,-0.67141 z m 30.89545,25.82938 c -0.0691,-0.32583 -0.12564,-1.97867 -0.12564,-3.67298 0,-1.69431 0.0565,-3.34716 0.12564,-3.67299 l 0.12564,-0.59241 -2.8436,0 -2.8436,0 -0.12564,-0.59242 c -0.20814,-0.98138 -0.15278,-7.16326 0.0686,-7.66193 l 0.19287,-0.43444 3.83487,0.002 c 4.20997,0.002 4.95061,0.0675 5.10186,0.45182 0.33136,0.84194 0.20338,6.29248 -0.18131,7.7218 l -0.0957,0.35545 7.03166,0 7.03164,0 -0.16629,-0.67141 c -0.23192,-0.93649 -0.23548,-6.01425 -0.005,-6.99599 0.12564,-0.53489 0.13903,-1.00052 0.0409,-1.4218 -0.38897,-1.66957 -0.33115,-6.43884 0.0914,-7.53798 0.10002,-0.26015 -0.22982,-0.27646 -5.59066,-0.27646 l -5.69695,0 -0.12564,-0.59241 c -0.20814,-0.98138 -0.15278,-7.16326 0.0686,-7.66193 l 0.19287,-0.43444 5.59534,0 5.59533,0 -0.16795,-0.67141 c -0.23367,-0.9342 -0.23171,-6.35661 0.003,-7.13156 0.14264,-0.4718 0.14257,-0.80282 0,-1.4218 -0.24056,-1.04213 -0.24414,-6.29288 -0.005,-7.08645 l 0.17864,-0.59242 -6.95671,0 -6.95672,0 0.0959,0.43444 c 0.0527,0.23895 0.13939,1.53634 0.19256,2.8831 0.10365,2.62456 -0.0881,4.85444 -0.43652,5.07531 -0.1155,0.0732 -2.11341,0.13421 -4.43983,0.13554 l -4.22981,0.002 -0.19008,-0.43444 c -0.27617,-0.63118 -0.27102,-7.41392 0.006,-7.89889 0.19845,-0.34744 0.26564,-0.35545 2.9805,-0.35545 l 2.77747,0 -0.11379,-0.43444 c -0.21415,-0.81771 -0.27804,-6.27846 -0.0844,-7.21141 l 0.18372,-0.88496 10.23894,0 10.23892,0 0.0953,0.35545 c 0.16511,0.61607 0.10749,5.8133 -0.0761,6.86771 -0.0966,0.5549 -0.1303,1.05432 -0.0748,1.10981 0.0555,0.0555 1.33888,0.13156 2.85196,0.16904 2.19974,0.0545 2.76851,0.1136 2.83813,0.29501 0.0479,0.12479 0.17236,1.04507 0.27659,2.04506 0.15381,1.47564 0.14831,2.19556 -0.0292,3.82138 -0.12029,1.10176 -0.20675,2.25202 -0.19214,2.55613 0.1503,3.12729 0.19365,7.45634 0.0791,7.89889 l -0.14311,0.55293 -2.83392,0.0919 c -1.55866,0.0505 -2.8442,0.10385 -2.85678,0.11849 -0.0126,0.0146 0.039,0.29319 0.11472,0.61902 0.18283,0.78731 0.17673,6.1107 -0.008,6.90709 -0.08,0.34512 -0.11248,0.66048 -0.0722,0.70081 0.0403,0.0403 1.29824,0.10461 2.79537,0.14283 1.62186,0.0414 2.764,0.1354 2.82583,0.23259 0.0571,0.0897 0.19136,0.87801 0.29839,1.7518 0.20221,1.65068 0.13148,4.06769 -0.16463,5.62665 -0.11634,0.61245 -0.11359,1.21717 0.009,2.05804 0.23913,1.6355 0.13861,7.02161 -0.13618,7.29616 -0.14769,0.14755 -0.96717,0.22027 -2.92259,0.25936 l -2.71736,0.0543 0,3.89513 c 0,2.14232 -0.0511,4.01954 -0.11352,4.1716 -0.10645,0.25922 -0.74345,0.27646 -10.22192,0.27646 l -10.10838,0 -0.12564,-0.59242 z m 42.68637,19.45165 c 5.15828,-0.67928 9.00965,-1.28215 14.12475,-2.21104 4.37015,-0.79362 11.65132,-2.32419 11.80963,-2.48252 0.19973,-0.19973 -3.02481,-9.09425 -5.70822,-15.74545 -1.38422,-3.43098 -2.93152,-7.06076 -4.74032,-11.12022 l -0.41467,-0.93065 -1.66749,2.90537 c -5.28046,9.20053 -11.62569,19.28699 -17.16488,27.28558 -1.10275,1.59236 -2.00499,2.92774 -2.00499,2.96752 0,0.085 0.36207,0.043 5.76619,-0.66859 z m -104.1376,-6.02076 c -5.15675,-7.67931 -10.44593,-16.19305 -14.72329,-23.69945 -0.80456,-1.41193 -1.51294,-2.56714 -1.57418,-2.56714 -0.13536,0 -2.56534,5.47859 -4.45874,10.05261 -2.08983,5.04853 -5.37286,13.73336 -5.54089,14.65771 -0.0472,0.2596 0.14754,0.35489 1.36677,0.66886 5.65402,1.45599 12.63431,2.98125 18.64139,4.07333 5.09625,0.9265 9.30371,1.62866 9.38374,1.56604 0.0347,-0.0271 -1.35798,-2.16552 -3.0948,-4.75196 z m 147.7395,-3.43841 c 14.20733,-4.50306 26.88485,-10.7066 34.91311,-17.0842 2.14845,-1.70671 5.86278,-5.39619 7.13453,-7.08679 2.84438,-3.78117 4.29384,-7.17566 4.67744,-10.95405 0.41051,-4.04346 -0.87458,-8.34202 -3.7711,-12.61419 -0.5752,-0.84836 -1.19789,-1.72763 -1.38378,-1.95394 l -0.33798,-0.41148 -1.02685,0.42107 c -1.97433,0.8096 -3.19544,1.02714 -5.68721,1.01318 -2.66534,-0.0149 -3.98169,-0.3013 -6.14982,-1.33782 -1.80383,-0.86236 -3.04373,-1.77768 -4.48858,-3.31357 -1.87721,-1.99546 -3.08393,-4.28673 -3.67706,-6.98178 -0.22634,-1.02838 -0.29988,-3.3691 -0.17261,-5.4946 l 0.0331,-0.55292 -3.47552,-1.74174 c -5.73113,-2.87214 -11.26309,-5.17951 -17.73889,-7.39885 -2.15169,-0.73741 -3.067,-0.9869 -3.11521,-0.84913 -2.84711,8.13562 -5.5537,14.98313 -9.02108,22.8228 -1.48738,3.36294 -4.88246,10.63651 -6.06774,12.9994 l -0.59588,1.18792 1.71918,3.55142 c 5.40275,11.16081 10.04251,22.31675 13.90269,33.4279 1.1488,3.30673 1.16257,3.33517 1.55932,3.21932 0.22014,-0.0643 1.46662,-0.45486 2.76994,-0.86795 z m -187.52255,-4.50274 c 3.30512,-9.43078 7.92204,-20.38953 13.1781,-31.27963 l 1.71558,-3.5545 -0.90934,-1.81674 c -2.12756,-4.25066 -6.01041,-12.73692 -8.16783,-17.85151 -2.43668,-5.77661 -5.89951,-14.86728 -7.38193,-19.3792 l -0.42408,-1.29074 -0.66262,0.21585 c -0.36444,0.11872 -2.01333,0.65425 -3.6642,1.19008 -11.26038,3.65481 -21.90436,8.55774 -29.22591,13.4623 -9.69934,6.4974 -15.19667,13.48311 -16.18129,20.56227 -0.22678,1.6305 -0.21225,2.71772 0.0604,4.51275 1.8078,11.90412 17.13785,24.6242 41.08144,34.08723 3.79594,1.50024 9.60551,3.51672 9.73548,3.37915 0.0543,-0.0575 0.43516,-1.06433 0.84624,-2.23731 z m 24.81494,-53.51501 c 1.67885,-2.96296 6.42149,-10.8709 8.59803,-14.3365 2.07867,-3.30974 7.55153,-11.60173 9.53246,-14.44271 0.75259,-1.07936 1.3432,-1.98762 1.31245,-2.01838 -0.0733,-0.0733 -4.53303,0.47404 -8.71006,1.06889 -6.15305,0.87625 -12.55425,2.00309 -18.32544,3.22593 -1.47709,0.31298 -3.06534,0.64807 -3.52944,0.74466 -0.46411,0.0966 -0.87553,0.25822 -0.91427,0.35918 -0.15357,0.4002 3.54569,10.54273 6.32002,17.32807 1.56025,3.81598 4.34679,10.24305 4.44101,10.24305 0.0244,0 0.59831,-0.97749 1.27524,-2.17219 z m 137.04972,-4.4258 c 2.86359,-6.71941 7.27533,-18.23533 7.0661,-18.44456 -0.11965,-0.11965 -7.94471,-1.98641 -11.503,-2.74419 -7.32675,-1.5603 -17.72694,-3.4124 -17.81969,-3.17339 -0.026,0.0669 0.46835,0.85764 1.09844,1.75728 4.52983,6.46769 11.98542,18.35786 16.72299,26.66984 l 1.48265,2.60127 0.6931,-1.49543 c 0.3812,-0.82248 1.39794,-3.14935 2.25941,-5.17082 z m 12.53514,-36.70069 c 4.21211,-16.62986 5.58202,-30.775699 4.02996,-41.614434 -0.32774,-2.288814 -1.01729,-5.401432 -1.5924,-7.187994 -0.41431,-1.287108 -1.62268,-4.11483 -2.16025,-5.055293 -1.66299,-2.909294 -4.19957,-5.656025 -6.47644,-7.012973 -7.66312,-4.567002 -19.22561,-3.043795 -33.91667,4.468081 -9.9121,5.068286 -21.24926,13.129463 -31.72422,22.557222 l -0.60259,0.542338 2.26136,2.328611 c 6.35578,6.544831 13.87741,15.150672 20.17948,23.088287 1.41418,1.781201 2.6257,3.296477 2.69226,3.36728 0.0666,0.0708 2.31663,0.405354 5.00017,0.743445 13.88553,1.749399 26.39186,4.074887 38.52845,7.16417 1.47709,0.37598 2.70321,0.67086 2.72469,0.65528 0.0215,-0.0156 0.49678,-1.83539 1.0562,-4.04402 z m -161.67091,0.256064 c 11.96999,-2.568533 26.08387,-4.623898 38.53773,-5.61214 2.30253,-0.182711 4.40986,-0.382412 4.68297,-0.443779 0.40005,-0.08989 0.90423,-0.618173 2.5942,-2.718211 6.51217,-8.092315 13.56386,-16.137571 19.4934,-22.239956 1.37437,-1.414437 2.47129,-2.591271 2.43761,-2.615183 -0.0337,-0.02391 -0.91434,-0.794139 -1.957,-1.711613 -23.14549,-20.366685 -45.65156,-30.966034 -59.11948,-27.842617 -6.47534,1.501734 -10.86383,5.933011 -13.49661,13.628191 -1.38996,4.062617 -2.34441,10.346922 -2.34441,15.435984 l 0,1.763845 1.25888,0.731458 c 2.62755,1.526711 4.44483,3.49531 5.85379,6.341201 1.14524,2.31324 1.4839,3.778342 1.47892,6.398105 -0.003,1.443622 -0.0889,2.476594 -0.26665,3.197047 -0.72592,2.942319 -2.24243,5.596618 -4.29019,7.509002 l -1.18041,1.102368 0.76656,3.298004 c 1.00801,4.336809 1.0952,4.640815 1.33087,4.640815 0.11014,0 2.00906,-0.388134 4.21982,-0.862521 z m 93.65435,-6.680923 c -1.81796,-2.345049 -13.58251,-15.215492 -14.90948,-16.310995 -0.26589,-0.219523 -0.44694,-0.07013 -2.48882,2.053713 -2.8984,3.01476 -7.60112,8.14486 -10.35418,11.295196 l -2.20891,2.527646 9.4208,0.09649 c 8.05748,0.08253 17.54985,0.355038 18.34656,0.526703 0.13033,0.02808 0.72553,0.0593 1.32265,0.06938 1.01162,0.01707 1.07108,-4.74e-4 0.87138,-0.258136 z M 13.447324,190.59388 c -0.258137,-1.73561 -0.223513,-7.016 0.05461,-8.32848 0.196896,-0.92915 0.196539,-1.22353 -0.0027,-2.26509 -0.301711,-1.57691 -0.306922,-6.84822 -0.0082,-8.27468 0.179782,-0.85843 0.180139,-1.21455 0.0022,-2.21169 -0.282422,-1.58281 -0.281822,-6.82791 9.48e-4,-8.29006 0.177971,-0.92026 0.177924,-1.29179 -3e-4,-2.29068 -0.292186,-1.63767 -0.289001,-6.86165 0.005,-8.24894 0.191664,-0.90431 0.192056,-1.22872 0.0028,-2.29068 -0.293869,-1.6487 -0.300622,-6.87904 -0.01067,-8.26352 0.179782,-0.85844 0.18014,-1.21455 0.0022,-2.21169 -0.286202,-1.60399 -0.287789,-7.00928 -0.0025,-8.37167 0.182741,-0.87255 0.180355,-1.21727 -0.01631,-2.35692 -0.289606,-1.67824 -0.219562,-7.86052 0.0982,-8.66687 l 0.20233,-0.51343 15.945271,0 c 15.037405,0 15.951733,0.0157 16.058795,0.27647 0.212956,0.51859 0.128,7.77878 -0.106294,9.08372 l -0.21982,1.22433 -10.154305,0 c -5.584869,0 -10.259675,0.0404 -10.38846,0.0899 -0.193719,0.0743 -0.203842,0.19027 -0.05863,0.6714 0.229354,0.75991 0.217108,6.99039 -0.01683,8.56215 -0.127469,0.85644 -0.129679,1.49512 -0.0079,2.29068 0.230179,1.50403 0.250639,7.89467 0.02763,8.62877 l -0.174561,0.57461 0.574766,0.0951 c 0.316122,0.0523 5.037897,0.0958 10.492836,0.0968 9.29627,0.002 9.925188,0.0191 10.031596,0.2782 0.212955,0.5186 0.128,7.77879 -0.106294,9.08373 l -0.21982,1.22433 -10.42261,0 -10.422609,0 0.09804,0.43444 c 0.05392,0.23894 0.181481,1.57924 0.283462,2.97845 0.146574,2.01101 0.143004,2.9874 -0.01704,4.66035 -0.257452,2.69112 -0.257809,2.78777 -0.02004,5.43387 0.187057,2.08174 0.142136,5.42692 -0.09259,6.8948 l -0.09741,0.60915 10.450641,0 10.450642,0 0.168406,0.43444 c 0.229189,0.59125 0.100507,9.1184 -0.14662,9.71564 l -0.179764,0.43444 -15.940473,0 -15.940472,0 -0.177182,-1.19128 z m 52.555579,0.51987 c -0.28351,-0.94227 -0.284747,-8.30764 -0.0016,-9.2417 l 0.203563,-0.67141 5.303071,0 c 4.546727,0 5.290641,-0.0324 5.215919,-0.22712 -0.500058,-1.30313 -0.676797,-7.13196 -0.277385,-9.14819 0.180422,-0.91076 0.180338,-1.30975 -4.74e-4,-2.52764 -0.278507,-1.87541 -0.280464,-6.28746 -0.0035,-7.96277 0.18124,-1.09641 0.181628,-1.51022 0.0024,-2.60664 -0.280891,-1.71868 -0.280006,-6.31849 0.0016,-7.90067 0.185924,-1.04491 0.185635,-1.44182 -0.002,-2.68563 -0.281347,-1.86544 -0.280641,-6.29528 0.0013,-7.88782 0.181224,-1.02379 0.181354,-1.42164 7.9e-4,-2.52764 -0.300139,-1.83874 -0.271602,-6.8478 0.0464,-8.14516 l 0.242019,-0.98736 -3.522154,0 -3.522153,0 -0.207141,-0.90837 c -0.289949,-1.27152 -0.287519,-7.71662 0.0033,-8.84806 l 0.21354,-0.83068 8.949177,0.0408 8.949127,0.0408 0.21094,0.94787 c 0.295774,1.32908 0.327363,6.76034 0.04812,8.27291 -0.176057,0.95362 -0.17949,1.42456 -0.019,2.60663 0.139532,1.02773 0.162591,2.44248 0.08016,4.91825 -0.06364,1.91153 -0.09378,4.04423 -0.06698,4.73934 0.02681,0.6951 0.04251,2.89889 0.03489,4.89731 -0.0076,1.99842 -0.01207,4.41548 -0.0099,5.37125 0.0022,0.95576 0.0017,3.44392 -0.0011,5.52922 -0.0028,2.08531 -7.9e-4,4.36019 0.0045,5.0553 0.0052,0.6951 0.0053,3.07662 1.58e-4,5.29226 -0.0051,2.21564 -0.0052,4.59715 -5.5e-5,5.29226 0.04314,5.86899 0.01699,9.08203 -0.07734,9.50363 l -0.111628,0.49891 5.193377,0.054 c 2.856357,0.0297 5.252561,0.11346 5.324899,0.18612 0.212676,0.21358 0.147523,9.5869 -0.07018,10.09698 l -0.18542,0.43444 -15.874599,0 -15.874598,0 -0.202009,-0.67141 z m 56.575827,0.0798 c -0.10626,-0.34002 -0.21748,-2.07679 -0.26054,-4.06877 -0.0691,-3.19381 0.004,-4.30287 0.36582,-5.56872 l 0.10166,-0.35545 -3.55717,0 -3.55717,0 -0.21323,-0.82938 c -0.1503,-0.58459 -0.21169,-1.92515 -0.208,-4.54187 0.004,-3.08847 0.0496,-3.82534 0.26945,-4.38388 l 0.26422,-0.67141 -1.80672,0 c -1.74439,0 -1.80952,-0.0123 -1.88753,-0.35545 -0.51615,-2.27079 -0.63568,-4.25136 -0.41299,-6.84327 0.19069,-2.21946 0.36541,-3.05262 0.68235,-3.25379 0.1102,-0.0699 0.9159,-0.12827 1.79044,-0.12959 l 1.59008,-0.002 -0.22919,-1.22433 c -0.30871,-1.64908 -0.31439,-7.37761 -0.008,-8.49131 l 0.21701,-0.78989 3.53263,-0.0426 3.53263,-0.0426 -0.0968,-0.35238 c -0.46052,-1.67601 -0.53848,-8.30575 -0.11327,-9.63358 l 0.1897,-0.59242 12.46351,0 c 9.79732,0 12.49084,0.0422 12.59131,0.19747 0.21973,0.33951 0.25494,6.86164 0.0461,8.53837 -0.10604,0.85132 -0.15654,1.58411 -0.11223,1.62842 0.0443,0.0443 1.61546,0.12306 3.49144,0.17499 2.93385,0.0812 3.42096,0.12965 3.48308,0.34631 0.47546,1.65834 0.568,6.12356 0.17965,8.66839 -0.20775,1.36136 -0.21623,1.80768 -0.0525,2.76461 0.2602,1.52094 0.26224,8.40057 0.003,8.9997 l -0.18785,0.43357 -13.94578,0.0404 -13.94579,0.0403 0.079,0.78988 c 0.1254,1.25394 0.0916,7.81438 -0.0449,8.72828 l -0.12393,0.82939 12.33268,0 c 11.59683,0 12.33944,0.0165 12.4462,0.27646 0.21871,0.53262 0.0973,8.42305 -0.14404,9.36019 l -0.22375,0.86888 -14.16717,0.0403 -14.16717,0.0403 -0.1854,-0.59327 z m 21.11363,-31.56746 c -0.53389,-2.1272 -0.53932,-7.52126 -0.01,-9.58662 l 0.11141,-0.43444 -8.05425,0 c -4.42984,0 -8.27585,0.0443 -8.54668,0.0985 -0.48104,0.0962 -0.48972,0.11356 -0.3752,0.75039 0.19971,1.11052 0.1411,8.48605 -0.072,9.06423 l -0.18926,0.51343 8.61871,0 8.6187,0 -0.10177,-0.40548 z m 20.27598,31.56662 c -0.10778,-0.34422 -0.21578,-2.08158 -0.25777,-4.14692 -0.0571,-2.80763 -0.0213,-3.79562 0.17006,-4.70205 0.21422,-1.01452 0.21579,-1.28629 0.0134,-2.34408 -0.30159,-1.57629 -0.30673,-6.84794 -0.008,-8.27406 0.17977,-0.85843 0.18014,-1.21455 0.002,-2.21169 -0.28637,-1.60483 -0.28779,-7.00927 -0.002,-8.37283 0.17977,-0.85843 0.18014,-1.21455 0.002,-2.21169 -0.29011,-1.62581 -0.28725,-6.86294 0.004,-8.21851 0.19182,-0.89134 0.18967,-1.21282 -0.0163,-2.43591 -0.29591,-1.75706 -0.23153,-7.9219 0.0913,-8.74103 l 0.20233,-0.51343 3.6877,0 c 2.77668,0 3.71927,0.0488 3.81551,0.19748 0.21213,0.32775 0.24987,7.01126 0.0487,8.62303 -0.10122,0.811 -0.15691,1.50169 -0.12372,1.53487 0.0332,0.0332 0.73994,0.10809 1.57057,0.16648 l 1.51025,0.10616 -0.20682,-1.00362 c -0.48024,-2.33039 -0.42043,-7.60983 0.10322,-9.11097 l 0.1791,-0.51343 5.43973,0 c 5.03215,0 5.44825,0.0207 5.55327,0.27646 0.15951,0.38846 0.14201,7.79616 -0.0214,9.06566 l -0.13496,1.04827 1.47777,0.10837 c 2.01757,0.14794 1.97914,0.12897 2.18869,1.08009 0.32646,1.48173 0.37801,5.51869 0.0975,7.63599 -0.20627,1.55708 -0.22098,2.16054 -0.0785,3.2196 0.11609,0.86272 0.13737,2.53816 0.0629,4.95579 -0.0618,2.00884 -0.0888,4.1856 -0.0598,4.83726 0.065,1.46244 0.0654,8.05221 0,9.55767 -0.0262,0.60821 0.002,3.02598 0.0601,5.37281 0.0761,3.01497 0.0548,4.4635 -0.0727,4.93681 l -0.18036,0.66984 -3.69896,0 -3.69897,0 -0.18553,-0.59242 c -0.31076,-0.99231 -0.37735,-7.4773 -0.0907,-8.83455 0.20874,-0.98842 0.21115,-1.29101 0.0189,-2.36967 -0.30797,-1.7278 -0.30515,-6.81719 0.005,-8.3169 0.18424,-0.89204 0.19693,-1.26329 0.0578,-1.6916 -0.29673,-0.9133 -0.36396,-7.44973 -0.0901,-8.76358 0.1965,-0.94289 0.1994,-1.28045 0.0197,-2.29068 -0.38226,-2.14843 -0.26959,-7.88687 0.17757,-9.04424 0.0997,-0.25796 -0.1174,-0.27646 -3.24452,-0.27646 -3.12966,0 -3.34384,0.0183 -3.23789,0.27646 0.42122,1.02633 0.47286,7.35494 0.0757,9.2812 -0.11703,0.56767 -0.1094,1.12323 0.0271,1.97473 0.23874,1.48894 0.24221,7.16798 0.005,8.51526 -0.13202,0.75052 -0.13186,1.32087 0,2.21169 0.25185,1.69325 0.24689,7.80752 -0.007,8.67605 -0.15992,0.54703 -0.1606,0.92362 -0.003,1.89573 0.26325,1.6283 0.26753,7.78241 0.006,8.67757 l -0.19613,0.67141 -5.43671,0 -5.43673,0 -0.18553,-0.59242 z m 31.7103,0.47171 c -0.42791,-0.69239 -0.67315,-5.39548 -0.40559,-7.77819 0.2564,-2.2833 0.25493,-3.16377 -0.01,-5.94617 -0.17728,-1.86237 -0.17782,-2.5846 -0.003,-4.3444 0.26297,-2.65058 0.26316,-3.29747 0.002,-6.1893 -0.17726,-1.96155 -0.17688,-2.67831 0.002,-4.42338 0.26387,-2.57048 0.26363,-3.21845 -0.002,-6.16114 -0.16664,-1.84416 -0.17338,-2.7697 -0.0318,-4.36191 0.0989,-1.11157 0.25057,-2.20731 0.33712,-2.43496 l 0.15736,-0.41392 -3.50995,-0.0425 -3.51002,-0.0425 -0.20398,-1.18483 c -0.25589,-1.48628 -0.18662,-8.22968 0.0913,-8.88626 l 0.18387,-0.43444 7.18258,0 c 5.57259,0 7.21123,0.0443 7.31039,0.19748 0.21214,0.32775 0.24988,7.01126 0.0487,8.62303 -0.10122,0.811 -0.1545,1.50407 -0.11841,1.54017 0.0361,0.0361 0.82065,0.11183 1.74346,0.1683 1.64673,0.10075 1.67939,0.11027 1.76117,0.51354 0.47332,2.33396 0.54082,5.83892 0.16002,8.30977 -0.20217,1.31185 -0.21212,1.83432 -0.0586,3.08057 0.12587,1.02206 0.1482,2.60945 0.07,4.97631 -0.0632,1.91153 -0.0902,4.07978 -0.06,4.81832 0.13,3.18338 0.0524,9.40755 -0.12092,9.70065 -0.13159,0.22254 -0.13189,0.44894 -0.002,0.86888 0.26398,0.84787 0.24335,9.14427 -0.0239,9.61215 l -0.20303,0.35545 -5.35637,0 c -2.946,0 -5.38994,-0.0543 -5.43096,-0.12071 z m 31.7974,-0.47087 c -0.10626,-0.34002 -0.21747,-2.07679 -0.26054,-4.06877 -0.0691,-3.19381 0.004,-4.30287 0.36583,-5.56872 l 0.10166,-0.35545 -3.55717,0 -3.55717,0 -0.21324,-0.82938 c -0.15029,-0.58459 -0.21168,-1.92515 -0.208,-4.54187 0.004,-3.08847 0.0497,-3.82534 0.26947,-4.38388 l 0.26421,-0.67141 -1.80673,0 c -1.74439,0 -1.80951,-0.0123 -1.88752,-0.35545 -0.51616,-2.27079 -0.63568,-4.25136 -0.413,-6.84327 0.1907,-2.21946 0.36542,-3.05262 0.68236,-3.25379 0.1102,-0.0699 0.91589,-0.12827 1.79044,-0.12959 l 1.59008,-0.002 -0.2292,-1.22433 c -0.3087,-1.64908 -0.31439,-7.37761 -0.008,-8.49131 l 0.21701,-0.78989 3.53264,-0.0426 3.53263,-0.0426 -0.0968,-0.35238 c -0.46052,-1.67601 -0.53848,-8.30575 -0.11327,-9.63358 l 0.1897,-0.59242 12.46351,0 c 9.79731,0 12.49084,0.0422 12.59131,0.19747 0.21973,0.33951 0.25494,6.86164 0.0461,8.53837 -0.10604,0.85132 -0.15654,1.58411 -0.11223,1.62842 0.0443,0.0443 1.61547,0.12306 3.49144,0.17499 2.93385,0.0812 3.42096,0.12965 3.48308,0.34631 0.47546,1.65834 0.56801,6.12356 0.17965,8.66839 -0.20774,1.36136 -0.21622,1.80768 -0.0525,2.76461 0.26019,1.52094 0.26223,8.40057 0.003,8.9997 l -0.18785,0.43357 -13.94578,0.0404 -13.94578,0.0403 0.079,0.78988 c 0.12538,1.25394 0.0916,7.81438 -0.0449,8.72828 l -0.12394,0.82939 12.33267,0 c 11.59685,0 12.33945,0.0165 12.44621,0.27646 0.21871,0.53262 0.0973,8.42305 -0.14402,9.36019 l -0.22376,0.86888 -14.16718,0.0403 -14.16715,0.0403 -0.18542,-0.59327 z m 21.11363,-31.56746 c -0.53388,-2.1272 -0.53932,-7.52126 -0.01,-9.58662 l 0.1114,-0.43444 -8.05425,0 c -4.42984,0 -8.27584,0.0443 -8.54668,0.0985 -0.48104,0.0962 -0.48972,0.11356 -0.3752,0.75039 0.1997,1.11052 0.14111,8.48605 -0.072,9.06423 l -0.18926,0.51343 8.61871,0 8.6187,0 -0.10177,-0.40548 z m 20.27599,31.56662 c -0.10779,-0.34422 -0.21578,-2.08158 -0.25777,-4.14692 -0.0571,-2.80763 -0.0213,-3.79562 0.17006,-4.70205 0.21422,-1.01452 0.21578,-1.28629 0.0134,-2.34408 -0.3016,-1.57629 -0.30673,-6.84794 -0.008,-8.27406 0.17978,-0.85843 0.18014,-1.21455 0.002,-2.21169 -0.28243,-1.58281 -0.28183,-6.82791 0.002,-8.29006 0.17797,-0.92026 0.17792,-1.29179 0,-2.29068 -0.29074,-1.62958 -0.28831,-6.86481 0.004,-8.22229 0.19209,-0.89259 0.1897,-1.21254 -0.0182,-2.4469 -0.29477,-1.74997 -0.22716,-7.89832 0.096,-8.73004 l 0.1995,-0.51343 5.43869,0 5.43869,0 0.18442,0.43444 c 0.24188,0.56979 0.2348,6.75433 -0.01,8.55814 -0.0992,0.73186 -0.16276,1.34833 -0.14115,1.36994 0.0216,0.0216 0.72983,0.09 1.57384,0.15192 l 1.53458,0.11265 -0.17556,-0.53471 c -0.2719,-0.82811 -0.3442,-8.07279 -0.0913,-9.14451 l 0.20506,-0.86888 10.72981,-0.0406 c 7.36818,-0.0279 10.78211,0.0116 10.89679,0.12609 0.27003,0.26955 0.30899,7.22344 0.0496,8.85797 l -0.21589,1.3605 1.50945,0.1 c 0.83019,0.055 2.41019,0.10033 3.51111,0.10079 l 2.00167,7.8e-4 0.0885,0.43444 c 0.48199,2.36598 0.54741,5.7952 0.16013,8.39206 -0.21103,1.41502 -0.22023,1.9026 -0.0585,3.10084 0.13505,1.00045 0.15756,2.45173 0.076,4.89731 -0.0638,1.91153 -0.0912,4.07978 -0.0611,4.81833 0.13,3.18338 0.0524,9.40755 -0.12092,9.70064 -0.13159,0.22255 -0.13189,0.44895 -0.002,0.86888 0.26485,0.85068 0.24329,9.14435 -0.025,9.61422 l -0.20414,0.35752 -5.40407,-0.0416 -5.40408,-0.0416 -0.18899,-0.94786 c -0.32944,-1.65225 -0.41908,-4.89179 -0.19015,-6.87204 0.25899,-2.24029 0.25687,-3.10695 -0.0145,-5.96052 -0.17918,-1.884 -0.17949,-2.57476 -0.002,-4.26541 0.26539,-2.52768 0.26605,-3.34714 0.005,-6.22049 -0.17384,-1.91376 -0.17401,-2.65486 -0.002,-4.34439 0.26203,-2.55907 0.26182,-3.36784 -0.002,-6.27359 -0.16733,-1.84597 -0.17418,-2.76813 -0.0324,-4.3619 0.0989,-1.11158 0.25108,-2.20867 0.33826,-2.43798 l 0.15852,-0.41693 -8.6089,0 -8.60889,0 0.12149,0.43444 c 0.16262,0.58147 0.15582,8.09323 -0.008,9.24171 l -0.12984,0.90837 -1.23272,0 c -0.67797,0 -1.44711,0.0429 -1.70914,0.0953 -0.46738,0.0935 -0.47313,0.10625 -0.30242,0.6714 0.23109,0.76506 0.21306,7.00109 -0.0249,8.60376 -0.13935,0.93868 -0.13909,1.50668 0.002,2.36967 0.25069,1.54303 0.25148,7.88562 0.002,8.74654 -0.15049,0.51741 -0.15075,0.91082 -0.002,1.81675 0.25829,1.5645 0.25782,7.73591 0,8.62076 l -0.19613,0.6714 -5.43672,0 -5.43673,0 -0.18553,-0.59242 z m 69.82725,0.002 c -0.26504,-0.84983 -0.38411,-7.19343 -0.15924,-8.48468 0.0988,-0.56728 0.21989,-1.13636 0.26912,-1.26466 0.0751,-0.1957 -0.19896,-0.24045 -1.70261,-0.27805 l -1.79212,-0.0453 -0.20916,-0.94787 c -0.31141,-1.41121 -0.30646,-7.26826 0.007,-8.64929 0.2173,-0.95639 0.21745,-1.1763 0.002,-2.1327 -0.17206,-0.76222 -0.24071,-1.96745 -0.24071,-4.22591 0,-2.25845 0.0687,-3.46368 0.24071,-4.2259 0.21576,-0.95587 0.21568,-1.17685 -0.002,-2.13271 -0.33351,-1.47237 -0.33302,-7.18545 0,-8.37282 l 0.23311,-0.82939 -5.26302,0 -5.26303,0 -0.20318,-0.6714 c -0.29039,-0.95962 -0.28572,-8.49729 0.006,-9.3207 l 0.20971,-0.59242 5.29691,0 c 4.98027,0 5.29049,-0.0165 5.18952,-0.27646 -0.51396,-1.32319 -0.64704,-7.44417 -0.2045,-9.40543 0.18997,-0.84189 0.20466,-1.21504 0.0684,-1.73776 -0.2618,-1.00424 -0.24155,-8.24748 0.0252,-9.00105 l 0.21039,-0.59447 5.39782,0.0416 5.3978,0.0416 0.21339,0.94787 c 0.29418,1.30675 0.32747,6.74735 0.0504,8.24466 -0.16789,0.90742 -0.173,1.43129 -0.0254,2.60664 0.20114,1.60199 0.15079,8.38694 -0.0657,8.85644 -0.12039,0.26107 0.26508,0.27646 6.9244,0.27646 6.5675,0 7.05966,0.019 7.1654,0.27646 0.0624,0.15206 0.11281,2.05372 0.11194,4.22591 -0.002,3.9408 -0.1796,5.68271 -0.60927,5.96125 -0.0985,0.0638 -3.24795,0.11715 -6.99885,0.11848 l -6.81981,0.002 0.18223,0.59242 c 0.12027,0.39103 0.17622,2.01551 0.16458,4.77883 -0.01,2.30253 -0.0152,4.82622 -0.0123,5.60821 0.003,0.78199 0.002,3.16351 -0.004,5.29226 -0.005,2.12875 -0.005,4.51027 0,5.29226 0.0437,6.43499 0.0229,9.07839 -0.0753,9.51817 l -0.11453,0.51343 7.03103,0 c 6.54764,0 7.03883,0.019 7.14455,0.27646 0.2187,0.53261 0.0973,8.42305 -0.14403,9.36019 l -0.22375,0.86888 -10.6126,0.0406 -10.6126,0.0406 -0.18511,-0.59352 z" />
  </StyledSvg>
);

export default BannerLogoSvg;
