import { IconPresentation } from '@tabler/icons-react'
import { getTranslations } from 'next-intl/server'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const Results = async () => {
  const t = await getTranslations('solutions.results')
  return (
    <section className="container max-w-7xl space-y-8 py-16">
      <Badge>
        <IconPresentation />
        {t('badge')}
      </Badge>
      <Separator />
      <div className="grid grid-cols-2 gap-28">
        <h2 className="whitespace-pre-line font-bold font-helvetica text-4xl">
          {t('title')}
        </h2>
        <p className="text-2xl tracking-tight">{t('description')}</p>
      </div>
      <Table className="overflow-hidden rounded-sm border bg-card">
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="px-6 py-4 text-left font-semibold text-lg">
              &nbsp;
            </TableHead>
            <TableHead className="px-6 py-4 font-semibold">
              {t('table.title.without')}
            </TableHead>
            <TableHead className="px-6 py-4 font-semibold">
              {t('table.title.with')}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="">
            <TableCell className="px-6 py-4 font-helvetica font-medium text-lg">
              {t('table.row.downtown.title')}
            </TableCell>
            <TableCell className="px-6 py-4 text-lg text-muted-foreground">
              {t('table.row.downtown.without')}
            </TableCell>
            <TableCell className="px-6 py-4 font-medium text-lg text-primary">
              {t('table.row.downtown.with')}
            </TableCell>
          </TableRow>
          <TableRow className="">
            <TableCell className="px-6 py-4 font-helvetica font-medium text-lg">
              {t('table.row.maintenance.title')}
            </TableCell>
            <TableCell className="px-6 py-4 text-lg text-muted-foreground">
              {t('table.row.maintenance.without')}
            </TableCell>
            <TableCell className="px-6 py-4 font-medium text-lg text-primary">
              {t('table.row.maintenance.with')}
            </TableCell>
          </TableRow>
          <TableRow className="">
            <TableCell className="px-6 py-4 font-helvetica font-medium text-lg">
              {t('table.row.performance.title')}
            </TableCell>
            <TableCell className="px-6 py-4 text-lg text-muted-foreground">
              {t('table.row.performance.without')}
            </TableCell>
            <TableCell className="px-6 py-4 font-medium text-lg text-primary">
              {t('table.row.performance.with')}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  )
}
