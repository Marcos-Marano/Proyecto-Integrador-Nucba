(async () => {
    const {value: DEV} = await swal.fire({
        title: '<span class="btn-alerta">"Bienvenido futuro DEV!"</span>',
        footer: "D/E\V copyright ©",
        width:'99%',
        icon:'question',
        imageUrl:'img/img3.png',
        imageAlt:'D/E\V',
        backdrop: true,
        confirmButtonText: '<span class="btn-alerta">Seleccionar</span>',
        confirmButtonColor:'#fa8072',
        confirmButtonAriaLabel:'Confirmar',
        showCancelButton: true,
        cancelButtonText: '<span class="btn-alerta">Cancelar</span>',
        confirmButtonAriaLabel:'Cancelar',
        showCloseButton: true,
        closeButtonAriaLabel: 'Cerrar alerta',
        allowOutsideClick: false,
        allowOutEscapeKey: false,
        allowOutEnterKey: false,
        stopKeydownPropagation: false,
        input: 'select',
        inputPlaceholder: '<span class="btn-alerta">Te gusta programar?</span>',
        inputValue: '',
        inputOptions: {
            si: 'Si',
            no: 'No',
        }
    });
    if (DEV) {
        swal.fire({
            title:  '<span class="btn-alerta">"Contanos, que lenguaje sabes?"</span>',
            footer: "D/E\V copyright ©",
            icon:'question',
            confirmButtonText: '<span class="btn-alerta">Seleccionar</span>',
            confirmButtonColor:'#fa8072',
            confirmButtonAriaLabel:'Confirmar',
            showCancelButton: true,
            cancelButtonText: '<span class="btn-alerta">Cancelar</span>',
            confirmButtonAriaLabel:'Cancelar',
            showCloseButton: true,
            closeButtonAriaLabel: 'Cerrar alerta',
            allowOutsideClick: false,
            allowOutEscapeKey: false,
            allowOutEnterKey: false,
            stopKeydownPropagation: false,
            input: 'select',
            inputPlaceholder: 'Lenguaje',
            inputValue: '',
            inputOptions: {
              JavaScript: 'JavaScript',
              Phyton: 'Phyton',
              Java: 'Java',
              otro: 'Otro'
            }
        })
    }else{
        swal.fire({
            html:'<span class="btn-alerta">"Por favor acepte nuestros <a href="#">terminos y condiciones</a>"</span>',
            confirmButtonText:'<span class="btn-alerta">Acepto</span>',
            icon: 'warning',
            backdrop: true,
            allowEscapeKey: false,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            showCancelButton:false,
            showcloseButton: false,
            closeButtonAriLabel: 'Cerrar esta alerta',
        })
    }
    }) ()
    
    
    