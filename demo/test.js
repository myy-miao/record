
function debounce(func, wait, immediate=false){
    let timeout;
    return function(){
        let context = this;
        let args = arguments;
        if(timeout) clearTimeout(timeout);
        if(immediate && !timeout) func.apply(context,args);
        timeout = setTimeout(() => {
            if(!immediate){
                func.apply(context,args);
            }else{
                timeout = null;
            }
        },wait);
    };
}

function throttling(func, wait, immediate=false){
    let timeout;
    let args = {
        context:null,
        args:null,
    };
    return function(){
        args.context = this;
        args.args = arguments;
        if(!timeout){
            if(immediate) func.apply(args.context,args.args);
            timeout = setTimeout(() => {
                timeout = null;
                if(!immediate) func.apply(args.context,args.args);
            },wait);
        } 
    };
}