import { core } from '@pkgroll-issue/core'
import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    message: String,
  },
  setup(props) {
    h('div', {
      props,
      core,
    })
  },
})
