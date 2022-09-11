import { ExtractPropTypes } from 'vue'

export const types = ['default', 'primary', 'success', 'waring', 'danger']

export const sizes = ['large', 'normal', 'small', 'mini']

export const Props = {
  type: {
    type: String,
    values: types
  },
  size: {
    type: String,
    values: sizes
  }
}

export type ButtonProps = ExtractPropTypes<typeof Props>