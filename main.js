let password = document.getElementById('show-password');

password.addEventListener('click', function(e){
    

    if(this.dataset.show == 'show'){

        this.classList.remove('fa-lock');
        this.classList.add('fa-lock-open');
        this.dataset.show = 'hide';
        document.getElementById('password').type = "text";

    }else{

        this.classList.add('fa-lock');
        this.classList.remove('fa-lock-open');
        this.dataset.show = 'show';
        document.getElementById('password').type = "password";

    }
    
});