$('.accordion__toggle').on('click',function(){
    var _this = $(this),
        headingParent = _this.closest('.about__accordion__heading_wrap'),
        accordionBody = headingParent.siblings('.about__accordion__body'),
        mainParent = _this.parents('.about__accordion__wrapper'),
        isActive = mainParent.hasClass('is-active');
    
    if(isActive){
      accordionBody.slideUp('fast');
      mainParent.removeClass('is-active');
    }else{
       accordionBody.slideDown('fast');
      mainParent.addClass('is-active');
    }
      
  })