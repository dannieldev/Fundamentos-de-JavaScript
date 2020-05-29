//LAS CLASES DEVEN ESTAR CERRADAS PARA MODIFICACIÓN 
//PERO ABIERTAS PARA SER EXTENDIDAS

class Field {
  errors: string[];
  input: HTMLInputElement;

  constructor(input: HTMLInputElement) {
    this.input = input;
    this.errors = [];

    let errorMessage = document.createElement('p');
    errorMessage.className = 'text-danger';
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener('input', () => { //valida hasta que este ingregando en el imput
      this.errors = [];
      this.validate(); //validar simpre que se llene el imput
      errorMessage.innerText = this.errors[0] || ''; //Definir un orden para mostrar errores
    });
  }

  validate() {}
}

function RequiredFieldDecorator(field: Field): Field {
  let validate = field.validate;

  field.validate = function() {
    validate();
    let value = field.input.value;
    if (!value) { //Validad si hay o no algo ingresado en el imput
      field.errors.push('Requerido');
    }
  };

  return field;
}

function EmailFieldDecorator(field: Field): Field {
  let validate = field.validate;

  field.validate = function() {
    validate();
    let value = field.input.value;

    if (value.indexOf('@') === -1) {//Si no se enctro un @ no es un email
      field.errors.push('Debe ser un email');
    }
  };

  return field;
}

let field = new Field(document.querySelector('#email'));
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);
