angular.
  module("scoreBoardPage", [])
  .controller("mainController", ($scope) => {
    $scope.renamedTeam1 = "";
    $scope.updatet1 = () => {
      console.log("button was clicked")
      $scope.renamedTeam1 = $scope.rename1;
      console.log($scope.renamedTeam1)
    }
    $scope.renamedTeam2 = "";
    $scope.updatet2 = () => {
      console.log("button was clicked")
      $scope.renamedTeam2 = $scope.rename2;
      console.log($scope.renamedTeam2)
    }
    $scope.teamOneScore = 0;
    $scope.t1add1 = () => {
      $scope.teamOneScore = $scope.teamOneScore + 1;
    }
    $scope.teamOneScore = 0;
    $scope.t1sub1 = () => {
      $scope.teamOneScore = $scope.teamOneScore -= 1;
    }
    $scope.teamOneScore = 0;
    $scope.t1add1 = () => {
      $scope.teamOneScore = $scope.teamOneScore + 1;
    }
    $scope.teamOneScore = 0;
    $scope.t1sub1 = () => {
      $scope.teamOneScore = $scope.teamOneScore -= 1;
    }
    $scope.teamTwoScore = 0;
    $scope.t2add1 = () => {
      $scope.teamTwoScore = $scope.teamTwoScore + 1;
    }
    $scope.teamTwoScore = 0;
    $scope.t2sub1 = () => {
      $scope.teamOneScore = $scope.teamTwoScore -= 1;
    }
  })
    

    // let total1 = 0;
    // let total2 = 0;
    // console.log(total1);

    // const t1add1 = () => {
    //   total1++;
    //   console.log(total1)
    //   const teamscore1 = document.querySelector(".teamonescore");
    //   teamscore1.textContent = total1;
    // }

    // const t2add1 = () => {
    //   total2++;
    //   console.log(total1)
    //   const teamscore2 = document.querySelector(".teamtwoscore");
    //   teamscore2.textContent = total2;
    // }

    // const t1sub1 = () => {
    //   total1--;
    //   console.log(total1)
    //   const teamscore1 = document.querySelector(".teamonescore");
    //   teamscore1.textContent = total1;
    // }

    // const t2sub1 = () => {
    //   total2--;
    //   console.log(total1)
    //   const teamscore2 = document.querySelector(".teamtwoscore");
    //   teamscore2.textContent = total2;
    // }
// const updatet1 = () => {
//   let updateTeamOne = document.querySelector(".rename1").value;
//   console.log(updateTeamOne);
//   const finalTeamName = document.querySelector(".renamedteam1")
//   finalTeamName.textContent = updateTeamOne
// }

// const updatet2 = () => {
//   let updateTeamTwo = document.querySelector(".rename2").value;
//   console.log(updateTeamTwo);
//   const finalTeamName = document.querySelector(".renamedteam2")
//   finalTeamName.textContent = updateTeamTwo
// }