//let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
let arr=[];
let size=4;
let tileN=size*size-1;
for(let j=0; j<size; j++){

		arr.push([]);
}
for(let i=0; i<tileN; i++){
let val=i+1;
let col=i%size;
let row=Math.floor(i/size);
arr[row].push(val);

}
arr[size-1].push(0);




Array.prototype.arr_shuffle=function (){

for(let i=0; i<this.length; i++){

let m=this[i]. length, k, temp;
while(--m>0){
			k=Math.floor(Math.random()*(m+1));
			temp=this[i][k];
			this[i][k]=this[i][m];
			this[i][m]=temp;
			
			}
			}
}
arr.arr_shuffle();
