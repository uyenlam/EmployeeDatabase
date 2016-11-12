// Initialize Firebase
var config = {
    apiKey: "AIzaSyANh2StiQqbe_OVE5Fold9QbYhr7CF22TY",
    authDomain: "employee-databse.firebaseapp.com",
    databaseURL: "https://employee-databse.firebaseio.com",
    storageBucket: "employee-databse.appspot.com",
    messagingSenderId: "651168611237"
};
firebase.initializeApp(config);

database = firebase.database();

//Initial varibales

var empName = "";
var empRole = "";
var startDate = "";
var monthly_rate = 0;


$("#addEmployee").on("click", function() {


    name = $('#nameinput').val().trim();
    empRole = $('#empRole').val().trim();
    startDate = $('#startDate').val();
    monthly_rate = $('#monthly_rate').val().trim();

    database.ref().push({
        employeeName: name,
        empRole: empRole,
        empStartDate: startDate

    });

})


database.on('child_added', function(snapshot) {

    // all records after the last continue to invoke this function
    console.log(snapshot.val());

});
