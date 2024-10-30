const arr = [15,13,6,1,5,10]
function minimumElement(){
    let minElement = arr[3]
    for(let i=0; i<arr.length; i++){
        console.log("index",i,arr[i])
        if(arr[i]<minElement){
            console.log(i,arr[i],{minElement})
            minElement = arr[i]
            console.log("minElement",minElement)
        }
    }
console.log("minElement",minElement)
}
minimumElement();