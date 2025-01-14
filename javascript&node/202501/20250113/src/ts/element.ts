const $input = document.querySelector('input["type=text"]') as HTMLInputElement;
const val = $input.value;


const $input2 = <HTMLInputElement>document.querySelector('input["type="text"]');

const $input3: HTMLInputElement | null = document.querySelector('input["type="text"]');