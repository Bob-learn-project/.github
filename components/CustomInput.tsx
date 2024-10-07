import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from './ui/input'

import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'


interface CustomInputProps {
  //全部参数封装到函数 学习z库 important
  control: Control<z.infer<typeof formSchema>>
  name: FieldPath<z.infer<typeof formSchema>>
  label: string
  placeholder: string
}

const formSchema = authFormSchema('sign-up')

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {

  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className='text-20 font-medium placeholder:text-16 rounded-xl border border-gray-300 text-gray-900 placeholder:text-gray-600'
                  type={name === 'password' ? 'password' : 'text'}
                  {...field} />
              </FormControl>
              <FormMessage className='form-message mt-2' />
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default CustomInput
