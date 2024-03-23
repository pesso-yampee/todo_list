'use client'

import { Button } from '@/_components/common/button'
import { InputField } from '@/_components/common/input-field'
import { Box } from '@mui/material'
import { useInputForm } from './logics/use-input-form'

export const TodoAddArea = () => {
  const {control, isCreateLoading, handleSubmit} = useInputForm()  

  return (
    <Box
      component={'form'}
      marginTop={'16px'}
      display={'grid'}
      gap={'16px'}
      onSubmit={handleSubmit}
    >
      <Box display={'grid'} gap={'16px'}>
        <InputField
          control={control}
          name={'title'}
          placeholder={'名前'}
          rules={{ required: '名前を入力してください' }}
        />
        <InputField control={control} name={'detail'} placeholder={'詳細'} />
        <Button
          type={'submit'}
          color={'success'}
          text={'作成する'}
          isLoading={isCreateLoading}
        ></Button>
      </Box>
    </Box>
  )
}
