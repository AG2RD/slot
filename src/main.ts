import './slot-machine/slot-machine.module';
import './style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<main>
<slot-machine></slot-machine>
</main>`
