//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function sortAccending(numArray){
    numArray.sort(function(a, b){
        return a-b
    });
}

//Sort each array in decending order.
function sortDecending(numArray){
numArray.sort(function(a, b){ 
    return b-a 
});
}
 sortAccending(nums3);
 console.log(nums3)
 sortDecending(nums3)
 console.log(nums3)

