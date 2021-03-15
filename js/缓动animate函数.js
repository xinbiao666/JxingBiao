function animate(obj, target, fun) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var tem = (target - obj.offsetLeft) / 10;
        var step = tem > 0 ? Math.ceil(tem) : Math.floor(tem);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            fun && fun();
        }
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}