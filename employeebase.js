// Initialize Firebase
var config = {
    apiKey: "AIzaSyANh2StiQqbe_OVE5Fold9QbYhr7CF22TY",
    authDomain: "employee-databse.firebaseapp.com",
    databaseURL: "https://employee-databse.firebaseio.com",
    storageBucket: "employee-databse.appspot.com",
    messagingSenderId: "651168611237"
};

firebase.initializeApp(config);

var database = firebase.database();

//Initial variables

var empName = "";
var empRole = "";
var empStartDate = "";
var monthsWorked = "";
var monthlyRate = 0;
var totalBilled = 0;


$("#submit").on("click", function() {

    empName = $('#employeeName').val().trim();
    empRole = $('#employeeRole').val().trim();
    empStartDate = $('#employeeStartDate').val().trim();
    var convertedDate = moment(new Date(empStartDate));
    monthsWorked = Math.abs(moment(convertedDate).diff(moment(), 'months'));
    //moment($("#employeeStartDate").val().trim(), "DD/MM/YY").format("X");
    monthlyRate = $('#employeeMonthlyRate').val().trim();
    totalBilled = monthsWorked * monthlyRate;

    console.log(empName);
    console.log(empRole);
    console.log(empStartDate);
    console.log(monthlyRate);
    console.log(monthsWorked);
    console.log(totalBilled);

    database.ref().push({
        empName: empName,
        empRole: empRole,
        empStartDate: empStartDate,
        monthsWorked: monthsWorked,
        monthlyRate: monthlyRate,
        totalBilled: totalBilled,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    });

    $('#employeeName').val("");
    $('#employeeRole').val("");
    $('#employeeStartDate').val("");
    $('#employeeMonthlyRate').val("");
    //Don't refresh the page
    return false;

})


database.ref().on('child_added', function(childSnapshot) {

    // all records after the last continue to invoke this function
    console.log(childSnapshot.val().empName);
    console.log(childSnapshot.val().empRole);
    console.log(childSnapshot.val().empStartDate);
    console.log(childSnapshot.val().monthlyRate);
    console.log(childSnapshot.val().totalBilled)
    console.log(childSnapshot.val().dateAdded);

    $('#fullMemberList').append('<tr><td>' + childSnapshot.val().empName +
        '</td><td>' + childSnapshot.val().empRole +
        '</td><td>' + childSnapshot.val().empStartDate +
        '</td><td>' + childSnapshot.val().monthsWorked +
        '</td><td>' + childSnapshot.val().monthlyRate +
        '</td><td>' + childSnapshot.val().totalBilled +
        '</td></tr>');


});
