/* Second Exercise for Node JS */

function average(nums) {
    var total = 0;
    
    for (var i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    
    console.log( Math.ceil((total/nums.length)) );
    return Math.ceil((total/nums.length));
}

var scores = [90, 98 ,89, 100, 100, 86, 94];
average(scores);

scores = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores);