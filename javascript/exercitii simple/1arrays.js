/*
    Creeaza un fisier javascript cu numele tau si acolo scrie aceste exercitii.

1. Suma elementelor
Scrie o funcție care primește un array de numere și returnează suma tuturor elementelor din array.

2. Elementul maxim
Scrie o funcție care primește un array de numere și returnează valoarea maximă din array.

3. Elemente unice
Scrie o funcție care primește un array și returnează un nou array care conține doar elementele 
unice din array - ul inițial.

4. Concatenarea array - urilor
Scrie o funcție care primește două array - uri și returnează un nou array care conține toate 
elementele din cele două array - uri concatenate.

5. Filtrarea array - ului
Scrie o funcție care primește un array și returnează un nou array  care conține doar elementele de tip numeric.

6. Inversarea array - ului
Scrie o funcție care primește un array și returnează un nou array care conține 
elementele în ordine inversă.

7. Căutarea elementului
Scrie o funcție care primește un array și un element și returnează `true` dacă elementul 
se găsește în array și `false` în caz contrar, folosind metoda includes()

8. Transformarea elementelor cu map()
Scrie o funcție care primește un array de numere și returnează un nou array în care fiecare element este dublat, folosind metoda map().

9. Filtrarea elementelor cu filter()
Scrie o funcție care primește un array de numere și returnează un nou array care conține doar 
numerele pare, folosind metoda filter().    

10. Scrie o funcție care calculeaza suma elementelor unei matrici (array multidimensional)

*/

const array = [1,2,2,3,2, 'name', 'email', 'name'];

// get unique values from an array 
function removeDuplicates(array){
    const result = {};
    for(let item of array){
        result[item] = item;
    }

    return Object.values(result);
}

// get unique values from an array, the simple solution
function removeDuplicates2(array){
    return Array.from(new Set(array));
}

// console.log(removeDuplicates2(array));

const array1 = [1, 2, 3];
const array2 = ['a','b'];
// destructuring arrays
const array3 = [...array1, ...array2];
console.log(array3);

// const obj = {name:'Alex', age:'30'};
// console.log(...obj);

