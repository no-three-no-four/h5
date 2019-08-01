var ulList=document.querySelector('.shareholder-box');
    var liList=ulList.getElementsByTagName('li')

    var companyNews=document.querySelector('.company-news')
    
    window.onscroll=function(){
        if(ulList.getBoundingClientRect().top<750&&
            ulList.getBoundingClientRect().top>300){
           for(var i=0;i<liList.length;i++){
                if (i%2==0) {
                    liList[i].style.animation='top 1s  ease forwards '
                }else{
                    liList[i].style.animation='down 1s  ease forwards '
                }
           }
        }else if(ulList.getBoundingClientRect().top<300){

            for(var i=0;i<liList.length;i++){
                if (i%2==0) {
                    liList[i].style.animation='top 1s  ease forwards '
                }else{
                    liList[i].style.animation='down 1s  ease forwards '
                }
           }
            companyNews.style.animation='companyNews 0.8s 0.5s ease forwards '

        }

    }