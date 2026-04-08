"use client";

import type { ReactNode } from "react";

import { ProgressProvider } from "@bprogress/next/app";

import OpenPanelProvider from "./open-panel";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <OpenPanelProvider>
      <ProgressProvider
        color="#af5e00"
        height="3px"
        memo
        options={{ showSpinner: false }}
        shallowRouting
      >
        {children}
      </ProgressProvider>
    </OpenPanelProvider>
  );
};

export default Providers;
