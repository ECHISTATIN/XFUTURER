'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  firstName: string
  lastName: string
  companyName: string
  departmentName: string
  jobName: string
  email: string
  phone: string
  message: string
}

interface Translations {
  [key: string]: any // 根据你的翻译文件结构调整类型
}

export default function ConsultForm({
  lang,
  translations: t,
}: {
  lang: string
  translations: Translations
}) {
  const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    companyName: '',
    departmentName: '',
    jobName: '',
    email: '',
    phone: '',
    message: '',
  }

  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    Object.keys(initialFormData).forEach((key) => {
      if (!formData[key as keyof FormData]) {
        if (key === 'firstName') newErrors[key] = t.consult.messages.firstName
        else if (key === 'lastName') newErrors[key] = t.consult.messages.lastName
        else if (key === 'email') newErrors[key] = t.consult.messages.email
        else if (key === 'phone') newErrors[key] = t.consult.messages.phone
      }
    })
    return newErrors
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      setIsSubmitting(false)
      return
    }

    setErrors({})
    try {
      const response = await fetch('http://localhost:3000/api/send_email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: `お問い合わせフォーム - ${formData.firstName} ${formData.lastName} 様より`,
          text: `
お名前: ${formData.firstName} ${formData.lastName}
会社名: ${formData.companyName}
部署名: ${formData.departmentName}
役職: ${formData.jobName}
メールアドレス: ${formData.email}
電話番号: ${formData.phone}
問い合わせ内容: ${formData.message}
          `,
        }),
      })

      if (response.ok) {
        alert('Email sent successfully!')
        setFormData(initialFormData)
      } else {
        const errorMessage = await response.text()
        alert(`Failed to send email: ${errorMessage}`)
      }
    } catch (error) {
      console.error('Error while sending email:', error)
      alert(`An error occurred: ${error}`)
    }
    setIsSubmitting(false)
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <form id="consultForm" onSubmit={handleSubmit}>
      <div className="consult-box">
        <div className="consult-tb">
          <div className="input-line">
            <div className="input-fonts">{t.consult.name}</div>
            <span className="must">{t.consult.required}</span>
            <div>
              <label
                style={{
                  position: 'absolute',
                  left: '283px',
                  top: '71.5px',
                }}
              >
                {t.consult.firstName}
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input-field"
                style={{ left: '317px', top: '56px', width: '282px' }}
                placeholder={
                  errors.firstName ? errors.firstName : t.consult.input.firstName
                }
              />
            </div>
            <div>
              <label
                style={{
                  position: 'absolute',
                  left: '634px',
                  top: '71.5px',
                }}
              >
                {t.consult.lastName}
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input-field"
                style={{ left: '668px', top: '56px', width: '282px' }}
                placeholder={
                  errors.lastName ? errors.lastName : t.consult.input.lastName
                }
              />
            </div>
          </div>

          <div className="input-line">
            <label>{t.consult.companyName}</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="input-field"
              placeholder={
                errors.companyName
                  ? errors.companyName
                  : t.consult.input.companyName
              }
            />
          </div>

          <div className="input-line">
            <label>{t.consult.departmentName}</label>
            <input
              type="text"
              name="departmentName"
              value={formData.departmentName}
              onChange={handleChange}
              className="input-field"
              placeholder={
                errors.departmentName
                  ? errors.departmentName
                  : t.consult.input.departmentName
              }
            />
          </div>

          <div className="input-line">
            <label>{t.consult.jobName}</label>
            <input
              type="text"
              name="jobName"
              value={formData.jobName}
              onChange={handleChange}
              className="input-field"
              placeholder={
                errors.jobName ? errors.jobName : t.consult.input.jobName
              }
            />
          </div>

          <div className="input-line">
            <label>
              {t.consult.email}
              <span className="must">{t.consult.required}</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder={errors.email ? errors.email : 'inf@example.com'}
            />
          </div>

          <div className="input-line">
            <label>
              {t.consult.phone}
              <span className="must">{t.consult.required}</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              placeholder={errors.phone ? errors.phone : '0120-2345-6789'}
            />
            <div
              style={{
                marginLeft: '125px',
                marginTop: '85px',
                fontFamily: 'Noto Sans JP, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                letterSpacing: '0px',
                color: '#1A1A1A',
              }}
            >
              {t.consult.phoneNote}
            </div>
          </div>

          <div className="input-line">
            <label>{t.consult.message}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input-field"
              style={{
                height: '200px',
                resize: 'vertical',
                top: '620px',
                padding: '10px 20px',
              }}
              placeholder={
                errors.message ? errors.message : t.consult.input.message
              }
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '717px',
          height: '54px',
          marginLeft: '602px',
          marginTop: '70px',
          flexDirection: 'column',
        }}
      >
        <span
          style={{
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '500',
            fontSize: '16px',
            letterSpacing: '0.3px',
            lineHeight: '27px',
            color: '#333333',
          }}
        >
          {t.consult.agree1}
        </span>
        <span
          style={{
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '500',
            fontSize: '16px',
            letterSpacing: '0.3px',
            lineHeight: '27px',
            color: '#333333',
          }}
        >
          {t.consult.agree2}
        </span>
      </div>

      <div className="privacy">
        <div className="privacy-line">
          <span className="privacy-f1">{t.consult.privacyPolicy}</span>
        </div>
        <span className="privacy-f2">{t.consult.policyInfo}</span>
        <span className="privacy-f3">{t.consult.managementTitle}</span>
        <span className="privacy-f2" style={{ marginTop: '10px' }}>
          {t.consult.managementContent}
        </span>
      </div>

      <div className="check">
        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
        <span className="check-f">{t.consult.checkLabel}</span>
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={!isChecked || isSubmitting}
      >
        {isSubmitting ? t.consult.buttonSubmitting : t.consult.buttonSubmit}
      </button>
    </form>
  )
}