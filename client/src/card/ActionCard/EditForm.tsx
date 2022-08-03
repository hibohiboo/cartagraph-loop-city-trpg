import React, { FocusEventHandler, useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form'
import { Image } from 'react-konva'
import html2canvas from 'html2canvas'
import { useImage } from '@/domain/konva/useImage'
import { textToIncludeRubyTagsTextSnitized } from '@/domain/ruby'
import BaseCard from '../BaseCard'
import { CardName, CardType, family, RightBottom } from '../BaseCard/components'

type ActionCardEditFormData = {
  name: string
  nameRuby: string
  flavor: string
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
  const onBlur: FocusEventHandler<HTMLInputElement> = () => {
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
        <label>
          <div>flavor</div>
          <textarea
            {...register('flavor', {})}
            rows={5}
            style={{ width: '210px' }}
          />
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
  const ref = useRef<HTMLDivElement>(null)
  const [url, setUrl] = useState('')
  const [image] = useImage(url)
  const watchFlavor = form.watch('flavor')
  useEffect(() => {
    ;(async () => {
      if (ref.current == null) return
      // そのままだとぼやけるので、2倍に出力して0.5に縮小する
      const canvas = await html2canvas(ref.current, { width: 210, scale: 2 })
      setUrl(canvas.toDataURL('img/png'))
    })()
  }, [watchFlavor])

  return (
    <div>
      <div style={{ width: '1px', height: '1px', overflow: 'hidden' }}>
        <div
          style={{
            whiteSpace: 'pre-line',
            width: '210px',
            backgroundColor: 'white',
            color: 'black',
            fontSize: '14px',
            fontFamily: family.serif,
          }}
          ref={ref}
          dangerouslySetInnerHTML={{
            __html: textToIncludeRubyTagsTextSnitized(watchFlavor),
          }}
        ></div>
        <img src={url} alt="" />
      </div>
      <BaseCard>
        <CardType text="アクション" />
        <CardName name={card.name} ruby={card.nameRuby} />
        <Image x={30} y={50} image={image} scaleX={0.5} scaleY={0.5} />
        <RightBottom value="icon: Material Design icons" />
      </BaseCard>
    </div>
  )
}
