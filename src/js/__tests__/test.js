import ErrorRepository from '../app';

test('test method translate to get error description', () => {
  const errorRepo = new ErrorRepository();
  const targetDescription = 'SyntaxError';
  const actualDescription = errorRepo.translate(1);
  expect(actualDescription).toEqual(targetDescription);
})

test('test method translate to throw Error if error does not exist', () => {
  const errorRepo = new ErrorRepository();
  expect(() => {
    errorRepo.translate(7)
  }).toThrow();
})

