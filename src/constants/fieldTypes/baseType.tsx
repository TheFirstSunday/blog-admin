import * as React from 'react'
import { Moment } from 'moment'
import {
  Input,
  InputNumber,
  DatePicker,
  TimePicker,
  Cascader,
  AutoComplete,
  Select,
  Radio,
  Switch,
  Slider,
  Rate
} from 'antd'
import { InputProps } from 'antd/lib/input'
import { RadioProps } from 'antd/lib/radio'
import { RateProps } from 'antd/lib/rate'
import { SliderSingleProps, SliderRangeProps } from 'antd/lib/slider'
import { SwitchProps } from 'antd/lib/switch'
import { CascaderProps } from 'antd/lib/cascader'
import { TimePickerProps } from 'antd/lib/time-picker'
import { InputNumberProps } from 'antd/lib/input-number'
import { AutoCompleteProps } from 'antd/lib/auto-complete'
import { SelectProps as AntdSelectProps, SelectValue } from 'antd/lib/select'
import { PickerProps, RangePickerProps } from 'antd/lib/date-picker/generatePicker'

const { RangePicker } = DatePicker
const defaultProps = {
  labelKey: 'label',
  valueKey: 'value'
}
type SelectProps = AntdSelectProps<SelectValue> & Partial<typeof defaultProps>
export default {
  input: (props: InputProps) => <Input {...props} />,
  number: (props: InputNumberProps) => <InputNumber {...props} />,
  datePicker: (props: PickerProps<Moment>) => <DatePicker {...props} />,
  rangePicker: (props: RangePickerProps<Moment>) => <RangePicker {...props} />,
  timePicker: (props: TimePickerProps) => <TimePicker {...props} />,
  cascader: (props: CascaderProps) => <Cascader {...props} />,
  autoComplete: (props: AutoCompleteProps) => <AutoComplete {...props} />,
  select: (props: SelectProps) => <Select {...props} />,
  radio: (props: RadioProps) => <Radio {...props} />,
  switch: (props: SwitchProps) => <Switch {...props} />,
  slider: (props: SliderSingleProps | SliderRangeProps) => <Slider {...props} />,
  rate: (props: RateProps) => <Rate {...props} />
}
