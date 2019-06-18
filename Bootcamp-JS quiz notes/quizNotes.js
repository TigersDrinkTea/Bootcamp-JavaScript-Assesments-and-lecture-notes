var age = prompt('whats your age?');

if (age == 21) {
    alert('happy b-day')
} else if (age >= 21) {
    alert('come have a drink')
} else if (Math.sqrt(age) * Math.sqrt(age) == age) {
    alert('its a perfect square')
} else if (age / 2 != 0) {
    alert('your age is odd')
}


var number = -10

while (number <= 19) {
    console.log(number);
    number++;
}


var number = 10

while (number <= 40) {
    if (number % 2 !== 0) {
        console.log(number);

    }
    number++;
}


var number = 5

while (number <= 50) {
    if (number % 5 === 0 && number % 3 === 0) {
        console.log(number);

    }
    number++;
}

for (var i = 1; i <= 5; i++) {
    console.log(i);

}

var str = 'hello'

for (var i = 0; i < str.length; i++) {
    console.log(str[i]);

}

for (let index = -10; index < 41; index++) {
    console.log(index);

}

for (i = 10; i < 41; i++) {
    if (i % 2 === 0)
        console.log(i);
}

for (i = 300; i < 334; i++) {
    if (i % 2 !== 0) {
        console.log(i);

    }
}

for (i = 5; i < 51; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);

    }
}

function isEven(i) {
    if (i % 2 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

function factorial(num) {
    var result = 1
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function kebabToSnake(str) {
    var rep = str.replace(/-/g, '_')

    return rep;
}


// function to print an array backwards and not alter original 

function reverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}


// function to check the values in an array are all identical

function uniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false
        }
    }
    return true
}


// function to sum the numbers in array

function sumArray(arr) {
    var total = 0;
    arr.forEach(function (number) {
        total += number;
    })
    return total;
}

// function to find the largest number in an array

function max(arr) {
    var max = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

function myForEach (arr, func){
    //loop through array
    for(var i = 0; i<arr.length; i++){
       //call func for each item in array
        func(arr[i]);
}
}

// movie array and objects 
var watchedMovies = [
    {
        title:'Top Gun',
        hasWatched: true,
        rating: 8
    },
    {
        title:'Jurassic Park',
        hasWatched: true,
        rating: 8
    }, 
    {
        title:'Good Will Hunting',
        hasWatched: true,
        rating: 9
    },
    {
        title:'Les Miserables',
        hasWatched: false,
        rating: 3
    },
]

// now create a function to hold all the logic that builds the strings for each movie and concatenates in to a realistic review.
function StringBody(movie){
var result = 'you have ';
    if(movie.hasWatched){
        result += 'watched ';
     } else{
            result += 'not watched '
     }
            result += movie.title + ' - ' + movie.rating + ' stars.';
            return result;
        }

// this is now a forEach that passes in from each movie in the array with the anonymous function and then puts that data in the string to log each review. 
watchedMovies.forEach(function(movie){
   
       console.log(StringBody(movie));
});

