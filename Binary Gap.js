

function solution(N){
    let binary = N.toString(2)
    let array = []
    let length = 1;

    for(let i=0;i<binary.length;i++){
        if(binary[i]==0){
            if(binary[i+1]==1){
                array.push(length);
                length = 0;
            }
            length++
        }
    }
    return array.length ? Math.max(...array) : 0;
}
