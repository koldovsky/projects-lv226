var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.filterByData = function (student) {
        if (!student.websiteUrl || !student.codeSourceUrl) {
            return false;
        }
        return true;
    }

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    //! http://www.convertcsv.com/csv-to-json.htm
    // http://www.csvjson.com/csv2json
    var students = [
        {
            "name": "Anastasiia Zyma",
            "websiteUrl": "https://anastaciia.github.io/my-project/",
            "codeSourceUrl": "https://github.com/anastaciia/my-project",
            "cvUrl": "",
            "photo": "images/students/zyma.jpg"
        },
        {
            "name": "Illia Kuzma",
            "websiteUrl": "https://github.com/illia108/monkey",
            "codeSourceUrl": "https://github.com/illia108/monkey",
            "cvUrl": "https://illia108.github.io/resume/",
            "photo": "images/students/kuzma.jpg"
        },
        {
            "name": "Yana Gerashenko",
            "websiteUrl": "https://shenjan.github.io/guest-house/",
            "codeSourceUrl": "https://github.com/shenjan/guest-house",
            "cvUrl": "",
            "photo": "images/students/gerashenko.jpg"
        },
        {
            "name": "Andrii Kuksovskyi",
            "websiteUrl": "https://ronin85.github.io/firstProject/",
            "codeSourceUrl": "https://github.com/ronin85/firstProject",
            "cvUrl": "",
            "photo": "images/students/kuksovskyi.jpg"
        },
        {
            "name": "Roman Stefanko",
            "websiteUrl": "https://arniroman.github.io/My-project/",
            "codeSourceUrl": "https://github.com/arniroman/My-project",
            "cvUrl": "",
            "photo": "images/students/stefanko.jpg"
        },
        {
            "name": "Roma Ivashchuk",
            "websiteUrl": "https://mute1add.github.io/recursia/",
            "codeSourceUrl": "https://github.com/mute1add/recursia",
            "cvUrl": "",
            "photo": "images/students/ivashchuk.jpg"
        },
        {
            "name": "Pavlo Khomyn",
            "websiteUrl": "https://darfell.github.io/softserve-project/",
            "codeSourceUrl": "https://github.com/darfell/softserve-project",
            "cvUrl": "",
            "photo": "images/students/khomyn.jpg"
        },
        {
            "name": "Volodymyr Irodiuk",
            "websiteUrl": "https://alchemist999.github.io/HelloWorld/",
            "codeSourceUrl": "https://github.com/alchemist999/HelloWorld",
            "cvUrl": "",
            "photo": "images/students/irodiuk.jpg"
        },
        {
            "name": "Oksana Khalus",
            "websiteUrl": "https://hoksana.github.io/my_website/",
            "codeSourceUrl": "https://github.com/hoksana/my_website",
            "cvUrl": "",
            "photo": "images/students/khalus.jpg"
        },
        {
            "name": "Olesia Sheremetieva",
            "websiteUrl": "https://olesya250.github.io/Olesyassheremeteva/",
            "codeSourceUrl": "https://github.com/olesya250/Olesyassheremeteva.git",
            "cvUrl": "",
            "photo": "images/students/sheremetieva.jpg"
        },
        {
            "name": "Bohdan Zhyvko",
            "websiteUrl": "https://bohdanzhyvko.github.io/cv/",
            "codeSourceUrl": "https://github.com/BohdanZhyvko/cv",
            "cvUrl": "https://drive.google.com/open?id=1b9U7ghfoke4KV_ao7ZuAgHq6zMJaKPFAFBZ_3gXWEug",
            "photo": "images/students/zhyvko.jpg"
        },
        {
            "name": "Dmytro Kachura",
            "websiteUrl": "https://dmytrokachura.github.io/personalsite/",
            "codeSourceUrl": "https://github.com/DmytroKachura/personalsite",
            "cvUrl": "",
            "photo": "images/students/kachura.jpg"
        },
        {
            "name": "Anna Lozynska",
            "websiteUrl": "https://annaloz.github.io/html4/",
            "codeSourceUrl": "https://github.com/AnnaLoz/html4",
            "cvUrl": "",
            "photo": "images/students/lozynska.jpg"
        },
        {
            "name": "Volodymyr Khvesyk",
            "websiteUrl": "https://vovax.github.io/i-radio/",
            "codeSourceUrl": "https://github.com/Vovax/i-radio",
            "cvUrl": "https://drive.google.com/open?id=0B_27IZrPdgzZMmQ1ZVg3M29UV2s",
            "photo": "images/students/khvesyk.jpg"
        },
        {
            "name": "Oleh Kozhushko",
            "websiteUrl": "https://olkozh95.github.io/myproject1/",
            "codeSourceUrl": "https://github.com/olkozh95/myproject1",
            "cvUrl": "",
            "photo": "images/students/kozhushko.jpg"
        },
        {
            "name": "Pavlo Fabuliak",
            "websiteUrl": "https://pavlosuperhero.github.io/web-studio/",
            "codeSourceUrl": "https://github.com/pavlosuperhero/web-studio/tree/gh-pages",
            "cvUrl": "",
            "photo": "images/students/fabuliak.jpg"
        },
        {
            "name": "Julia Chayka",
            "websiteUrl": "https://jul4ajka.github.io/c-v2/index.html",
            "codeSourceUrl": "https://github.com/jul4ajka/c-v2",
            "cvUrl": "https://www.linkedin.com/in/julia-chayka-848636127/",
            "photo": "images/students/chayka.jpg"
        },
        {
            "name": "Taras Ivanyshyn",
            "websiteUrl": "https://ivta.github.io/sto/index.html",
            "codeSourceUrl": "https://github.com/IvTa/sto",
            "cvUrl": "",
            "photo": "images/students/no-photo.gif"
        },
        {
            "name": "Viktoriia Voloshyna",
            "websiteUrl": "https://voloshynaviktoriia.github.io/Landing-page/",
            "codeSourceUrl": "https://github.com/VoloshynaViktoriia/Landing-page",
            "cvUrl": "",
            "photo": "images/students/voloshyna.jpg"
        },
        {
            "name": "Orest Krykh",
            "websiteUrl": "https://orestkrykh.github.io/website/",
            "codeSourceUrl": "https://github.com/OrestKrykh/website",
            "cvUrl": "",
            "photo": "images/students/krykh.jpg"
        },
        {
            "name": "Ihor Knysh",
            "websiteUrl": "https://igorknysh1.github.io/Kyrie/",
            "codeSourceUrl": "https://github.com/igorknysh1/Kyrie",
            "cvUrl": "https://www.linkedin.com/in/%D1%96%D0%B3%D0%BE%D1%80-%D0%BA%D0%BD%D0%B8%D1%88/",
            "photo": "images/students/knysh.jpg"
        },
        {
            "name": "Roksolana Kril",
            "websiteUrl": "https://krilr.github.io/MyProgect2/",
            "codeSourceUrl": "https://github.com/KrilR/MyProgect2",
            "cvUrl": "",
            "photo": "images/students/kril.png"
        },
        {
            "name": "Roman Markhevka",
            "websiteUrl": "https://marheva.github.io/project__finaly_softserve/",
            "codeSourceUrl": "https://github.com/marheva/project__finaly_softserve",
            "cvUrl": "",
            "photo": "images/students/markhevka.jpg"
        },
        {
            "name": "Marian Ben",
            "websiteUrl": "https://marianben.github.io/mysite/",
            "codeSourceUrl": "https://github.com/marianben/mysite",
            "cvUrl": "",
            "photo": "images/students/ben.jpg"
        }
    ];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
