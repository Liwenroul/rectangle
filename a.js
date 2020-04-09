$(function(){
    //get dom elem
    var $width=$("#width");
    var $height=$("#height");
    var $btn=$("#calculate");
    var $perimeter=$("#perimeter");
    var $area=$("#area");
    //浮点误差
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    /**calc button click event */
    $btn.click(function(){
    //get value
        var w=Number($width.val());
        var h=Number($height.val());

    //判断小数点后的有效位数
    if($width.val().indexOf(".")!=-1){
        var wlength=$width.val().split(".")[1].length;
        var hlength=$height.val().split(".")[1].length;
        var n1=wlength<hlength?hlength:wlength;
        var n2=wlength+hlength;
    }
    else{
        n1=1;
        n2=1;
    }
    //calculate
        var p=2*roundFractional(w+h,n1);
        var a=roundFractional(w*h,n2);
    //output
        $perimeter.val(p);
        $area.val(a);
    })
    
});
