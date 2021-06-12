var arr = [3,3,4,2,4,4,2,4,4];
l=arr.length
k=l/2
q=0
a=[]
var counts = [];
for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
  
 a.push(counts[num])

}
p=Math.max(...a)
if (p>k){
    let index_p=(a.indexOf(p))
    
    console.log(arr[index_p])
}
else{
    console.log("No Majority Elements")
}
