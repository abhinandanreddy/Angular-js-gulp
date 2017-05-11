/**
 * Created by abhi on 4/13/2017.
 */

app.controller('gridDirective',['$scope',function(){

}]);

app.directive('gridTable',function(){
   return{
       restrict:'AE',
       require:'ngmodel',
       templateUrl:'/gridTable.html',
       scope:{},
       compile:function(){}

   }
});
