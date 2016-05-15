/**
 * Created by User on 15.05.2016.
 */
var obj = {
    className: 'open menu'
}

function addClass(object, str ) {
    var str2=object.className.split(' ');
    for (var i=0; i<str2.length; i++){
        if (str == str2[i]) {
            alert ("Class " + str + " already exists");
            return;
        }
    }
            str2.push(str);
            object.className=str2.join(' ');
            alert (object.className);

    


}
addClass(obj, 'new'); 
addClass(obj, 'open'); 
addClass(obj, 'me'); 
