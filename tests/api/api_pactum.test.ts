import { test } from '@playwright/test';
import pactum from 'pactum';

test.describe('API Testing with Pactum @API', () => {
  
  test('Verify Placeholder API', async () => {
    await pactum.spec()
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .expectStatus(200)
      .expectJsonLike({
        id: 1
      });
  });

});
