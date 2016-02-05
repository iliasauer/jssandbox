exports.scenarios = {
    single: "single",
    chain: "chain",
    rampup: "rampup"
};
exports.markers = {
    ERR: "err",
    MSG: "msg",
    PERF_SUM: "perfSum",
    PERF_AVG: "perfAvg"
};

exports.oldJson = {
    "loggerFqcn": "org.apache.logging.log4j.spi.AbstractLogger",
    "marker": {"name": "perfAvg", "parents": null},
    "level": {
        "name": "INFO",
        "intLevel": 400,
        "standardLevel": "INFO",
        "declaringClass": "org.apache.logging.log4j.Level"
    },
    "loggerName": "com.emc.mongoose.core.impl.load.tasks.LogMetricsTask",
    "message": {
        "parameters": [{
            "countSucc": 5948,
            "succRateLast": 98.65794772253463,
            "countFail": 0,
            "failRateLast": 0.0,
            "countByte": 6236930048,
            "byteRateLast": 1.0345035619110447E8,
            "durValues": [457, 473, 478, 484, 493, 494, 494, 495, 497, 499, 499, 501, 501, 502, 503, 505, 508, 509, 509, 510, 511, 514, 514, 514, 515, 516, 518, 520, 523, 524, 525, 525, 526, 526, 528, 529, 529, 529, 530, 530, 530, 531, 531, 532, 533, 533, 535, 536, 537, 539, 540, 540, 540, 541, 541, 543, 543, 543, 544, 544, 544, 547, 547, 548, 549, 551, 553, 554, 555, 555, 555, 556, 556, 556, 557, 558, 558, 559, 559, 559, 559, 559, 559, 560, 561, 562, 562, 563, 564, 564, 565, 565, 565, 565, 565, 565, 567, 568, 569, 570, 571, 571, 572, 572, 572, 572, 573, 573, 574, 574, 575, 575, 575, 576, 576, 576, 576, 577, 577, 577, 577, 578, 578, 579, 579, 579, 579, 580, 580, 580, 580, 581, 581, 581, 582, 583, 584, 584, 584, 584, 584, 585, 585, 585, 586, 586, 586, 587, 587, 588, 588, 589, 590, 590, 590, 591, 591, 592, 592, 592, 592, 592, 593, 593, 594, 594, 594, 595, 595, 595, 595, 595, 596, 597, 597, 597, 597, 597, 598, 599, 600, 601, 601, 601, 601, 601, 601, 601, 602, 602, 603, 603, 603, 603, 603, 603, 604, 604, 605, 605, 605, 605, 606, 607, 608, 608, 608, 608, 608, 608, 609, 610, 610, 610, 610, 611, 612, 612, 612, 612, 613, 613, 614, 615, 615, 615, 616, 616, 616, 617, 617, 617, 617, 617, 617, 618, 619, 620, 620, 620, 621, 622, 622, 623, 623, 623, 624, 625, 625, 625, 625, 625, 625, 626, 626, 627, 627, 627, 627, 627, 627, 627, 628, 628, 628, 629, 629, 629, 629, 630, 631, 632, 633, 634, 635, 635, 635, 636, 636, 638, 638, 638, 638, 638, 639, 639, 639, 639, 640, 640, 640, 641, 641, 641, 641, 642, 642, 643, 644, 644, 644, 644, 645, 645, 645, 645, 646, 646, 646, 646, 646, 647, 647, 647, 647, 647, 648, 649, 649, 650, 651, 651, 651, 651, 652, 652, 652, 652, 653, 654, 655, 655, 655, 655, 656, 657, 657, 657, 657, 657, 658, 659, 660, 661, 661, 661, 661, 662, 662, 662, 663, 663, 663, 663, 664, 665, 665, 666, 667, 667, 668, 668, 668, 668, 668, 669, 670, 670, 670, 670, 670, 670, 671, 671, 671, 671, 672, 672, 673, 674, 674, 675, 677, 678, 678, 680, 681, 681, 682, 682, 682, 684, 686, 686, 686, 687, 688, 689, 689, 689, 689, 689, 689, 689, 690, 690, 690, 691, 691, 691, 692, 693, 694, 694, 694, 695, 695, 697, 697, 697, 697, 698, 699, 699, 700, 700, 701, 701, 701, 701, 702, 704, 704, 704, 706, 707, 707, 709, 710, 710, 710, 710, 712, 712, 713, 713, 715, 715, 716, 717, 718, 719, 720, 720, 720, 721, 721, 723, 723, 723, 724, 724, 725, 725, 727, 727, 727, 728, 728, 729, 730, 730, 731, 731, 732, 732, 733, 734, 734, 734, 734, 735, 735, 736, 737, 737, 737, 738, 739, 739, 739, 740, 740, 742, 742, 742, 745, 747, 748, 748, 748, 750, 750, 751, 752, 752, 753, 753, 754, 755, 756, 758, 758, 759, 759, 760, 760, 761, 762, 763, 763, 764, 765, 765, 766, 767, 767, 768, 769, 769, 770, 770, 770, 771, 771, 772, 772, 773, 773, 774, 777, 778, 779, 779, 781, 781, 781, 783, 784, 785, 785, 786, 788, 791, 791, 796, 796, 797, 798, 799, 800, 801, 802, 802, 803, 803, 803, 803, 805, 808, 809, 809, 809, 811, 811, 812, 812, 813, 813, 814, 814, 816, 818, 818, 818, 818, 820, 822, 822, 823, 823, 824, 827, 828, 829, 830, 830, 831, 831, 832, 833, 833, 833, 833, 834, 835, 835, 836, 836, 840, 840, 842, 844, 845, 846, 846, 846, 847, 849, 849, 850, 850, 851, 851, 851, 853, 855, 855, 856, 858, 861, 861, 863, 865, 868, 869, 869, 870, 871, 871, 871, 872, 876, 876, 877, 878, 878, 878, 878, 879, 880, 881, 882, 884, 885, 885, 886, 886, 887, 888, 889, 890, 891, 891, 891, 892, 893, 897, 897, 898, 898, 899, 901, 902, 902, 902, 903, 904, 908, 909, 909, 909, 911, 913, 914, 915, 915, 917, 917, 918, 919, 919, 920, 921, 922, 923, 926, 928, 928, 932, 933, 933, 934, 935, 936, 938, 940, 940, 943, 943, 945, 946, 946, 946, 950, 950, 952, 953, 953, 955, 956, 956, 957, 960, 960, 964, 966, 966, 967, 968, 969, 970, 970, 971, 971, 971, 971, 972, 973, 974, 975, 975, 977, 977, 977, 979, 979, 980, 981, 983, 986, 988, 991, 996, 997, 998, 998, 998, 999, 1001, 1003, 1005, 1007, 1007, 1007, 1008, 1009, 1010, 1012, 1012, 1013, 1016, 1016, 1017, 1018, 1019, 1025, 1026, 1026, 1029, 1029, 1031, 1033, 1033, 1036, 1040, 1040, 1041, 1043, 1045, 1047, 1050, 1050, 1050, 1051, 1055, 1055, 1055, 1056, 1057, 1057, 1058, 1059, 1061, 1062, 1068, 1073, 1076, 1077, 1078, 1079, 1080, 1081, 1086, 1087, 1089, 1090, 1092, 1096, 1096, 1098, 1098, 1098, 1106, 1109, 1112, 1119, 1120, 1120, 1126, 1128, 1134, 1145, 1145, 1146, 1148, 1148, 1149, 1150, 1150, 1151, 1161, 1162, 1164, 1165, 1169, 1170, 1174, 1178, 1179, 1185, 1189, 1190, 1192, 1192, 1194, 1199, 1207, 1208, 1208, 1209, 1210, 1213, 1214, 1216, 1219, 1229, 1233, 1233, 1240, 1241, 1242, 1247, 1258, 1264, 1264, 1269, 1271, 1274, 1280, 1285, 1294, 1294, 1300, 1302, 1303, 1305, 1314, 1315, 1316, 1324, 1325, 1327, 1341, 1355, 1357, 1361, 1362, 1369, 1399, 1410, 1413, 1416, 1423, 1432, 1453, 1457, 1472, 1479, 1482, 1485, 1489, 1500, 1503, 1506, 1520, 1523, 1532, 1535, 1538, 1541, 1545, 1569, 1571, 1584, 1586, 1616, 1625, 1626, 1643, 1651, 1666, 1677, 1678, 1690, 1696, 1716, 1717, 1718, 1733, 1750, 1758, 1770, 1774, 1783, 1813, 1846, 1854, 1907, 1977, 1992, 1998, 2004, 2066, 2170, 2193, 2252, 2352, 2362, 2419, 2428, 2434, 2481, 2490, 2502, 2503, 2524, 2556, 2588, 2606, 2608, 2615, 2647, 2742, 2753, 2756, 2810, 2890, 2943, 2971, 3154, 3192, 3207, 3382, 3413, 3501, 3546, 3659, 3733, 3761, 3875, 3881, 4138, 4471, 4741, 4899, 4945, 5085, 5129, 5654, 6095, 6133, 6278, 6380, 6639, 6658, 6720, 7005, 7418, 8168, 8390, 8446, 8611, 8954, 9202, 9476, 10020, 10047, 10659, 12345, 14386, 15758, 17331, 17982, 19416, 20123, 23606, 32156],
            "latValues": [17, 17, 17, 17, 18, 18, 18, 18, 18, 19, 19, 19, 20, 20, 21, 21, 21, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 25, 25, 25, 26, 26, 26, 26, 26, 27, 27, 27, 27, 28, 29, 30, 30, 30, 31, 31, 32, 33, 33, 33, 33, 34, 36, 37, 37, 38, 38, 38, 38, 39, 39, 40, 40, 40, 41, 41, 41, 42, 42, 42, 42, 42, 42, 43, 44, 44, 45, 46, 46, 46, 47, 47, 48, 50, 50, 51, 51, 51, 52, 52, 52, 52, 54, 55, 55, 56, 56, 56, 57, 60, 61, 62, 64, 64, 71, 76, 77, 77, 81, 82, 82, 82, 83, 84, 86, 92, 97, 97, 98, 98, 99, 100, 101, 104, 104, 105, 105, 106, 107, 109, 110, 111, 111, 111, 116, 120, 126, 127, 128, 130, 132, 136, 136, 136, 137, 138, 142, 143, 143, 145, 148, 148, 150, 152, 152, 154, 155, 157, 159, 160, 161, 161, 161, 162, 162, 162, 163, 164, 165, 165, 166, 166, 168, 168, 168, 168, 169, 170, 170, 170, 171, 172, 173, 173, 173, 175, 175, 175, 175, 175, 177, 178, 178, 178, 179, 179, 180, 180, 181, 181, 181, 182, 183, 184, 185, 186, 188, 188, 189, 189, 191, 192, 192, 192, 192, 193, 194, 194, 195, 195, 196, 198, 198, 198, 199, 199, 199, 199, 200, 200, 201, 201, 201, 201, 202, 203, 203, 204, 204, 206, 206, 206, 206, 206, 207, 208, 208, 209, 209, 210, 210, 210, 211, 211, 211, 211, 212, 213, 213, 213, 213, 214, 214, 216, 216, 216, 217, 217, 219, 219, 219, 220, 220, 221, 221, 221, 222, 222, 222, 222, 223, 223, 223, 224, 224, 224, 224, 225, 225, 225, 225, 225, 226, 227, 228, 228, 229, 229, 229, 229, 230, 231, 231, 231, 232, 232, 232, 232, 233, 233, 233, 233, 234, 234, 235, 235, 235, 236, 236, 236, 237, 238, 238, 238, 239, 239, 239, 239, 240, 240, 240, 240, 240, 240, 241, 241, 241, 243, 243, 243, 244, 246, 246, 246, 246, 247, 247, 247, 247, 247, 247, 248, 248, 248, 249, 249, 249, 249, 250, 250, 250, 250, 251, 251, 251, 251, 251, 252, 252, 252, 252, 252, 253, 253, 253, 254, 254, 254, 254, 254, 255, 255, 256, 257, 257, 257, 258, 258, 258, 258, 259, 259, 259, 259, 260, 260, 261, 261, 261, 261, 261, 261, 261, 261, 262, 262, 263, 263, 263, 263, 263, 263, 263, 264, 264, 264, 264, 264, 264, 264, 265, 266, 266, 266, 266, 266, 267, 267, 267, 268, 268, 268, 268, 269, 269, 269, 269, 270, 270, 272, 272, 272, 272, 273, 274, 274, 274, 274, 274, 275, 276, 276, 276, 277, 277, 277, 278, 278, 278, 278, 279, 279, 279, 280, 280, 280, 281, 281, 282, 282, 282, 283, 283, 283, 283, 284, 284, 284, 284, 285, 285, 285, 286, 286, 287, 287, 287, 287, 287, 287, 287, 288, 288, 288, 289, 289, 289, 289, 289, 290, 290, 290, 290, 291, 291, 292, 292, 294, 294, 294, 295, 295, 295, 295, 296, 296, 296, 296, 297, 297, 298, 298, 299, 299, 300, 300, 300, 300, 300, 301, 301, 301, 301, 302, 302, 302, 302, 303, 304, 304, 304, 304, 304, 305, 305, 306, 306, 306, 307, 308, 308, 308, 309, 309, 309, 309, 309, 309, 309, 309, 310, 310, 311, 311, 311, 311, 311, 311, 313, 313, 314, 314, 315, 315, 315, 315, 316, 318, 318, 318, 318, 318, 319, 319, 319, 320, 320, 320, 321, 322, 322, 323, 323, 324, 324, 326, 326, 326, 329, 329, 330, 330, 330, 331, 331, 331, 332, 332, 333, 333, 333, 333, 333, 334, 334, 335, 335, 336, 336, 336, 336, 337, 339, 340, 340, 340, 341, 342, 342, 342, 342, 343, 343, 344, 344, 344, 344, 345, 345, 346, 346, 347, 347, 347, 347, 347, 347, 348, 348, 348, 349, 349, 349, 349, 350, 350, 350, 351, 351, 351, 351, 352, 353, 353, 354, 354, 355, 355, 355, 356, 356, 359, 360, 360, 360, 360, 360, 360, 361, 362, 362, 363, 364, 365, 365, 367, 367, 368, 368, 368, 368, 369, 369, 370, 370, 371, 371, 371, 373, 375, 375, 376, 377, 377, 377, 378, 378, 379, 380, 381, 381, 382, 384, 385, 386, 386, 388, 388, 389, 389, 391, 391, 392, 392, 393, 393, 394, 394, 395, 395, 395, 396, 396, 396, 396, 397, 398, 399, 399, 399, 399, 399, 399, 401, 401, 403, 403, 404, 405, 406, 406, 407, 407, 408, 408, 409, 409, 410, 412, 413, 414, 415, 416, 416, 417, 418, 419, 421, 422, 423, 427, 427, 430, 431, 432, 433, 433, 433, 434, 434, 434, 435, 435, 435, 436, 436, 437, 437, 437, 438, 438, 439, 440, 442, 442, 443, 443, 444, 446, 447, 448, 449, 450, 450, 451, 455, 455, 457, 458, 459, 459, 459, 461, 462, 463, 465, 466, 468, 470, 470, 473, 473, 474, 476, 476, 479, 481, 483, 485, 487, 491, 492, 494, 495, 496, 496, 496, 497, 498, 498, 499, 499, 504, 506, 507, 507, 508, 508, 509, 510, 512, 513, 514, 514, 524, 526, 530, 534, 534, 535, 535, 535, 539, 542, 543, 544, 544, 547, 547, 548, 550, 550, 551, 552, 555, 555, 557, 557, 557, 560, 562, 567, 568, 569, 569, 573, 574, 574, 581, 581, 584, 586, 587, 596, 599, 600, 602, 605, 610, 612, 613, 614, 616, 617, 617, 618, 620, 624, 625, 627, 637, 658, 659, 661, 666, 666, 666, 670, 694, 695, 705, 706, 708, 711, 711, 713, 716, 718, 719, 738, 743, 746, 750, 752, 754, 756, 760, 781, 785, 789, 792, 797, 798, 814, 817, 823, 832, 838, 852, 879, 900, 919, 926, 927, 931, 943, 955, 963, 970, 974, 975, 999, 1012, 1017, 1049, 1081, 1136, 1165, 1177, 1228, 1232, 1268, 1289, 1334, 1352, 1355, 1377, 1518, 1524, 1558, 1594, 1608, 1624, 1635, 1654, 1664, 1684, 1691, 1707, 1922, 2043, 2242, 2254, 2326, 2771, 2909, 2916, 3052, 3056, 3277, 4327, 4688, 4759, 4874, 5439, 5461, 5838, 6207, 6220, 6259, 6804, 8342, 9610, 9681, 11250, 11294, 12332, 13976, 14767, 25683, 31772, 94753],
            "sumDur": 20817990,
            "elapsedTime": 44275336,
            "durationSum": 20817990,
            "succCount": 5948,
            "failCount": 0,
            "byteCount": 6236930048,
            "durationValues": [457, 473, 478, 484, 493, 494, 494, 495, 497, 499, 499, 501, 501, 502, 503, 505, 508, 509, 509, 510, 511, 514, 514, 514, 515, 516, 518, 520, 523, 524, 525, 525, 526, 526, 528, 529, 529, 529, 530, 530, 530, 531, 531, 532, 533, 533, 535, 536, 537, 539, 540, 540, 540, 541, 541, 543, 543, 543, 544, 544, 544, 547, 547, 548, 549, 551, 553, 554, 555, 555, 555, 556, 556, 556, 557, 558, 558, 559, 559, 559, 559, 559, 559, 560, 561, 562, 562, 563, 564, 564, 565, 565, 565, 565, 565, 565, 567, 568, 569, 570, 571, 571, 572, 572, 572, 572, 573, 573, 574, 574, 575, 575, 575, 576, 576, 576, 576, 577, 577, 577, 577, 578, 578, 579, 579, 579, 579, 580, 580, 580, 580, 581, 581, 581, 582, 583, 584, 584, 584, 584, 584, 585, 585, 585, 586, 586, 586, 587, 587, 588, 588, 589, 590, 590, 590, 591, 591, 592, 592, 592, 592, 592, 593, 593, 594, 594, 594, 595, 595, 595, 595, 595, 596, 597, 597, 597, 597, 597, 598, 599, 600, 601, 601, 601, 601, 601, 601, 601, 602, 602, 603, 603, 603, 603, 603, 603, 604, 604, 605, 605, 605, 605, 606, 607, 608, 608, 608, 608, 608, 608, 609, 610, 610, 610, 610, 611, 612, 612, 612, 612, 613, 613, 614, 615, 615, 615, 616, 616, 616, 617, 617, 617, 617, 617, 617, 618, 619, 620, 620, 620, 621, 622, 622, 623, 623, 623, 624, 625, 625, 625, 625, 625, 625, 626, 626, 627, 627, 627, 627, 627, 627, 627, 628, 628, 628, 629, 629, 629, 629, 630, 631, 632, 633, 634, 635, 635, 635, 636, 636, 638, 638, 638, 638, 638, 639, 639, 639, 639, 640, 640, 640, 641, 641, 641, 641, 642, 642, 643, 644, 644, 644, 644, 645, 645, 645, 645, 646, 646, 646, 646, 646, 647, 647, 647, 647, 647, 648, 649, 649, 650, 651, 651, 651, 651, 652, 652, 652, 652, 653, 654, 655, 655, 655, 655, 656, 657, 657, 657, 657, 657, 658, 659, 660, 661, 661, 661, 661, 662, 662, 662, 663, 663, 663, 663, 664, 665, 665, 666, 667, 667, 668, 668, 668, 668, 668, 669, 670, 670, 670, 670, 670, 670, 671, 671, 671, 671, 672, 672, 673, 674, 674, 675, 677, 678, 678, 680, 681, 681, 682, 682, 682, 684, 686, 686, 686, 687, 688, 689, 689, 689, 689, 689, 689, 689, 690, 690, 690, 691, 691, 691, 692, 693, 694, 694, 694, 695, 695, 697, 697, 697, 697, 698, 699, 699, 700, 700, 701, 701, 701, 701, 702, 704, 704, 704, 706, 707, 707, 709, 710, 710, 710, 710, 712, 712, 713, 713, 715, 715, 716, 717, 718, 719, 720, 720, 720, 721, 721, 723, 723, 723, 724, 724, 725, 725, 727, 727, 727, 728, 728, 729, 730, 730, 731, 731, 732, 732, 733, 734, 734, 734, 734, 735, 735, 736, 737, 737, 737, 738, 739, 739, 739, 740, 740, 742, 742, 742, 745, 747, 748, 748, 748, 750, 750, 751, 752, 752, 753, 753, 754, 755, 756, 758, 758, 759, 759, 760, 760, 761, 762, 763, 763, 764, 765, 765, 766, 767, 767, 768, 769, 769, 770, 770, 770, 771, 771, 772, 772, 773, 773, 774, 777, 778, 779, 779, 781, 781, 781, 783, 784, 785, 785, 786, 788, 791, 791, 796, 796, 797, 798, 799, 800, 801, 802, 802, 803, 803, 803, 803, 805, 808, 809, 809, 809, 811, 811, 812, 812, 813, 813, 814, 814, 816, 818, 818, 818, 818, 820, 822, 822, 823, 823, 824, 827, 828, 829, 830, 830, 831, 831, 832, 833, 833, 833, 833, 834, 835, 835, 836, 836, 840, 840, 842, 844, 845, 846, 846, 846, 847, 849, 849, 850, 850, 851, 851, 851, 853, 855, 855, 856, 858, 861, 861, 863, 865, 868, 869, 869, 870, 871, 871, 871, 872, 876, 876, 877, 878, 878, 878, 878, 879, 880, 881, 882, 884, 885, 885, 886, 886, 887, 888, 889, 890, 891, 891, 891, 892, 893, 897, 897, 898, 898, 899, 901, 902, 902, 902, 903, 904, 908, 909, 909, 909, 911, 913, 914, 915, 915, 917, 917, 918, 919, 919, 920, 921, 922, 923, 926, 928, 928, 932, 933, 933, 934, 935, 936, 938, 940, 940, 943, 943, 945, 946, 946, 946, 950, 950, 952, 953, 953, 955, 956, 956, 957, 960, 960, 964, 966, 966, 967, 968, 969, 970, 970, 971, 971, 971, 971, 972, 973, 974, 975, 975, 977, 977, 977, 979, 979, 980, 981, 983, 986, 988, 991, 996, 997, 998, 998, 998, 999, 1001, 1003, 1005, 1007, 1007, 1007, 1008, 1009, 1010, 1012, 1012, 1013, 1016, 1016, 1017, 1018, 1019, 1025, 1026, 1026, 1029, 1029, 1031, 1033, 1033, 1036, 1040, 1040, 1041, 1043, 1045, 1047, 1050, 1050, 1050, 1051, 1055, 1055, 1055, 1056, 1057, 1057, 1058, 1059, 1061, 1062, 1068, 1073, 1076, 1077, 1078, 1079, 1080, 1081, 1086, 1087, 1089, 1090, 1092, 1096, 1096, 1098, 1098, 1098, 1106, 1109, 1112, 1119, 1120, 1120, 1126, 1128, 1134, 1145, 1145, 1146, 1148, 1148, 1149, 1150, 1150, 1151, 1161, 1162, 1164, 1165, 1169, 1170, 1174, 1178, 1179, 1185, 1189, 1190, 1192, 1192, 1194, 1199, 1207, 1208, 1208, 1209, 1210, 1213, 1214, 1216, 1219, 1229, 1233, 1233, 1240, 1241, 1242, 1247, 1258, 1264, 1264, 1269, 1271, 1274, 1280, 1285, 1294, 1294, 1300, 1302, 1303, 1305, 1314, 1315, 1316, 1324, 1325, 1327, 1341, 1355, 1357, 1361, 1362, 1369, 1399, 1410, 1413, 1416, 1423, 1432, 1453, 1457, 1472, 1479, 1482, 1485, 1489, 1500, 1503, 1506, 1520, 1523, 1532, 1535, 1538, 1541, 1545, 1569, 1571, 1584, 1586, 1616, 1625, 1626, 1643, 1651, 1666, 1677, 1678, 1690, 1696, 1716, 1717, 1718, 1733, 1750, 1758, 1770, 1774, 1783, 1813, 1846, 1854, 1907, 1977, 1992, 1998, 2004, 2066, 2170, 2193, 2252, 2352, 2362, 2419, 2428, 2434, 2481, 2490, 2502, 2503, 2524, 2556, 2588, 2606, 2608, 2615, 2647, 2742, 2753, 2756, 2810, 2890, 2943, 2971, 3154, 3192, 3207, 3382, 3413, 3501, 3546, 3659, 3733, 3761, 3875, 3881, 4138, 4471, 4741, 4899, 4945, 5085, 5129, 5654, 6095, 6133, 6278, 6380, 6639, 6658, 6720, 7005, 7418, 8168, 8390, 8446, 8611, 8954, 9202, 9476, 10020, 10047, 10659, 12345, 14386, 15758, 17331, 17982, 19416, 20123, 23606, 32156],
            "latencyValues": [17, 17, 17, 17, 18, 18, 18, 18, 18, 19, 19, 19, 20, 20, 21, 21, 21, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 25, 25, 25, 26, 26, 26, 26, 26, 27, 27, 27, 27, 28, 29, 30, 30, 30, 31, 31, 32, 33, 33, 33, 33, 34, 36, 37, 37, 38, 38, 38, 38, 39, 39, 40, 40, 40, 41, 41, 41, 42, 42, 42, 42, 42, 42, 43, 44, 44, 45, 46, 46, 46, 47, 47, 48, 50, 50, 51, 51, 51, 52, 52, 52, 52, 54, 55, 55, 56, 56, 56, 57, 60, 61, 62, 64, 64, 71, 76, 77, 77, 81, 82, 82, 82, 83, 84, 86, 92, 97, 97, 98, 98, 99, 100, 101, 104, 104, 105, 105, 106, 107, 109, 110, 111, 111, 111, 116, 120, 126, 127, 128, 130, 132, 136, 136, 136, 137, 138, 142, 143, 143, 145, 148, 148, 150, 152, 152, 154, 155, 157, 159, 160, 161, 161, 161, 162, 162, 162, 163, 164, 165, 165, 166, 166, 168, 168, 168, 168, 169, 170, 170, 170, 171, 172, 173, 173, 173, 175, 175, 175, 175, 175, 177, 178, 178, 178, 179, 179, 180, 180, 181, 181, 181, 182, 183, 184, 185, 186, 188, 188, 189, 189, 191, 192, 192, 192, 192, 193, 194, 194, 195, 195, 196, 198, 198, 198, 199, 199, 199, 199, 200, 200, 201, 201, 201, 201, 202, 203, 203, 204, 204, 206, 206, 206, 206, 206, 207, 208, 208, 209, 209, 210, 210, 210, 211, 211, 211, 211, 212, 213, 213, 213, 213, 214, 214, 216, 216, 216, 217, 217, 219, 219, 219, 220, 220, 221, 221, 221, 222, 222, 222, 222, 223, 223, 223, 224, 224, 224, 224, 225, 225, 225, 225, 225, 226, 227, 228, 228, 229, 229, 229, 229, 230, 231, 231, 231, 232, 232, 232, 232, 233, 233, 233, 233, 234, 234, 235, 235, 235, 236, 236, 236, 237, 238, 238, 238, 239, 239, 239, 239, 240, 240, 240, 240, 240, 240, 241, 241, 241, 243, 243, 243, 244, 246, 246, 246, 246, 247, 247, 247, 247, 247, 247, 248, 248, 248, 249, 249, 249, 249, 250, 250, 250, 250, 251, 251, 251, 251, 251, 252, 252, 252, 252, 252, 253, 253, 253, 254, 254, 254, 254, 254, 255, 255, 256, 257, 257, 257, 258, 258, 258, 258, 259, 259, 259, 259, 260, 260, 261, 261, 261, 261, 261, 261, 261, 261, 262, 262, 263, 263, 263, 263, 263, 263, 263, 264, 264, 264, 264, 264, 264, 264, 265, 266, 266, 266, 266, 266, 267, 267, 267, 268, 268, 268, 268, 269, 269, 269, 269, 270, 270, 272, 272, 272, 272, 273, 274, 274, 274, 274, 274, 275, 276, 276, 276, 277, 277, 277, 278, 278, 278, 278, 279, 279, 279, 280, 280, 280, 281, 281, 282, 282, 282, 283, 283, 283, 283, 284, 284, 284, 284, 285, 285, 285, 286, 286, 287, 287, 287, 287, 287, 287, 287, 288, 288, 288, 289, 289, 289, 289, 289, 290, 290, 290, 290, 291, 291, 292, 292, 294, 294, 294, 295, 295, 295, 295, 296, 296, 296, 296, 297, 297, 298, 298, 299, 299, 300, 300, 300, 300, 300, 301, 301, 301, 301, 302, 302, 302, 302, 303, 304, 304, 304, 304, 304, 305, 305, 306, 306, 306, 307, 308, 308, 308, 309, 309, 309, 309, 309, 309, 309, 309, 310, 310, 311, 311, 311, 311, 311, 311, 313, 313, 314, 314, 315, 315, 315, 315, 316, 318, 318, 318, 318, 318, 319, 319, 319, 320, 320, 320, 321, 322, 322, 323, 323, 324, 324, 326, 326, 326, 329, 329, 330, 330, 330, 331, 331, 331, 332, 332, 333, 333, 333, 333, 333, 334, 334, 335, 335, 336, 336, 336, 336, 337, 339, 340, 340, 340, 341, 342, 342, 342, 342, 343, 343, 344, 344, 344, 344, 345, 345, 346, 346, 347, 347, 347, 347, 347, 347, 348, 348, 348, 349, 349, 349, 349, 350, 350, 350, 351, 351, 351, 351, 352, 353, 353, 354, 354, 355, 355, 355, 356, 356, 359, 360, 360, 360, 360, 360, 360, 361, 362, 362, 363, 364, 365, 365, 367, 367, 368, 368, 368, 368, 369, 369, 370, 370, 371, 371, 371, 373, 375, 375, 376, 377, 377, 377, 378, 378, 379, 380, 381, 381, 382, 384, 385, 386, 386, 388, 388, 389, 389, 391, 391, 392, 392, 393, 393, 394, 394, 395, 395, 395, 396, 396, 396, 396, 397, 398, 399, 399, 399, 399, 399, 399, 401, 401, 403, 403, 404, 405, 406, 406, 407, 407, 408, 408, 409, 409, 410, 412, 413, 414, 415, 416, 416, 417, 418, 419, 421, 422, 423, 427, 427, 430, 431, 432, 433, 433, 433, 434, 434, 434, 435, 435, 435, 436, 436, 437, 437, 437, 438, 438, 439, 440, 442, 442, 443, 443, 444, 446, 447, 448, 449, 450, 450, 451, 455, 455, 457, 458, 459, 459, 459, 461, 462, 463, 465, 466, 468, 470, 470, 473, 473, 474, 476, 476, 479, 481, 483, 485, 487, 491, 492, 494, 495, 496, 496, 496, 497, 498, 498, 499, 499, 504, 506, 507, 507, 508, 508, 509, 510, 512, 513, 514, 514, 524, 526, 530, 534, 534, 535, 535, 535, 539, 542, 543, 544, 544, 547, 547, 548, 550, 550, 551, 552, 555, 555, 557, 557, 557, 560, 562, 567, 568, 569, 569, 573, 574, 574, 581, 581, 584, 586, 587, 596, 599, 600, 602, 605, 610, 612, 613, 614, 616, 617, 617, 618, 620, 624, 625, 627, 637, 658, 659, 661, 666, 666, 666, 670, 694, 695, 705, 706, 708, 711, 711, 713, 716, 718, 719, 738, 743, 746, 750, 752, 754, 756, 760, 781, 785, 789, 792, 797, 798, 814, 817, 823, 832, 838, 852, 879, 900, 919, 926, 927, 931, 943, 955, 963, 970, 974, 975, 999, 1012, 1017, 1049, 1081, 1136, 1165, 1177, 1228, 1232, 1268, 1289, 1334, 1352, 1355, 1377, 1518, 1524, 1558, 1594, 1608, 1624, 1635, 1654, 1664, 1684, 1691, 1707, 1922, 2043, 2242, 2254, 2326, 2771, 2909, 2916, 3052, 3056, 3277, 4327, 4688, 4759, 4874, 5439, 5461, 5838, 6207, 6220, 6259, 6804, 8342, 9610, 9681, 11250, 11294, 12332, 13976, 14767, 25683, 31772, 94753],
            "durationLoQ": 627.0,
            "durationMed": 759.0,
            "durationMin": 457.0,
            "failRateMean": 0.0,
            "byteRateMean": 1.4086691624429455E8,
            "succRateMean": 134.34116005353408,
            "durationHiQ": 1015.25,
            "durationMax": 32156.0,
            "durationAvg": 1224.4698443579766,
            "latencyMin": 17.0,
            "latencyLoQ": 210.0,
            "latencyMed": 294.0,
            "latencyHiQ": 417.75,
            "latencyMax": 94753.0,
            "latencyAvg": 648.4669260700389
        }],
        "throwable": null,
        "formattedMessage": "count=(5948/0); duration[us]=(1224/457/32156); latency[us]=(648/17/94753); TP[op/s]=(134.341/98.658); BW[MB/s]=(134.341/98.658)",
        "format": "count=(5948/0); duration[us]=(1224/457/32156); latency[us]=(648/17/94753); TP[op/s]=(134.341/98.658); BW[MB/s]=(134.341/98.658)"
    },
    "timeMillis": 1454537614658,
    "thrownProxy": null,
    "contextMap": {
        "run.mode": "standalone",
        "load.metricsPeriodSec": "10",
        "loadJobName": "0-S3-Create-1x1",
        "run.id": "2016.02.03.22.11.24.230",
        "scenario.name": "single"
    },
    "contextStack": [],
    "threadName": "0-S3-Create-1x1-metrics",
    "source": null,
    "includeLocation": false,
    "endOfBatch": true,
    "thrown": null,
    "nanoTime": 0
};
exports.newJson = {
    "name": "chrtpckg",
    "runId": "2016.02.03.22.05.24.588",
    "loadJobName": "0-S3-Create-1x1",
    "durMinChart": [{"x": 0.0, "y": 0.0}, null],
    "durMaxChart": [{"x": 0.0, "y": 0.0}, null],
    "durAvgChart": [{"x": 0.0, "y": 0.0}, null],
    "latMinChart": [{"x": 0.0, "y": 0.0}, null],
    "latMaxChart": [{"x": 0.0, "y": 0.0}, null],
    "latAvgChart": [{"x": 0.0, "y": 0.0}, null],
    "tpAvgChart": [{"x": 0.0, "y": 0.0}, null],
    "tpLastChart": [{"x": 0.0, "y": 0.0}, null],
    "bwAvgChart": [{"x": 0.0, "y": 0.0}, null],
    "bwLast": [{"x": 0.0, "y": 0.0}, null]
};

exports.avg = {
    id: "avg",
    text: "total average"
};
exports.last = {
    id: "last",
    text: "last 10 sec"
};
exports.min = {
    id: "min",
    text: "min"
};
exports.max = {
    id: "max",
    text: "max"
};

exports.cfgConstants = {
    runId: "run.id",
    runMetricsPeriodSec: "load.metricsPeriodSec",
    runScenarioName: "scenario.name"
};

exports.chartTypes = {
    TP: "throughput",
    BW: "bandwidth",
    LAT: "latency",
    DUR: "duration"
};