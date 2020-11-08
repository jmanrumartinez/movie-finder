import ApiClient from '../../utils/ApiClient';

describe('ApiClient', () => {
  it('parse params', () => {
    const params = { param1: 'test1', param2: 'test2' };
    expect(ApiClient.objectToParams(params)).toBe('param1=test1&param2=test2');
  });

  it('on parse empty params return a undefined', () => {
    const params = { };
    expect(ApiClient.objectToParams(params)).toBe('');
  });

  it('get a movie', async () => {
    const movieId = 337401;

    const movieDetails = await ApiClient.get(`movie/${movieId}`, {
      language: 'es',
    });
    expect(movieDetails.id).toEqual(movieId);
    expect(movieDetails.original_title).toEqual('Mulan');
  });
});
