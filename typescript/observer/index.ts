interface Observer {
  update: (data: any) => void; //Recivir una actualización
}

interface Subject {
  subscribe: (observer: Observer) => void; //su
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject { //para informar a los subcriptores
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement = document.querySelector('#value');
    el.addEventListener('input', () => {
      this.notify(el.value);
    });
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex(obs => { //Encontrar el indice de 
      return obs === observer; //Si 
    });

    this.observers.splice(index, 1); //slipe: una funcionn de los array
  }

  notify(data: any) {// notificar a todos los subcriptores
    this.observers.forEach(observer => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement;

  constructor() {
    this.el = document.querySelector('#price');
  }

  update(data: any) {
    this.el.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => value.unsubscribe(display), 5000);
