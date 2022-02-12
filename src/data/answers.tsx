import { COMMON_NOUNS } from 'pd-korean-noun-list-for-wordles'
import { disassembledWord } from './Korean'

const answers = COMMON_NOUNS.filter((word) => {
  return word.length === 2
}).map((word) => {
  return disassembledWord(word)
})

export default answers
