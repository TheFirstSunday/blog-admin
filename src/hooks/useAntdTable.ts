import useRequest from '@ahooksjs/use-request'
import { useState, useCallback, useEffect, useRef } from 'react'
import {
  CombineService,
  PaginatedParams,
  BasePaginatedOptions,
  PaginatedOptionsWithFormat,
  PaginatedFormatReturn,
  PaginatedResult
} from '@ahooksjs/use-request/lib/types'
import useUpdateEffect from './useUpdateEffect'
import usePersistFn from './usePersistFn'

export type {
  CombineService,
  PaginatedParams,
  BasePaginatedOptions,
  PaginatedOptionsWithFormat,
  PaginatedFormatReturn,
  PaginatedResult
}

export interface Store {
  [name: string]: any
}

type AntdValidateFields = (fieldNames?: string[]) => Promise<any>

export interface UseAntdTableFormUtils {
  getFieldInstance?: (name: string) => {} // antd 3
  setFieldsValue: (value: Store) => void
  getFieldsValue: (...args: any) => Store
  resetFields: (...args: any) => void
  validateFields: AntdValidateFields
  [key: string]: any
}

export interface Result<Item> extends PaginatedResult<Item> {
  search: {
    type: 'simple' | 'advance'
    changeType: () => void
    submit: () => void
    reset: () => void
  }
}

export interface BaseOptions<U> extends Omit<BasePaginatedOptions<U>, 'paginated'> {
  form?: UseAntdTableFormUtils
  defaultType?: 'simple' | 'advance'
}

export interface OptionsWithFormat<R, Item, U>
  extends Omit<PaginatedOptionsWithFormat<R, Item, U>, 'paginated'> {
  form?: UseAntdTableFormUtils
  defaultType?: 'simple' | 'advance'
}

function useAntdTable<R = any, Item = any, U extends Item = any>(
  service: CombineService<R, PaginatedParams>,
  options: OptionsWithFormat<R, Item, U>
): Result<Item>
function useAntdTable<R = any, Item = any, U extends Item = any>(
  service: CombineService<PaginatedFormatReturn<Item>, PaginatedParams>,
  options: BaseOptions<U>
): Result<Item>
function useAntdTable<R = any, Item = any, U extends Item = any>(
  service: CombineService<any, any>,
  options: BaseOptions<U> | OptionsWithFormat<R, Item, U>
): any {
  const {
    form,
    refreshDeps = [],
    manual,
    defaultType = 'simple',
    defaultParams,
    ...restOptions
  } = options
  const result = useRequest(service, {
    ...restOptions,
    paginated: true as true,
    manual: true
  })

  const { params, run } = result

  const cacheFormTableData = params[2] || ({} as any)

  // ?????????????????????
  const [type, setType] = useState(cacheFormTableData.type || defaultType)

  // ?????? form ??????????????? simple ??? advance
  const [allFormData, setAllFormData] = useState<Store>(
    cacheFormTableData.allFormData || defaultParams?.[1] || {}
  )

  // ????????????????????? form ?????????
  const getActivetFieldValues = useCallback((): Store => {
    if (!form) {
      return {}
    }

    return form.getFieldsValue(null, () => true)
  }, [form])

  const formRef = useRef(form)
  formRef.current = form
  /* ???????????????????????? searchType, ?????????????????? */
  useEffect(() => {
    if (!formRef.current) {
      return
    }

    formRef.current.setFieldsValue(allFormData)
  }, [type])

  // ?????????????????????????????????????????? form ??? initial values
  useEffect(() => {
    // ????????????????????????????????????????????????
    if (params.length > 0) {
      run(...params)
      return
    }

    // ??????????????????????????? submit
    if (!manual) {
      _submit(defaultParams)
    }
  }, [])

  const changeType = useCallback(() => {
    const currentFormData = getActivetFieldValues()
    setAllFormData({ ...allFormData, ...currentFormData })

    const targetType = type === 'simple' ? 'advance' : 'simple'
    setType(targetType)
  }, [type, allFormData, getActivetFieldValues])

  const validateFields: () => Promise<any> = useCallback(() => {
    const fieldValues = getActivetFieldValues()
    if (!form) {
      return Promise.resolve()
    }

    const fields = Object.keys(fieldValues)
    if (!form.getInternalHooks) {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        form.validateFields(fields, (errors, values) => {
          if (errors) {
            reject(errors)
          } else {
            resolve(values)
          }
        })
      })
    }

    return (form.validateFields as AntdValidateFields)(fields)
  }, [form])

  const _submit = useCallback(
    (initParams?: any) => {
      setTimeout(() => {
        validateFields()
          .then(() => {
            const activeFormData = getActivetFieldValues()
            // ??????????????????
            const _allFormData = { ...allFormData, ...activeFormData }
            setAllFormData(_allFormData)

            // has defaultParams
            if (initParams) {
              run(initParams[0], activeFormData, {
                allFormData: _allFormData,
                type
              })
              return
            }

            run(
              {
                pageSize: options.defaultPageSize || 10,
                ...((params[0] as PaginatedParams[0] | undefined) || {}), // ?????? manual ??????????????????????????? submit??????????????? params[0]
                current: 1
              },
              activeFormData,
              {
                allFormData: _allFormData,
                type
              }
            )
          })
          .catch((err) => err)
      })
    },
    [getActivetFieldValues, run, params, allFormData, type]
  )

  const reset = useCallback(() => {
    if (form) {
      form.resetFields()
    }
    _submit()
  }, [form, _submit])

  const resetPersistFn = usePersistFn(reset)

  // refreshDeps ?????????reset???
  useUpdateEffect(() => {
    if (!manual) {
      resetPersistFn()
    }
  }, [...refreshDeps])

  const submit = usePersistFn((e: React.SyntheticEvent) => {
    if (e?.preventDefault) {
      e.preventDefault()
    }
    _submit()
  })

  return {
    ...result,
    search: {
      submit,
      type,
      changeType,
      reset
    }
  }
}

export default useAntdTable
