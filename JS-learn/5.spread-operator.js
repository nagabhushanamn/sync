

function func(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let nums = [10, 20, 30];

// func(nums[0], num[1], nums[2]);

func(...nums);


let arr1 = [1, 2, 3];
let arr2 = [7, 8, 9];

let name="Nag";

let newArray = [...arr1,4, 5, 6,...arr2,...name];

