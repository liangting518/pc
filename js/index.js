window.onload=function(){
	var oL = document.getElementById('search');
	var oForm = document.getElementById('formWrap');
	var oSBtn = document.getElementById('search-btn');
	var oA = oL.getElementsByTagName('a');
	var onoff = true;
		oA[0].onclick= function(){
			if(onoff){
				oA[0].className = 'hoversearch';
				oForm.style.display='block';
			}else{
				
				oA[0].className = 'search pad-R5 dis-B';
				oForm.style.display='none';
			}
			onoff = !onoff;
		}
		var oImg = document.getElementById('banner-img');
		var aListImg = oImg.getElementsByTagName('img');
		var oBtnBox = document.getElementById('banner-btn');
		var aBtnList = oBtnBox.getElementsByTagName('li');
		var oPrev = document.getElementById('prev');
		var oNext = document.getElementById('next');
		var oBanBox = document.getElementById('m-banner');
		var num=0;
		var oldBtn = aBtnList[num];
		var oldImg = aListImg[num];
		var timer;
		var i=0;
		for(;i<9;i++){
			aBtnList[i].index = i;
			aBtnList[i].onclick=function(){
				num = this.index;
				run();	
			}
		}
		function run(){
			oldBtn.className='fl-L hov-cur';
			aBtnList[num].className='show fl-L hov-cur';
			oldBtn = aBtnList[num];
			oldImg.className = 'pos-A dis-N';
			aListImg[num].className='pos-A';
			oldImg = aListImg[num];
		}
		oPrev.onclick = function(){
			num--;
			if(num<0){
				num=8;
			}
			run();
		}
		oNext.onclick = function(){
			num++;
			if(num>8){
				num=0;
			}
			run();
		}
		autoplay();
		function autoplay(){
			timer = setInterval(
				function(){
					num++;
					if(num>8){
						num=0;
					}
					run();
			},1000);
		}
		oBanBox.onmouseover = function(){
		
			clearInterval(timer);
		}
		oBanBox.onmouseout = function(){
			autoplay();
		}
}
