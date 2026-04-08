// Centralized OpenPanel tracking helper for client components
// Uses the `useOpenPanel` hook under the hood.

"use client";

import { useOpenPanel } from "@openpanel/nextjs";

type CommonEventProps = {
  page?: string;
  path?: string;
  locale?: string;
  component?: string;
};

type UiClickProps = CommonEventProps & {
  label: string;
  href?: string;
  position?: string;
};

type LocaleChangeProps = CommonEventProps & {
  from: string;
  to: string;
};

type ProductFilterChangeProps = CommonEventProps & {
  filter: string;
  value: string;
};

type ProductOpenProps = CommonEventProps & {
  productSlug: string;
  source?: string;
};

type DatasheetOpenProps = CommonEventProps & {
  productSlug?: string;
  datasheetType: "safetyDs" | "technicalDs";
  url: string;
};

type ContactSubmitProps = CommonEventProps & {
  status: "attempt" | "success" | "error";
};

export function useOpenPanelTracking() {
  const op = useOpenPanel();

  const base = (props?: CommonEventProps) => ({
    path:
      typeof window !== "undefined" ? window.location.pathname : props?.path,
    ...props,
  });

  const trackUiClick = (props: UiClickProps) => {
    op.track("ui_click", {
      ...base(props),
      label: props.label,
      href: props.href,
      position: props.position,
    });
  };

  const trackLocaleChange = (props: LocaleChangeProps) => {
    op.track("locale_change", {
      ...base(props),
      from: props.from,
      to: props.to,
    });
  };

  const trackProductFilterChange = (props: ProductFilterChangeProps) => {
    op.track("product_filter_change", {
      ...base(props),
      filter: props.filter,
      value: props.value,
    });
  };

  const trackProductOpen = (props: ProductOpenProps) => {
    op.track("product_open", {
      ...base(props),
      productSlug: props.productSlug,
      source: props.source,
    });
  };

  const trackDatasheetOpen = (props: DatasheetOpenProps) => {
    op.track("datasheet_open", {
      ...base(props),
      productSlug: props.productSlug,
      datasheetType: props.datasheetType,
      url: props.url,
    });
  };

  const trackContactSubmit = (props: ContactSubmitProps) => {
    op.track("contact_submit", {
      ...base(props),
      status: props.status,
    });
  };

  return {
    trackUiClick,
    trackLocaleChange,
    trackProductFilterChange,
    trackProductOpen,
    trackDatasheetOpen,
    trackContactSubmit,
  };
}
