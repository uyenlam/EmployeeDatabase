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


$("#submit").on("click", function() {


    empName = $('#employeeName').val().trim();
    empRole = $('#employeeRole').val().trim();
    empStartDate = $('#employeeStartDate').val().trim();
    monthlyRate = $('#employeeMonthlyRate').val().trim();

    database.ref().push({
        empName: empName,
        empRole: empRole,
        empStartDate: empStartDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    });
    //Don't refresh the page
    return false;

})


database.ref().on('child_added', function(childSnapshot) {

    // all records after the last continue to invoke this function
    console.log(childSnapshot.val().empName);
    console.log(childSnapshot.val().empRole);
    console.log(childSnapshot.val().empStartDate);
    console.log(childSnapshot.val().monthlyRate);
    console.log(childSnapshot.val().dateAdded);

    $('#fullMemberList').append('<tr><td>' + empName +
        '</td><td>' + empRole +
        '</td><td>' + empStartDate +
        '</td><td>' + monthlyRate + '</td></tr>');



});
