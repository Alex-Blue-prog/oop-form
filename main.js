// FORM SECTION:
class Form {
    method = "GET"; 
    items = []; //array of inputs for the form

    constructor(method, action, container) {
        this.method = method;
        this.action = action;
        this.container = document.querySelector(container);
    }

    //ADD A NEW INPUT TO THE ARRAY
    addInputs(input) {
        this.items.push(input);
    }

    render() {
        //CREATE FORM AND ADD THE ATTRIBUTES
        let form = document.createElement("form");
        form.setAttribute("method", this.method);
        form.setAttribute("action", this.action);

        //LOOP BY THE INPUTS AND APPEND THEM IN THE FORM
        // for (let i in this.items) {
        //     this.items[i].render(form);
        // }
        this.items.forEach(value => {
            value.render(form);
        });

        //PUT THE FORM AT THE PAGE
        this.container.appendChild(form);
    }
}

let form = new Form("GET", "https://englishsupersite.com/", ".formArea");


// INPUT SECTION:
class Input {
    _type = "text";
    required = false;
    autoComplete = "on";

    constructor(name, label) {
        this.name = name;
        this.label = label;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        if(["text", "email", "password", "submit"].includes(value)) {
            this._type = value;
        } else {
            throw new Error(`The input ${value} type doesn't exist. only 4 types can be allowed (text, email, password and submit). `);
        }
    }

    //APPEND THE INPUT INSIDE THE FORM
    render(form) {
        const input = document.createElement("input");
        input.type = this.type;
        input.required = this.required;
        input.name = this.name;
        input.placeholder = this.label;
        input.autocomplete = this.autoComplete;

        form.appendChild(input);
    }
}

//create inputs and add to the form
const email = new Input("email", "digite o seu email");
email.type = "email";
email.required = true;
// email.autoComplete = "off";
form.addInputs(email);

const password = new Input("password", "digite a sua senha");
password.type = "password";
password.required = true;
form.addInputs(password);

//BUTTON SECTION
class Button extends Input {
    constructor(label) {
        super("", label);
        this.label = label;
        this.type = "submit";
    }

    render(form) {
        let button = document.createElement("input");
        button.value = this.label;
        button.type = this.type;

        form.appendChild(button);
    }
}

const button = new Button("Enviar");
form.addInputs(button);

//call the render function to render the form after the inputs were created
form.render();
