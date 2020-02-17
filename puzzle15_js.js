$('document').ready (function (){
			
			
			let header=$('h1');
			let field=$('<div><\div>');
			let width=350;
			let height=width;
			let spacing=10;
			function makefield(){
			//field.addClass('myfield');
			field.width(width).height (height);
			field.addClass('myfield');
			header.parent().append (field);
			}
			function maketile(){
			let tileN=size*size-1;
			let tileW=(width- spacing*(size+1))/size;
			let tileH=(height-spacing*(size+1))/size;
			for(let a=0; a<size; a++){
			for(let b=0; b<size; b++){
			if(arr[a][b]==0){
					continue;
			}
			let tile=$('<div>'+arr[a][b]+'</div>');
			tile.addClass('mytile');
			tile.width(tileW).height(tileH);
			//tile.addClass('mytile');
			tile.css('font-size', Math.floor(tileH* 2/3)+'px');
			tile.css('line-height', tileH+'px');
			field.append(tile);
			//var col=i%size;
			//var row=Math.floor(i / size);
			//arr[row].push(val);
			
			
			tile_Position(tile,b,a);
			
			 	}
			 	}
			 //	arr.arr_shuffle();
			 //	alert(arr);
			 	
			 	
				$('.mytile').on('click',tile_touched);
			function tile_Position(tile,col,row){
			let x=col* (tile.width()+spacing)+spacing;
			let y=row* (tile.height()+spacing)+spacing;
			tile.css('left', x);
			tile.css('top', y);
			}
			function tile_touched(evt){
			
			var gameEnd=isGameover();
			let tile=$(evt.currentTarget);
			let toc=parseInt(tile.text());
			
			outer:
			for(var k=0; k<size; k+=1){
					for(var m=0; m<size; m+=1){
							if(arr[k][m]==toc){
							//alert(k+' '+m);
							break outer;
							}//if
					}//innerloop
					
			}//outer loop
			//alert(k+' '+m);
			tile_move(tile,k,m);
			var gameEnd=isGameover();
			
			if(gameEnd){
			//alert(arr);
			alert('gameisover!');
			}
			}//func
			function tile_move(tile, i, j){
			let dx=0;
			let dy=0;
			if(j>0 && arr[i][j-1]==0){
				dx=-1;
			}
			else if(j<size-1 && arr[i][j+1]==0){
				dx=1;
			}
			else if(i>0 && arr[i-1][j]==0){
				dy=-1;
			}
			else if(i<size-1&& arr[i+1][j]==0){
				dy=1;
			}
			else{
				return;
			}
			let val1=arr[i][j]; 
			arr[i+dy][j+dx]=val1;
			arr[i][j]=0;
			tile_Position(tile,j+dx,i+dy);
			
			}//tilemove
			}
			makefield ();
			maketile ();
});