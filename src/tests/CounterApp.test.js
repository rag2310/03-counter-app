import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas para CounterApp', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('debe mostrar <CounterApp /> correctamente (hacer match con un snapshot)', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', () => {

        const value = 100;

        const wrapper = shallow(<CounterApp value={value} />);

        const textoValue = wrapper.find('h2').text();

        expect(value.toString()).toBe(textoValue);
    });

    test('debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    });

    test('debe de decrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('debe de reiniciar con el boton Reset', () => {

        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');
    });

})
