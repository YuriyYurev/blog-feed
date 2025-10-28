import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 is-hovered scrollable';
        expect(
            classNames('someClass', { 'is-hovered': true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 class2 is-active';
        expect(
            classNames('someClass', { scrollable: false, 'is-active': true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(
            classNames(
                'someClass',
                { 'is-active': undefined, scrollable: true },
                ['class1', 'class2'],
            ),
        ).toBe(expected);
    });
});
