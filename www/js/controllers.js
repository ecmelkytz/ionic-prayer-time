angular.module('starter').controller("MainCtrl", function($scope, Cities, $rootScope, Map, $filter, Towns, Times, $sce) {
  $scope.countries = [
    {no: "2", country: "TURKIYE", code: "tr"},
    {no: "33", country: "ABD", code: "us"},
    {no: "166", country: "AFGANISTAN", code: "af"},
    {no: "13", country: "ALMANYA", code: "de"},
    {no: "17", country: "ANDORRA", code: "ad"},
    {no: "140", country: "ANGOLA", code: "ao"},
    {no: "125", country: "ANGUILLA", code: "ai"},
    {no: "90", country: "ANTIGUA VE BARBUDA", code: "ag"},
    {no: "199", country: "ARJANTIN", code:"ar"},
    {no: "25", country: "ARNAVUTLUK", code: "al"},
    {no: "153", country: "ARUBA", code: "aw"},
    {no: "59", country: "AVUSTRALYA", code: "au"},
    {no: "35", country: "AVUSTURYA", code: "at"},
    {no: "5", country: "AZERBAYCAN", code: "az"},
    {no: "54", country: "BAHAMALAR", code: "bs"},
    {no: "132", country: "BAHREYN", code: "bh"},
    {no: "177", country: "BANGLADES", code: "bd"},
    {no: "188", country: "BARBADOS", code: "bb"},
    {no: "208", country: "BELARUS", code: "by"},
    {no: "11", country: "BELCIKA", code:"be"},
    {no: "182", country: "BELIZE", code: "bz"},
    {no: "181", country: "BENIN", code: "bj"},
    {no: "51", country: "BERMUDA", code: "bm"},
    {no: "93", country: "BIRLESIK ARAP EMIRLIGI", code:"ae"},
    {no: "83", country: "BOLIVYA", code: "bo"},
    {no: "9", country: "BOSNA HERSEK", code: "ba"},
    {no: "167", country: "BOTSVANA", code: "bw"},
    {no: "146", country: "BREZILYA", code: "br"},
    {no: "97", country: "BRUNEI", code: "bn"},
    {no: "44", country: "BULGARISTAN", code: "bg"},
    {no: "91", country: "BURKINA FASO", code: "bf"},
    {no: "154", country: "BURMA (MYANMAR)", code: "mm"},
    {no: "65", country: "BURUNDI", code: "bi"},
    {no: "155", country: "BUTAN", code: "" },
    {no: "156", country: "CAD", code: "td"},
    {no: "43", country: "CECENISTAN", code: ""},
    {no: "16", country: "CEK CUMHURIYETI", code: "cz"},
    {no: "86", country: "CEZAYIR", code: "dz"},
    {no: "160", country: "CIBUTI", code: "dj"},
    {no: "61", country: "CIN", code: "cn"},
    {no: "26", country: "DANIMARKA", code: "dk"},
    {no: "180", country: "DEMOKRATIK KONGO CUMHURIYETI", code:"cc"},
    {no: "176", country: "DOGU TIMOR", code: "tp"},
    {no: "123", country: "DOMINIK", code: "dm"},
    {no: "72", country: "DOMINIK CUMHURIYETI", code:"do"},
    {no: "139", country: "EKVATOR", code:"ec"},
    {no: "63", country: "EKVATOR GINESI", code: "gq"},
    {no: "165", country: "EL SALVADOR", code: "sv"},
    {no: "117", country: "ENDONEZYA", code: "id"},
    {no: "175", country: "ERITRE", code:"er"},
    {no: "104", country: "ERMENISTAN", code: "am"},
    {no: "6", country: "ESTONYA", code: "ee"},
    {no: "95", country: "ETYOPYA", code: "et"},
    {no: "145", country: "FAS", code: "ma"},
    {no: "197", country: "FIJI", code: "fj"},
    {no: "120", country: "FILDISI SAHILI", code: "ci"},
    {no: "126", country: "FILIPINLER", code: "ph"},
    {no: "204", country: "FILISTIN", code: ""},
    {no: "41", country: "FINLANDIYA", code: "fi"},
    {no: "21", country: "FRANSA", code: "fr"},
    {no: "79", country: "GABON", code: "ga"},
    {no: "109", country: "GAMBIYA", code: "gm"},
    {no: "143", country: "GANA", code: "gh"},
    {no: "111", country: "GINE", code: "gn"},
    {no: "58", country: "GRANADA", code: "gd"},
    {no: "48", country: "GRONLAND", code: "gl"},
    {no: "171", country: "GUADELOPE", code: "gp"},
    {no: "169", country: "GUAM ADASI", code:"gu"},
    {no: "99", country: "GUATEMALA", code: "gt"},
    {no: "67", country: "GUNEY AFRIKA", code: "za"},
    {no: "128", country: "GUNEY KORE", code: "kp"},
    {no: "62", country: "GURCISTAN", code: "ge"},
    {no: "82", country: "GUYANA", code: "gy"},
    {no: "70", country: "HAITI", code: "ht"},
    {no: "187", country: "HINDISTAN", code: "in"},
    {no: "30", country: "HIRVATISTAN", code: "hr"},
    {no: "4", country: "HOLLANDA", code: "nl"},
    {no: "66", country: "HOLLANDA ANTILLERI", code:"an"},
    {no: "105", country: "HONDURAS", code: "hn"},
    {no: "113", country: "HONG KONG", code: "hk"},
    {no: "15", country: "INGILTERE", code: "gb"},
    {no: "124", country: "IRAK", code:"iq"},
    {no: "202", country: "IRAN", code: "ir"},
    {no: "32", country: "IRLANDA", code: "ie"},
    {no: "23", country: "ISPANYA", code: "es"},
    {no: "205", country: "ISRAIL", code: "il"},
    {no: "12", country: "ISVEC", code: "se"},
    {no: "49", country: "ISVICRE", code: "ch"},
    {no: "8", country: "ITALYA", code: "it"},
    {no: "122", country: "IZLANDA", code: "is"},
    {no: "119", country: "JAMAIKA", code: "jm"},
    {no: "116", country: "JAPONYA", code: "jp"},
    {no: "161", country: "KAMBOCYA", code:"kh"},
    {no: "184", country: "KAMERUN", code: "cm"},
    {no: "52", country: "KANADA", code: "ca"},
    {no: "34", country: "KARADAG", code: ""},
    {no: "94", country: "KATAR", code: "qa"},
    {no: "92", country: "KAZAKISTAN", code: "kz"},
    {no: "114", country: "KENYA", code: "ke"},
    {no: "168", country: "KIRGIZISTAN", code: "kg"},
    {no: "57", country: "KOLOMBIYA", code: "co"},
    {no: "88", country: "KOMORLAR", code: "km"},
    {no: "18", country: "KOSOVA", code: ""},
    {no: "162", country: "KOSTARIKA", code: "cr"},
    {no: "209", country: "KUBA", code: "cu"},
    {no: "206", country: "KUDUS", code: ""},
    {no: "133", country: "KUVEYT", code: "kw"},
    {no: "1", country: "KUZEY KIBRIS", code: ""},
    {no: "142", country: "KUZEY KORE", code: "kr"},
    {no: "134", country: "LAOS", code: "la"},
    {no: "174", country: "LESOTO", code: "ls"},
    {no: "20", country: "LETONYA", code: "lv"},
    {no: "73", country: "LIBERYA", code: "lr"},
    {no: "203", country: "LIBYA", code: "ly"},
    {no: "38", country: "LIECHTENSTEIN", code:"li"},
    {no: "47", country: "LITVANYA", code: "lt"},
    {no: "42", country: "LUBNAN", code: "lb"},
    {no: "31", country: "LUKSEMBURG", code: "lu"},
    {no: "7", country: "MACARISTAN", code: "hu"},
    {no: "98", country: "MADAGASKAR", code: "mg"},
    {no: "100", country: "MAKAO", code: "mo"},
    {no: "28", country: "MAKEDONYA", code: "mk"},
    {no: "55", country: "MALAVI", code: "mw"},
    {no: "103", country: "MALDIVLER", code: "mv"},
    {no: "107", country: "MALEZYA", code: "my"},
    {no: "152", country: "MALI", code: "ml"},
    {no: "24", country: "MALTA", code: "mt"},
    {no: "87", country: "MARTINIK", code: "mq"},
    {no: "164", country: "MAURITIUS ADASI", code:""},
    {no: "157", country: "MAYOTTE", code: "yt"},
    {no: "53", country: "MEKSIKA", code: "mx"},
    {no: "85", country: "MIKRONEZYA", code: "fm"},
    {no: "189", country: "MISIR", code: "eg"},
    {no: "60", country: "MOGOLISTAN", code: "mn"},
    {no: "46", country: "MOLDAVYA", code: "md"},
    {no: "3", country: "MONAKO", code: "mc"},
    {no: "147", country: "MONTSERRAT (U.K.)", code: "ms"},
    {no: "106", country: "MORITANYA", code: "mr"},
    {no: "151", country: "MOZAMBIK", code: "mz"},
    {no: "196", country: "NAMBIYA", code: "na"},
    {no: "76", country: "NEPAL", code: "np"},
    {no: "84", country: "NIJER", code: "ne"},
    {no: "127", country: "NIJERYA", code: "ng"},
    {no: "141", country: "NIKARAGUA", code: "ni"},
    {no: "178", country: "NIUE", code: "nu"},
    {no: "36", country: "NORVEC", code: "no"},
    {no: "80", country: "ORTA AFRIKA CUMHURIYETI", code: "cf"},
    {no: "131", country: "OZBEKISTAN", code: "uz"},
    {no: "77", country: "PAKISTAN", code: "pk"},
    {no: "149", country: "PALAU", code:"pw"},
    {no: "89", country: "PANAMA", code: "pa"},
    {no: "185", country: "PAPUA YENI GINE", code: "pg"},
    {no: "194", country: "PARAGUAY", code: "py"},
    {no: "69",  country: "PERU", code: "pe"},
    {no: "183", country: "PITCAIRN ADASI", code: "pn"},
    {no: "39", country: "POLONYA", code: "pl"},
    {no: "45", country: "PORTEKIZ", code: "pt"},
    {no: "68", country: "PORTO RIKO", code: "pr"},
    {no: "112", country: "REUNION", code: "re"},
    {no: "37", country: "ROMANYA", code: "ro"},
    {no: "81", country: "RUANDA", code: "rw"},
    {no: "207", country: "RUSYA", code: "ru"},
    {no: "198", country: "SAMOA", code: "ws"},
    {no: "102", country: "SENEGAL", code: "sn"},
    {no: "138", country: "SEYSEL ADALARI", code:"sc"},
    {no: "200", country: "SILI", code: "cl"},
    {no: "179", country: "SINGAPUR", code: "sg"},
    {no: "27", country: "SIRBISTAN", code:""},
    {no: "14", country: "SLOVAKYA", code: "sk"},
    {no: "19", country: "SLOVENYA", code: "si"},
    {no: "150", country: "SOMALI", code: "so"},
    {no: "74", country: "SRI LANKA", code: "lk"},
    {no: "129", country: "SUDAN", code: "sd"},
    {no: "172", country: "SURINAM", code: "sr"},
    {no: "191", country:  "SURIYE", code: "sy"},
    {no: "64", country: "SUUDI ARABISTAN", code: "sa"},
    {no: "163", country: "SVALBARD", code: "sj"},
    {no: "170", country: "SVAZILAND", code:"sz"},
    {no: "101", country: "TACIKISTAN", code: "tj"},
    {no: "110", country: "TANZANYA", code:"tz"},
    {no: "137", country: "TAYLAND", code: "th"},
    {no: "108", country: "TAYVAN", code: "tw"},
    {no: "71", country: "TOGO", code: "tg"},
    {no: "130", country: "TONGA", code: "to"},
    {no: "96", country: "TRINIDAT VE TOBAGO", code: "tt"},
    {no: "118", country: "TUNUS", code: "tn"},
    {no: "159", country: "TURKMENISTAN", code: "tm"},
    {no: "75", country: "UGANDA", code: "ug"},
    {no: "40", country: "UKRAYNA", code: "ua"},
    {no: "29", country: "UKRAYNA (KIRIM)", code: ""},
    {no: "173", country: "UMMAN", code: "om"},
    {no: "192", country: "URDUN", code: "jo"},
    {no: "201", country: "URUGUAY", code: "uy"},
    {no: "56", country: "VANUATU", code: "vu"},
    {no: "10", country: "VATIKAN", code : "va"},
    {no: "186", country: "VENEZUELA", code: "ve"},
    {no: "135", country: "VIETNAM", code: "vn"},
    {no: "148", country: "YEMEN", code: "ye"},
    {no: "115", country: "YENI KALEDONYA", code: "nc"},
    {no: "193", country: "YENI ZELLANDA", code: "nz"},
    {no: "144", country: "YESIL BURUN", code: "cv"},
    {no: "22", country: "YUNANISTAN", code:"gr"},
    {no: "158", country: "ZAMBIYA", code: "zm"},
    {no: "136", country: "ZIMBABVE", code: "zw"}
  ];

  $scope.refresh = function() {
    $rootScope.times_list = false;
    $rootScope.country_button = true;
    $rootScope.nameCity = false;
    $rootScope.nameCountry = false;
    $rootScope.nameTown = false;
    $rootScope.check_country = false;
    $rootScope.check_city = false;
  }

  $scope.init = function() {
      Map.get().then(function(response) {
        $scope.location = response.data;
        $rootScope.nameCountry = $scope.location.country_name;
        var match_country = $filter('filter')($scope.countries, {code: $scope.location.country_code});
        $rootScope.check_country = true;
        $rootScope.check_city = true;
        $rootScope.city_button = true;
        $rootScope.nameCountry = match_country[0].country;
        $rootScope.country_name = match_country[0].country;
        $rootScope.nameCity = $scope.location.city;
        $rootScope.city_name = $scope.location.city;
        Cities.get(match_country[0].no).success(function(data) {
          $rootScope.cities = data;
          $scope.match_city = $filter('filter')($scope.cities, {Text: $scope.location.city});
          Towns.get($scope.match_city[0].Value).success(function(data) {
            $rootScope.towns = data;
            if (typeof data[0] !== 'undefined') {
              $rootScope.town_button = true;
              $rootScope.check_city = true;
            }
            else {
              Times.post($scope.match_country[0].Value, $scope.match_city[0].Value, $scope.match_city[0].Value).success(function(data) {
                $rootScope.times = data;
                $rootScope.country_name = $scope.match_country[0].country;
                $rootScope.city_name = $scope.match_city[0].country;
                $rootScope.moon = $sce.trustAsResourceUrl("http://diyanet.gov.tr//UserFiles//AyEvreleri//" + data.MoonSrc);
                $rootScope.times_list = true;
                $rootScope.country_button = false;
                $rootScope.city_button = false;
                $rootScope.town_button = false;
              })
            }
          })
        })
      });
    }
})
