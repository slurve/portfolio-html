/* some quick form validation */
document.querySelector('.button--submit').addEventListener('click',function(e){
    var formName = document.querySelector('input[name=name]');
    var formEmail = document.querySelector('input[name=email]');
    var formPhone = document.querySelector('input[name=phone]');
    var formDesc = document.querySelector('textarea[name=description]');
    var errorMsg = document.querySelector('#error-message');
    var errors = 0;

    if ( formName.value == '' ) {
        formName.className = 'error-field';
        errorMsg.className = 'active';
        errors++;
    }

    if ( formEmail.value == '' ) {
        formEmail.className = 'error-field';
        errorMsg.className = 'active';
        errors++;
    }

    if ( formPhone.value == '' ) {
        formPhone.className = 'error-field';
        errorMsg.className = 'active';
        errors++;
    }

    if ( formDesc.value == '' ) {
        formDesc.className = 'error-field';
        errorMsg.className = 'active';
        errors++;
    }
    
    formName.addEventListener('focus',function(e){
        e.target.className = '';
    });

    formEmail.addEventListener('focus',function(e){
        e.target.className = '';
    });

    formPhone.addEventListener('focus',function(e){
        e.target.className = '';
    });

    formDesc.addEventListener('focus',function(e){
        e.target.className = '';
    });
    
    if ( errors > 0 ) {
        e.preventDefault();
        return false;
    }

});

/* thanks msg */
var url = window.location.href;
if ( url.indexOf('?' + 'msg' + '=') != -1 ) {
    document.querySelector('.contact').className = 'panel contact thanks';
}