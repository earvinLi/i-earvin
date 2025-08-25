'use client';

// Local Dependencies
import TextInput from './index';

// Fixture Definition
const TextInputFixture = () => (
  <TextInput
    label='Text input'
    value={'Input value'}
    onChange={() => {}}
    inputState='default'
    helperText=''
  />
);

export default TextInputFixture;
