import * as React from 'react'
import { Moment } from 'moment'
import { Input, InputNumber, DatePicker, TimePicker, Cascader, AutoComplete } from 'antd'
import { InputProps } from 'antd/lib/input'
import { InputNumberProps } from 'antd/lib/input-number'
import { TimePickerProps } from 'antd/lib/time-picker'
import { CascaderProps } from 'antd/lib/cascader'
import { AutoCompleteProps } from 'antd/lib/auto-complete'
import { PickerProps, RangePickerProps } from 'antd/lib/date-picker/generatePicker'

const { RangePicker } = DatePicker

export default {
  input: (props: InputProps) => <Input {...props} />,
  number: (props: InputNumberProps) => <InputNumber {...props} />,
  datePicker: (props: PickerProps<Moment>) => <DatePicker {...props} />,
  rangePicker: (props: RangePickerProps<Moment>) => <RangePicker {...props} />,
  timePicker: (props: TimePickerProps) => <TimePicker {...props} />,
  cascader: (props: CascaderProps) => <Cascader {...props} />,
  autoComplete: (props: AutoCompleteProps) => <AutoComplete {...props} />
}
