/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the hashData internal function.
 */

import { describe, it } from '@std/testing/bdd';
import { assert, assertEquals } from '@std/assert';

import { Exception } from '../mod.ts';
import { hashData } from './hash_data.ts';

describe('hashData', () => {
  describe('hashData(exc)', () => {
    it('should return a hash of the exception data', () => {
      const exc = new Exception('An error occurred.');
      const hash = hashData(exc);
      assert(typeof hash === 'number');
    });

    it('should return a different hash for different exception data', () => {
      const exc1 = new Exception('An error occurred.');
      const exc2 = new Exception('Another error occurred.');
      const hash1 = hashData(exc1);
      const hash2 = hashData(exc2);
      assert(hash1 !== hash2);
    });

    it('should return a different hash on same exception data at different time.', () => {
      const exc1 = new Exception('An error occurred.');
      const hash1 = hashData(exc1);
      const hash2 = hashData(exc1);
      assert(hash1 !== hash2);
    });

    it('should give an expected value based on known-randomness', () => {
      const exc = new Exception('An error occurred.');
      const date = 1704132000000;
      const random = 998;
      const id = date * random;
      const hash = hashData(exc, id);

      assertEquals(hash, 1438393485);
    });
  });
});
