let numbers = [
               [1,2,3],
               [4,5,6],
               [7,8,9]
            ]

function update(numbers){
    
    let arr_numbers = [];
    let idx = 0;

    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            arr_numbers[idx++] = numbers[i][j];
        }
    }

   
    for(let i=1; i<=9; i++){
        document.getElementById("btn-"+i).innerHTML = `
        <button><h2>${arr_numbers[i-1]}</h2></button>
        `;
    }
    
}
function handler(){
    console.log("hello")
    let val_1 = numbers[0][2];
    numbers[0][2] = numbers[0][1];
    numbers[0][1] = numbers[0][0];

    let val_2 = numbers[1][2];
    numbers[1][2] = val_1;

    let val_3 = numbers[2][2];
    numbers[2][2] = val_2;

    let val_4 = numbers[2][1];
    numbers[2][1] = val_3;

    let val_5 = numbers[2][0];
    numbers[2][0] = val_4;

    let val_6 = numbers[1][0];
    numbers[1][0] = val_5;

    numbers[0][0]=val_6;

    update(numbers);
}

