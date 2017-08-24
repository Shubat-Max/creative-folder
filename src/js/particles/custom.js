$(document).ready(function(){
    $(document).find('.icon.icon-close').unbind().click(function(event){
        var $this = $(event.target);
        $this.parent().animate({
            left:  "+="+$this.parent().width()*2
        }, 500, function(){
            $this.parent().hide().remove();
        });
    });
});
