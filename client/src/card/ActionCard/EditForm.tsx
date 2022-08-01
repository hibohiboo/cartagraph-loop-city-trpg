import React, { FocusEventHandler } from 'react'
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form'
import BaseCard from '../BaseCard'
import { CardName, CardType, RightBottom } from '../BaseCard/components'

type ActionCardEditFormData = {
  name: string
  nameRuby: string
}

const EditForm: React.FC<{
  submitForm: (data: ActionCardEditFormData) => void
  form: UseFormReturn<ActionCardEditFormData>
}> = ({
  submitForm,
  form: {
    handleSubmit,
    register,
    formState: { errors },
  },
}) => {
  const onSubmit: SubmitHandler<ActionCardEditFormData> = (data) => {
    submitForm(data)
  }
  const onChange: FocusEventHandler<HTMLInputElement> = () => {
    handleSubmit(onSubmit)()
  }
  return (
    <div>
      <form>
        <label>
          <div>カード名</div>
          <input {...register('name', { required: true, onChange })} />
          {errors.name && <span>カード名は必須です</span>}
        </label>
        <label>
          <div>カード名（ルビ）</div>
          <input {...register('nameRuby', { onChange })} />
        </label>
      </form>
    </div>
  )
}

export const ActionCardEditForm: React.FC = () => {
  // const journey = useAppSelector(selectedJourneyById)
  // const dispatch = useDispatch()
  const form = useForm<ActionCardEditFormData>()
  // if (!journey) return <></>
  // form.setValue('summary', journey.summary)
  // form.setValue('title', journey.title)

  const submitForm = (data: ActionCardEditFormData) => {
    console.log(data)
    // dispatch(
    //   journeysSlice.actions.journeyUpdate({
    //     ...data,
    //     journeyId: journey.journeyId,
    //   }),
    // )
  }
  return (
    <div>
      <EditForm submitForm={submitForm} form={form} />
      <Preview form={form} />
    </div>
  )
}
const Preview: React.FC<{
  form: UseFormReturn<ActionCardEditFormData>
}> = ({ form }) => {
  const card = form.getValues()
  return (
    <BaseCard>
      <CardType text="アクション" />
      <CardName name={card.name} ruby={card.nameRuby} />
      <RightBottom value="icon: Material Design icons" />
    </BaseCard>
  )
}
