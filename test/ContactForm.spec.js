import { mount } from 'avoriaz'
import test from 'tape'

test('Number 1 should be true', t => {
  t.looseEqual(1, true)
  t.end()
})
