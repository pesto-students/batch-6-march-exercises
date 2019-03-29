import { isString } from 'util';

function abbreviateString(word) {
  if (!isString(word)) {
    throw new Error('Please enter Strings!');
  }
  const { 0: firstWord, [word.split(' ').length - 1]: lastWord } = word.split(' ');
  return `${firstWord.charAt(0).toUpperCase()}${firstWord.slice(1)} ${lastWord[0].toUpperCase()}.`;
}

export { abbreviateString };
