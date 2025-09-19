'use client'

import { useTransition } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { sendContactEmail } from '../actions/mutation'
import { ContactFormData, createContactSchema } from '../schema/contact-schema'

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const t = useTranslations('contact.form')

  const form = useForm<ContactFormData>({
    resolver: zodResolver(
      createContactSchema(t as unknown as (key: string) => string)
    ),
    defaultValues: {
      name: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      message: '',
      subject: '',
    },
    mode: 'onBlur',
  })

  async function onSubmit(values: ContactFormData) {
    startTransition(async () => {
      const result = await sendContactEmail(values)

      if (result.success) {
        form.reset()
        toast.success(t('success'))
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="relative z-10 space-y-6 rounded-2xl bg-white"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>{t('name.label')}</FormLabel>
                <FormControl>
                  <Input
                    autoFocus
                    placeholder={t('name.placeholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>{t('company.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('company.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>{t('email.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('email.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>{t('phone.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('phone.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('subject.label')}</FormLabel>
              <FormControl>
                <Input placeholder={t('subject.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>{t('message.label')}</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-[100px] sm:min-h-[120px]"
                  placeholder={t('message.placeholder')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full md:w-fit" disabled={isPending} type="submit">
          {isPending ? (
            <span>{t('button.loading')}</span>
          ) : (
            <>{t('button.text')}</>
          )}
        </Button>
      </form>
    </Form>
  )
}
